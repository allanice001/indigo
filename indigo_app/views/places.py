# coding=utf-8
import logging
import json
from collections import defaultdict
from datetime import timedelta

from actstream.models import Action
from django.db.models import Count, Subquery, IntegerField, OuterRef
from django.shortcuts import redirect
from django.views.generic import TemplateView
from django.views.generic.list import MultipleObjectMixin

from indigo_api.models import Country, Annotation, Task, Amendment
from indigo_api.serializers import WorkSerializer, DocumentSerializer
from indigo_api.views.works import WorkViewSet
from indigo_api.views.documents import DocumentViewSet

from .base import AbstractAuthedIndigoView, PlaceViewBase


log = logging.getLogger(__name__)


class PlaceListView(AbstractAuthedIndigoView, TemplateView):
    template_name = 'place/list.html'
    js_view = ''

    def dispatch(self, request, **kwargs):
        if Country.objects.count == 1:
            return redirect('place', place=Country.objects.all()[0].place_code)

        return super(PlaceListView, self).dispatch(request, **kwargs)

    def get_context_data(self, **kwargs):
        context = super(PlaceListView, self).get_context_data(**kwargs)

        context['countries'] = Country.objects\
            .prefetch_related('country')\
            .annotate(n_works=Count('works'))\
            .annotate(n_open_tasks=Subquery(
                Task.objects.filter(state__in=Task.OPEN_STATES, country=OuterRef('pk'))
                .values('country')
                .annotate(cnt=Count('pk'))
                .values('cnt'),
                output_field=IntegerField()
            ))\
            .all()

        return context


class PlaceDetailView(PlaceViewBase, AbstractAuthedIndigoView, TemplateView):
    template_name = 'place/detail.html'
    js_view = 'LibraryView'
    tab = 'works'

    def get_context_data(self, **kwargs):
        context = super(PlaceDetailView, self).get_context_data(**kwargs)

        serializer = WorkSerializer(context={'request': self.request}, many=True)
        works = WorkViewSet.queryset.filter(country=self.country, locality=self.locality)
        context['works_json'] = json.dumps(serializer.to_representation(works))

        serializer = DocumentSerializer(context={'request': self.request}, many=True)
        docs = DocumentViewSet.queryset.filter(work__country=self.country, work__locality=self.locality)
        context['documents_json'] = json.dumps(serializer.to_representation(docs))

        # map from document id to count of open annotations
        annotations = Annotation.objects.values('document_id')\
            .filter(closed=False)\
            .filter(document__deleted=False)\
            .annotate(n_annotations=Count('document_id'))\
            .filter(document__work__country=self.country)
        if self.locality:
            annotations = annotations.filter(document__work__locality=self.locality)

        annotations = {x['document_id']: {'n_annotations': x['n_annotations']} for x in annotations}
        context['annotations_json'] = json.dumps(annotations)

        # tasks for place
        tasks = Task.objects.filter(work__country=self.country, work__locality=self.locality)

        # tasks counts per state and per work
        work_tasks = tasks.values('work_id', 'state').annotate(n_tasks=Count('work_id'))
        task_states = defaultdict(dict)
        for row in work_tasks:
            task_states[row['work_id']][row['state']] = row['n_tasks']

        # summarise task counts per work
        work_tasks = {}
        for work_id, states in task_states.items():
            work_tasks[work_id] = {'n_%s_tasks' % s: states.get(s, 0) for s in Task.STATES}
            work_tasks[work_id]['n_tasks'] = sum(states.itervalues())
        context['work_tasks_json'] = json.dumps(work_tasks)

        # tasks counts per state and per document
        doc_tasks = tasks.values('document_id', 'state').annotate(n_tasks=Count('document_id'))
        task_states = defaultdict(dict)
        for row in doc_tasks:
            task_states[row['document_id']][row['state']] = row['n_tasks']

        # summarise task counts per document
        document_tasks = {}
        for doc_id, states in task_states.items():
            document_tasks[doc_id] = {'n_%s_tasks' % s: states.get(s, 0) for s in Task.STATES}
            document_tasks[doc_id]['n_tasks'] = sum(states.itervalues())
        context['document_tasks_json'] = json.dumps(document_tasks)

        # summarise amendments per work
        amendments = Amendment.objects.values('amended_work_id')\
            .filter(amended_work_id__in=[w.id for w in works])\
            .annotate(n_amendments=Count('pk'))\
            .order_by()\
            .all()

        amendments = {a['amended_work_id']: {'n_amendments': a['n_amendments']} for a in amendments}
        context['work_n_amendments_json'] = json.dumps(amendments)

        return context


class PlaceActivityView(PlaceViewBase, MultipleObjectMixin, TemplateView):
    model = None
    slug_field = 'place'
    slug_url_kwarg = 'place'
    template_name = 'place/activity.html'
    tab = 'activity'

    object_list = None
    page_size = 20
    js_view = ''
    threshold = timedelta(seconds=3)

    def get_context_data(self, **kwargs):
        context = super(PlaceActivityView, self).get_context_data(**kwargs)

        activity = Action.objects.filter(data__place_code=self.place.place_code)
        activity = self.coalesce_entries(activity)

        paginator, page, versions, is_paginated = self.paginate_queryset(activity, self.page_size)
        context.update({
            'paginator': paginator,
            'page': page,
            'is_paginated': is_paginated,
            'place': self.place,
        })

        return context

    def coalesce_entries(self, stream):
        """ If more than 1 task were added to a workflow at once, rather display something like
        '<User> added <n> tasks to <workflow> at <time>'
        """
        activity_stream = []
        added_stash = []
        for i, action in enumerate(stream):
            if i == 0:
                # is the first action an addition?
                if getattr(action, 'verb', None) == 'added':
                    added_stash.append(action)
                else:
                    activity_stream.append(action)

            else:
                # is a subsequent action an addition?
                if getattr(action, 'verb', None) == 'added':
                    # if yes, was the previous action also an addition?
                    prev = stream[i - 1]
                    if getattr(prev, 'verb', None) == 'added':
                        # if yes, did the two actions happen close together and was it on the same workflow?
                        if prev.timestamp - action.timestamp < self.threshold \
                                and action.target_object_id == prev.target_object_id:
                            # if yes, the previous action was added to the stash and
                            # this action should also be added to the stash
                            added_stash.append(action)
                        else:
                            # if not, this action should start a new stash,
                            # but first squash, add and delete the existing stash
                            stash = self.combine(added_stash)
                            activity_stream.append(stash)
                            added_stash = []
                            added_stash.append(action)
                    else:
                        # the previous action wasn't an addition
                        # so this action should start a new stash
                        added_stash.append(action)
                else:
                    # this action isn't an addition, so squash and add the existing stash first
                    # (if it exists) and then add this action
                    if len(added_stash) > 0:
                        stash = self.combine(added_stash)
                        activity_stream.append(stash)
                        added_stash = []
                    activity_stream.append(action)

        return activity_stream

    def combine(self, stash):
        first = stash[0]
        if len(stash) == 1:
            return first
        else:
            workflow = first.target
            action = Action(actor=first.actor, verb='added %d tasks to' % len(stash), action_object=workflow)
            action.timestamp = first.timestamp
            return action
