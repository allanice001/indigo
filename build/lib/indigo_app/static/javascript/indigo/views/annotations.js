(function(exports) {
  "use strict";

  if (!exports.Indigo) exports.Indigo = {};
  Indigo = exports.Indigo;

  /** This view handles a single annotation in a thread.
   */
  Indigo.AnnotationView = Backbone.View.extend({
    className: function() {
      return 'annotation ' + (!this.model.get('in_reply_to') ? 'root' : 'reply');
    },
    events: {
      'click .delete-anntn': 'delete',
      'click .edit-anntn': 'edit',
      'click .close-anntn': 'close',
      'click .btn.save': 'save',
      'click .btn.cancel': 'cancel',
      'click .btn.unedit': 'unedit',
      'click .create-anntn-task': 'createTask',
    },

    initialize: function(options) {
      this.template = options.template;
      this.listenTo(this.model, 'destroy', this.remove);

      // is this view dealing with starting a new annotation thread?
      this.isNew = this.model.isNew();
      this.listenTo(this.model, 'sync', this.saved);
      this.listenTo(this.model, 'change', this.render);

      this.render();
    },

    render: function() {
      this.$el.empty();

      if (this.isNew) {
        // controls for adding a new annotation
        var template = $("#new-annotation-template")
          .clone()
          .attr('id', '')
          .show()
          .get(0);
        this.el.appendChild(template);
        this.$el.addClass('is-new');
      } else {
        var html = this.model.toHtml(),
            json = this.model.toJSON();

        json.html = html;
        if (json.task) {
          json.task = json.task.toJSON();

          json.task.view_url =
            "/places/" +
            Indigo.view.document.work.get('country') +
            (Indigo.view.document.work.get('locality') ? ('-' + Indigo.view.document.work.get('locality')) : '') +
            "/tasks/" +
            json.task.id;
        }
        json.created_at_text = moment(json.created_at).fromNow();

        json.permissions = {
          'can_change': (Indigo.user.hasPerm('indigo_api.change_annotation') &&
                          (Indigo.user.get('is_staff') ||
                            json.created_by_user && json.created_by_user.id == Indigo.user.get('id'))),
          'can_create_task': !json.task && Indigo.user.hasPerm('indigo_api.add_task'),
        };
        json.permissions.readonly = !(json.permissions.can_change || json.permissions.can_create_task);

        this.$el.append(this.template(json));
      }
    },
    
    delete: function(e) {
      if (confirm("Are you sure?")) {
        this.remove();
        this.model.destroy();
      }
    },

    saved: function() {
      this.isNew = false;
      this.$el.removeClass('is-new');
      this.render();
    },

    cancel: function(e) {
      this.remove();
      this.model.destroy();
    },

    save: function(e) {
      var text = this.$el.find('textarea').val();
      if (!text) return;

      this.model.set('text', text);
      this.model.save();
    },

    edit: function(e) {
      var $textarea = $(document.createElement('textarea'));
      $textarea.addClass('form-control').val(this.model.get('text'));

      this.$el
        .find('.button-container')
        .append('<button class="btn btn-primary btn-sm save">Save</button>')
        .append('<button class="btn btn-outline-secondary btn-sm unedit float-right">Cancel</button>')
        .end()
        .find('.content')
        .replaceWith($textarea);

      $textarea.focus().trigger('input');
    },

    unedit: function(e) {
      e.stopPropagation();
      this.render();
    },

    close: function(e) {
      if (confirm('Are you sure you want to resolve this?')) {
        this.model.set('closed', true);
        this.model.save();
      }
    },

    createTask: function(e) {
      // create a task based on this annotation
      this.model.createTask();
    },
  });


  /** This view handles a thread of annotations.
   */
  Indigo.AnnotationThreadView = Backbone.View.extend({
    className: 'annotation-thread ig',
    events: {
      'click button.post': 'postReply',
      'focus textarea': 'replyFocus',
      'blur textarea': 'replyBlur',
      'click': 'focus',
      'input textarea': 'textareaChanged',
    },

    initialize: function(options) {
      this.annotationTemplate = options.template;
      this.document = options.document;

      // root annotation
      this.root = this.model.find(function(a) { return !a.get('in_reply_to'); });
      this.anchor = options.anchor || this.root.get('anchor').id;

      // views for each annotation
      this.annotationViews = this.model.map(function(note) {
        return new Indigo.AnnotationView({model: note, template: options.template});
      });

      this.listenTo(this.model, 'destroy', this.annotationDeleted);
      this.listenTo(this.root, 'change:closed', this.setClosed);
      $('body').on('click', _.bind(this.blurred, this));

      this.render();
    },

    render: function() {
      this.$el.empty();

      this.annotationViews.forEach(function(note) { 
        this.el.appendChild(note.el);
      }, this);

      if (Indigo.user.hasPerm('indigo_api.add_annotation')) {
        $('<div class="annotation reply-container">')
          .append('<textarea class="form-control reply-box" placeholder="Reply...">')
          .append('<button class="btn btn-primary btn-sm post hidden" disabled>Reply</button>')
          .appendTo(this.el);
      }
    },

    setClosed: function() {
      this.$el.toggleClass('closed', this.root.get('closed'));

      if (this.root.get('closed')) {
        this.blur();
        this.$el.remove();
      } else {
        this.display();
      }
    },

    display: function(forInput) {
      if (this.root.get('closed')) return;

      var node = document.getElementById(this.anchor);
      if (node) node.appendChild(this.el);

      // the DOM elements get rudely remove from the view when the document
      // sheet is re-rendered, which seems to break event handlers, so
      // we have to re-bind them
      this.delegateEvents();
      this.annotationViews.forEach(function(v) { v.delegateEvents(); });

      if (forInput) {
        this.focus();
        this.$el
          .find('textarea')
          .first()
          .focus();
      }
    },

    focus: function() {
      this.$el.addClass('focused');
      this.$el.parent().addClass('annotation-focused');
    },

    blurred: function(e) {
      if (!(this.el == e.target || jQuery.contains(this.el, e.target))) {
        this.blur();
      }
    },

    blur: function(e) {
      this.$el.removeClass('focused');
      this.$el.parent().removeClass('annotation-focused');
    },

    replyFocus: function(e) {
      $(e.target).closest('.annotation').find('.btn.post').removeClass('hidden');
    },

    replyBlur: function(e) {
      $(e.target).closest('.annotation').find('.btn.post').toggleClass('hidden', this.$el.find('textarea').val() === '');
    },

    postReply: function(e) {
      var text = this.$el.find('textarea').val(),
          view,
          reply,
          self = this;

      reply = new Indigo.Annotation({
        text: text,
        in_reply_to: this.root.get('id'),
        anchor: this.root.get('anchor'),
      });
      this.document.annotations.add(reply);

      this.$el.find('.btn.post').prop('disabled', true);

      reply
        .save()
        .then(function() {
          view = new Indigo.AnnotationView({model: reply, template: self.annotationTemplate});
          self.model.add(reply);
          self.annotationViews.push(view);

          view.$el.insertBefore(self.$el.find('.reply-container')[0]);

          self.$el.find('textarea').val('');
          self.$el.find('.btn.post').addClass('hidden');
        });
    },

    annotationDeleted: function(note) {
      if (this.root == note) {
        if (this.model.length > 0) {
          // delete everything else
          this.model.toArray().forEach(function(n) { n.destroy(); });
        }

        this.blur();
        this.remove();
        this.trigger('deleted', this);
      }
    },

    textareaChanged: function(e) {
      var input = e.currentTarget;

      $(input)
        .siblings('.btn.save, .btn.post')
        .attr('disabled', input.value.trim() === '');


      if (input.scrollHeight > input.clientHeight) {
        input.style.height = input.scrollHeight + "px";
      }
    },
  });


  /**
   * Handle all the annotations in a document
   */
  Indigo.DocumentAnnotationsView = Backbone.View.extend({
    el: "#document-sheet",
    events: {
      'click #new-annotation-floater': 'newAnnotation',
    },

    initialize: function(options) {
      var self = this;

      this.threadViews = [];
      this.prefocus = options.prefocus;
      this.annotatable = this.model.tradition().settings.annotatable;

      this.$newButton = $("#new-annotation-floater");
      this.$el.on('mouseover', this.annotatable, _.bind(this.enterSection, this));

      this.model.annotations = this.annotations = new Indigo.AnnotationList([], {document: this.model});

      this.annotations.fetch().then(function() {
        // group by thread and transform into collections
        var threads = _.map(self.annotations.groupBy(function(a) {
          return a.get('in_reply_to') || a.get('id');
        }), function(notes) {
          var thread = new Backbone.Collection(notes, {comparator: 'created_at'});
          notes.forEach(function(n) { n.thread = thread; });
          return thread;
        });

        var template = self.annotationTemplate = Handlebars.compile($("#annotation-template").html());
        threads.forEach(_.bind(self.makeView, self));

        self.renderAnnotations();
      });
    },

    makeView: function(thread) {
      var view = new Indigo.AnnotationThreadView({
        model: thread,
        template: this.annotationTemplate,
        document: this.model
      });

      this.listenTo(view, 'deleted', this.threadDeleted);
      this.threadViews.push(view);

      return view;
    },

    threadDeleted: function(view) {
      this.threadViews = _.without(this.threadViews, view);
    },

    renderAnnotations: function() {
      // TODO: this gets called every time a new TOC entry is selected,
      // so it will always attempt to prefocus an annotation. It just so happens
      // that the click events prevent anything after the initial prefocus from
      // working. It's dirty, we should only prefocus on the first render.
      var prefocus = this.prefocus;

      this.threadViews.forEach(function(v) {
        v.display();
        if (v.model.at(0).get('id').toString() == prefocus) {
          v.$el.click();
        }
      });
    },

    enterSection: function(e) {
      if (!Indigo.user.authenticated() ||
          !Indigo.user.hasPerm('indigo_api.add_annotation')) return;

      var target = e.currentTarget,
          $target = $(target);

      if (!$target.is(this.annotatable)) return;

      if ($target.children(".annotation-thread").length === 0) {
        this.showAnnotationButton(target);
      } else {
        this.$newButton.hide();
      }

      e.stopPropagation();
    },

    showAnnotationButton: _.debounce(function(target) {
      target.appendChild(this.$newButton[0]);
      this.$newButton.show();
    }, 100),

    // setup a new annotation thread
    newAnnotation: function(e) {
      var anchor = this.$newButton.closest(this.annotatable).attr('id'),
          root = new Indigo.Annotation({
            anchor: {
              id: anchor,
            },
          }),
          thread,
          view;

      this.threadViews.forEach(function(v) { v.blur(); });

      this.annotations.add(root);
      thread = new Backbone.Collection([root]);
      view = this.makeView(thread);

      this.$newButton.hide();
      view.display(true);

      e.stopPropagation();
    },
  });
})(window);
