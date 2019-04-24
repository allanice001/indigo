from django.conf.urls import url, include
from django.views.decorators.cache import cache_page
from rest_framework.routers import DefaultRouter

from .views import attachments
from .views import documents
from .views import misc
from .views import publications
from .views import works


PUBLICATION_CACHE_SECS = 3600 * 24 * 30  # one month

router = DefaultRouter(trailing_slash=False)
router.register(r'documents', documents.DocumentViewSet, base_name='document')
router.register(r'documents/(?P<document_id>[0-9]+)/attachments', attachments.AttachmentViewSet, base_name='document-attachments')
router.register(r'documents/(?P<document_id>[0-9]+)/revisions', documents.RevisionViewSet, base_name='document-revisions')
router.register(r'documents/(?P<document_id>[0-9]+)/annotations', documents.AnnotationViewSet, base_name='document-annotations')
router.register(r'works', works.WorkViewSet, base_name='work')
router.register(r'works/(?P<work_id>[0-9]+)/amendments', works.WorkAmendmentViewSet, base_name='work-amendments')

urlpatterns = [
    url(r'^search/documents$', documents.SearchView.as_view(), name='document-search'),
    url(r'^render$', documents.RenderView.as_view(), name='render'),
    url(r'^render/coverpage$', documents.RenderView.as_view(coverpage_only=True), name='render'),
    url(r'^parse$', documents.ParseView.as_view(), name='parse'),
    url(r'^analysis/link-terms$', documents.LinkTermsView.as_view(), name='link-terms'),
    url(r'^analysis/link-references$', documents.LinkReferencesView.as_view(), name='link-references'),
    url(r'^publications/(?P<country>[a-z]{2})(-(?P<locality>[^/]+))?/find$',
        cache_page(PUBLICATION_CACHE_SECS)(publications.FindPublicationsView.as_view()), name='find-publications'),

    url(r'documents/(?P<document_id>[0-9]+)/media/(?P<filename>.*)$', attachments.AttachmentMediaView.as_view(), name='document-media'),
    url(r'documents/(?P<document_id>[0-9]+)/activity', documents.DocumentActivityViewSet.as_view({
        'get': 'list', 'post': 'create', 'delete': 'destroy'}), name='document-activity'),

    url(r'^', include(router.urls)),
]
