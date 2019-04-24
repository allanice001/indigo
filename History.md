
n.n.n / 2019-04-24
==================

  * fixing gitignore
  * Fixes for Python3 compatibility
  * Merge pull request #500 from laws-africa/speed
  * Prefetch for work view
  * Merge pull request #499 from laws-africa/speed
  * Use managers for related, defer expensive document fields
  * Prefetching
  * Don't load doc unnecessarily
  * FIX tests
  * FIX tests
  * Query tweaks
  * Prefer using Task.objects which honours defer and prefetches
  * prefer select_related to prefetch_related
  * Avoid relationship
  * Avoid unnecessary db queries
  * Avoid calling DB in loops
  * Merge pull request #497 from laws-africa/update-editor-cheatsheet
  * add LONGTITLE, CROSSHEADING, //Itals// and **Bold** to cheatsheet
  * Merge pull request #493 from laws-africa/fix-comments
  * Don't special-case components in the TOC
  * FIX for links to schedule elements
  * Merge pull request #492 from laws-africa/crossheadings
  * Merge pull request #491 from laws-africa/task-filters
  * Merge pull request #494 from laws-africa/check-repeal-task
  * Update indigo_app/views/workflows.py
  * code improvement
  * Remove weird header. Clearer message when no tasks match filters.
  * Merge pull request #490 from laws-africa/task-permissions
  * also check for repealed_date when auto-linking repeals on batch create
  * always allow users with 'close_task' permission to submit tasks
  * Use qualified node id when build IDs of toc elements
  * Scope anchor lookups to component
  * Escape LONGTITLE, CROSSHEADING
  * Support for crossheading, longtitle, i and b
  * Remove pagination html
  * Don't paginate task list view
  * Merge branch 'master' into task-filters
  * Re-use task filter in workflow view
  * fix indent
  * allow users to unsubmit their own tasks
  * add conditions to permissions to submit, unsubmit, and close tasks
  * Filter tasks by assigned user
  * Merge pull request #488 from laws-africa/tasks-work
  * random tweak
  * random tweak
  * remove unnecessary <div>
  * give potential_assignees for tasks on work
  * add template
  * random tweaks
  * remove filtering by frbr_uri in TaskListView
  * remove 'Active tasks' from work overview
  * add WorkTasksView, url, to work overview
  * Merge pull request #487 from laws-africa/task-permissions-review
  * Merge branch 'task-permissions-review' of github.com:laws-africa/indigo into task-permissions-review
  * remove unnecessary assign to context × 3
  * Merge branch 'master' into task-permissions-review
  * nuke imports
  * fix typo
  * undo unnecessary template changes
  * use Task.decorate_potential_assignees in all three views
  * Merge pull request #485 from laws-africa/task-workflows
  * Merge pull request #481 from laws-africa/dynamic-download-menu
  * Add workflow ID
  * Update indigo_app/templates/indigo_api/task_detail.html
  * exclude last_assigned_to from potential_reviewers
  * include same logic in workflow detail view
  * move permission lookup (per task) into task list view
  * check for submit_task and close_task permissions on potential assignees
  * Record workflow actions
  * Make workflows a heading
  * Sorting
  * Submit through ajax, permissions
  * New view for updating task workflows
  * Merge pull request #480 from laws-africa/task-detail-assignee
  * Dynamically look up download menu items based on renderers
  * display assigned icon in task detail view
  * Merge pull request #478 from laws-africa/remove-tasks-pubdocs
  * workflow title
  * don't create duplicate task unless existing task is closed
  * revert quotes for consistency
  * don't create another task if one already exists on work
  * remove review tasks for successfully linked publication documents
  * Merge pull request #476 from laws-africa/faster-workflow-page
  * Merge pull request #477 from laws-africa/fix-pub-doc
  * Merge pull request #475 from laws-africa/tweak-pub-docs-task
  * Fix logic for attaching publication docs
  * lh-small -> lh-compact
  * Line height and word breaks on popups
  * Don't compile work timeline unnecessarily
  * Handle works without publication dates
  * Prefetches and smarter task assignee loading
  * Lookup workflow correctly
  * Add --dry-run, write logs, lookup finder for work correctly
  * Merge pull request #470 from laws-africa/task-cards
  * Merge pull request #471 from laws-africa/fix-mgmt-commands
  * Add missing __init__.py files for mgmt commands
  * Break frbr_uri on chars, not works
  * Minor styling changes to task cards
  * Merge pull request #465 from laws-africa/pub-doc-popover
  * Merge pull request #466 from laws-africa/task-tweaks
  * improve popover text, publication document link
  * link document and work in task column view, add popover in task list view
  * reduce whitespace and enable us to link to task on page
  * Merge pull request #462 from laws-africa/pub-doc-manage-cmd
  * Merge pull request #463 from laws-africa/task-tweaks
  * reorder dates – assent is usually first
  * add publication number, link to pub doc, to work popover
  * add work popover to workflow detail view
  * remove unnecessary padding from `assigned` icon
  * don't save work after saving amendment – unnecessary
  * move 'Assigned to' into title of icon
  * unassign tasks on cancellation
  * fix overindentation
  * unindent task descriptions
  * only give open workflows in dropdown (task form)
  * start 'check' publication document tasks in 'pending review' state
  * only give open workflows in dropdown (batch create works)
  * remove 'upload' task on bulk creation of works
  * get user, add tasks to a workflow, only get works without pub docs
  * unicode date, filter (not get) on country
  * start of backfill_publication_docs manage command
  * Merge pull request #455 from laws-africa/slaw-3-1
  * FIX tests
  * ruby 2.6.2 in travis
  * Typo
  * Slaw 3.1 and --ascii for SPEED
  * Merge pull request #454 from laws-africa/au-un
  * indigo-web-2.0.0 for export files.
  * indigo-web 2.0.0 and non-indented paragraphs
  * Move annotatable into traditions, support paragraphs, articles
  * Specify input type when calling slaw.
  * Merge pull request #450 from laws-africa/link-works
  * Merge pull request #452 from laws-africa/link-pub-docs
  * also make tasks to check automatically linked pub docs
  * fix delete pub doc
  * create task if linking pub doc on batch import fails
  * link publication documents on batch import
  * link parent_work
  * refactor `work` to `info` for clarity
  * also link amendments when amending work already exists in database
  * Merge pull request #439 from laws-africa/display-parent
  * Merge pull request #438 from laws-africa/batch-link-related-works
  * Merge pull request #440 from laws-africa/strip-newlines-batch-import
  * div, not p, for parent work in works list view
  * better substitution
  * get commencing / amended / repealing works by place as well as title
  * move workflows above tasks in batch create form
  * Merge pull request #441 from laws-africa/publish-perms-badge
  * Merge branch 'master' into batch-link-related-works
  * Merge pull request #442 from laws-africa/render-part-heads-correctly
  * Merge branch 'master' into render-part-heads-correctly; use unicode_literals
  * Merge branch 'master' of github.com:laws-africa/indigo
  * use u'', not .decode()
  * Merge pull request #437 from laws-africa/new-schedules
  * add parent work to works list view, work popup
  * remove line separator `\u2028` from work titles on import
  * add `publish_document` to Senior Drafter badge permissions
  * dashes not hyphens, don't render dash if no Part title
  * template wording tweaks
  * add any tasks made when linking fails to the workflow/s selected in the form
  * link commencements, single amendments, repeals when bulk creating works
  * FIX legacy schedules
  * Allow rich heading content. Fixes #436
  * Update xsl. Fixes #429
  * Support new style schedules
  * Merge branch 'master' of github.com:laws-africa/indigo
  * Merge pull request #433 from laws-africa/batch-docx
  * tweak review task
  * really get docx and images to attach successfully
  * create review task on document
  * get docx and images to attach successfully
  * improve error message
  * move code around
  * use csv.DictReader, improve error messages
  * improve get_user()
  * use 3-letter rather than 2-letter language code
  * Merge branch 'master' of github.com:laws-africa/indigo
  * Revert "basics of docx bulk upload"
  * basics of docx bulk upload
  * Fix work chooser js
  * Merge pull request #432 from laws-africa/fix-397-pub-doc-error
  * Tests and fix for published works with a publication document.
  * Merge pull request #431 from laws-africa/no-java
  * Nest place tabs so it's easier to override
  * No more java
  * Merge branch 'quick-work-chooser'
  * Quick work chooser
  * Merge pull request #427 from laws-africa/count-works
  * Merge pull request #428 from laws-africa/stub-warning-tweak
  * don't show warning about a PiT on a stub if document/s 'deleted'
  * give number of (filtered) works in place detail view
  * Merge pull request #424 from laws-africa/work-create-tweak
  * Merge pull request #425 from laws-africa/kl-adaptions
  * Merge pull request #426 from laws-africa/user-overview
  * fix test
  * limit activity on overview to the 20 most recent items
  * Don't hardcode render formats.
  * Merge pull request #422 from laws-africa/za-gazette-fix
  * redirect to overview after creating (as with editing)
  * Merge pull request #419 from laws-africa/batch-create-tasks
  * move workflow assignment into make_tasks() and other loose ends
  * use form initial rather than hardcoding defaults in template
  * Permit null size, since remote URL may not have size info
  * FIX and trust gazettes from opengazettes
  * tweaks – add search to workflow dropdown, swap button colours
  * use ModelMultipleChoiceField for workflows, add creation option
  * add bulk-created tasks to existing workflow/s on creation
  * move hard-coded task details into form
  * don't give error if unchecked
  * create workflow and add tasks to it
  * add linking task
  * improve repetition a bit more
  * slightly improve repetition
  * separate tasks on primary works and all works
  * match labels to task titles
  * use form choices rather than repeating in context
  * batch create more than one task
  * Merge branch 'master' into batch-create-tasks
  * Merge pull request #411 from laws-africa/388_key_details_on_hover
  * Update indigo_app/templates/indigo_api/work_overview.html
  * Fixed incorrect links
  * Merge branch 'master' into batch-create-tasks
  * Merge pull request #418 from laws-africa/stub-works
  * Update indigo_app/templates/indigo_api/work_amendments.html
  * Merge pull request #421 from laws-africa/stub-works-tweak
  * Merge branch '388_key_details_on_hover' of github.com:laws-africa/indigo into 388_key_details_on_hover
  * Merge branch 'origin' into local
  * Removed console.log
  * Added popover to required pages
  * warn if any docs exist on work (including initial publication)
  * Add warning for stub works on overview page
  * Merge pull request #420 from laws-africa/expression-date-fix
  * change `pit` to `event` as per earlier changes
  * Added box shadow to popover
  * dates as Y-m-d
  * Really fix stub filtering this time
  * Fixed mistake in comment
  * Added comments to JS
  * Added caching to popover
  * Fix newline
  * Allow stubs when filtering by docs
  * Works without amendments and docs are stubs
  * Support stubs and non-stubs together
  * FIX for filtering stubs without docs
  * barebones creation of a "Test task" at batch work creation
  * Fixed error when getting url
  * Fixes as per review comments
  * Fixed popup call
  * Minor tweaks
  * Amended popover to use data-popup-url
  * Make jslint happy
  * Remove document stub
  * Fix template name to use new _form template
  * Filter by stub
  * Warn about stubs with points in time
  * Show stub badge
  * Change work stub
  * Rename work_detail to work_form
  * Add stub field to works
  * popup view, url, html
  * Update changelog.rst
  * Update changelog.rst
  * Merge pull request #417 from laws-africa/unassign-when-closing
  * Merge branch 'master' into unassign-when-closing
  * FIX tests
  * unassign task when closing it
  * SESSION_COOKIE_SECURE
  * Merge pull request #416 from laws-africa/unsubmit-reassign-fix
  * unsubmitted, not reopened
  * only reassign if previously assigned
  * Merge pull request #407 from laws-africa/gazette-linker
  * Merge pull request #415 from laws-africa/408_assign_tasks_workflow_detail_view
  * Fix redirect
  * Support redirect url
  * Check for perms
  * Move labels, small buttons
  * DOCS
  * Changed wording on reassign button
  * Updated duplicate ID
  * Added button to change or remove assigned user
  * Docs, log at INFO by default
  * Updates as per review comments
  * Docs
  * Added `assign to` button to workflow details view
  * Merged master into current Added button to assign task by user
  * Docs
  * Anon users can render the coverpage
  * Merge pull request #413 from laws-africa/406_show_assigned_user
  * Removed sentence if task has not been assigned
  * Merge pull request #412 from laws-africa/409_pagination_bug_fix
  * Added assigned_to to list and column views for tasks
  * Fixed pagination error
  * Hide popover if user does not hover on popover box
  * Stylistic fix
  * Persistent popover state when viewing popover
  * Updated layout of popover
  * Adjustments
  * WIP for linking to gazette docs
  * Merge pull request #399 from laws-africa/assign-tasks
  * allow Unassign if only potential assignee is assigned to
  * limit 'assigned' tasks to open tasks
  * reinclude cancelled tasks in workflow metrics etc
  * only subtract from 'open' tasks if there are
  * raise PermissionDenied if user doesn't have country permission for task
  * include assigned count in workflow list view
  * Initial idea for popover
  * exclude cancelled tasks from completeness calculations
  * include task count in column head
  * Merge pull request #404 from laws-africa/move-cancel
  * outdent
  * Merge branch 'assign-tasks' of github.com:laws-africa/indigo into assign-tasks
  * Correct icon to display for task list view
  * move cancellation of task out of detail view and into edit
  * resubmit a task upon reopening it
  * make assignee id an element of the form being submitted rather than in url
  * fix task filter
  * Merge branch 'assign-tasks' of github.com:laws-africa/indigo into assign-tasks
  * Added icon to assign column
  * Removed `Assign to` heading and added that to dropdown
  * Merge pull request #403 from laws-africa/389_pagination
  * unassign task when submitting for review
  * Changed username to fullname
  * Added dropdown for assignees
  * record and display activity stream actions for un/assigning / picking up a task
  * fix display of 'Assigned' column in workflow detail view
  * include 'Assigned' in task list view
  * tweaks
  * Reworked pagination, added max 5 pages on paginator bar
  * fix exclusion of current assignee
  * group tasks by open+assigned as well as by state
  * remove self.assigned_to from potential_assignees
  * move task assignment into task detail view
  * Merge pull request #402 from laws-africa/379_icon_alignment
  * Aligned icons for task list and workflow list to top of div
  * Merge pull request #395 from laws-africa/timeline
  * Merge branch 'master' into timeline
  * Document poppler
  * Merge pull request #401 from laws-africa/380_icons
  * Updated font awesome icons to version 5 with new prefixes
  * give Unassigned option in form
  * simplify timeline
  * Badges
  * Docs for adding a country
  * Updated font awesome icons
  * add ability to assign a task to a user who has the right country badge
  * use 'Create' at initial publication rather than 'Create amended version'
  * don't give option to create / import if event is only a commencement / assent / repeal
  * add dates, works to timeline and make changes to template
  * Merge pull request #394 from laws-africa/pub-doc-filename
  * Just use the form
  * Publication document name tracks work frbr uri
  * Revert "Customise publication doc download filename. Fixes #385"
  * add other dates to context for timeline
  * fix repeal
  * Merge pull request #392 from laws-africa/work-edit-redirect
  * Merge pull request #393 from laws-africa/submitted-for-review
  * Customise publication doc download filename. Fixes #385
  * use 'submitted <Task> for review' rather than 'submitted <Task>'
  * add flash message
  * update test
  * Merge pull request #391 from laws-africa/fix-amendment-country
  * redirect to work_overview after successfully editing work
  * Inject work json for work amendment view. Fixes #381
  * Highlight link targets briefly
  * FIX publication list
  * Merge pull request #377 from AliciadW/alicia/favicon
  * Added Favicon
  * Merge pull request #376 from laws-africa/xsl-tweaks
  * Improvements to XSL.
  * Escaping
  * Basic XSLT checks
  * Merge pull request #372 from laws-africa/fix-delete-user
  * use current user as deletor of document
  * Merge pull request #371 from laws-africa/fix-import
  * use `num`, not `number`, when getting regex group
  * Merge pull request #369 from laws-africa/no-slack
  * Remove deprecated slack integration.
  * Move by-law coverpage
  * Merge pull request #362 from laws-africa/no-change-doc-work
  * Merge branch 'master' into no-change-doc-work
  * Merge pull request #361 from laws-africa/ace-padding
  * Merge pull request #363 from laws-africa/render-header
  * Merge pull request #359 from laws-africa/bulk-create-fix
  * FIX rendering many into PDF
  * FIX ace editor padding
  * User can't change a document's linked work
  * Move AKN templates into a better namespace
  * Render and cache coverpage
  * Merge branch 'master' into render-header
  * use row.get('') rather than row['']
  * Merge pull request #358 from laws-africa/workflows
  * improve signal sending
  * send task removed from / added to workflow signal from task form
  * Merge pull request #357 from laws-africa/fix-place-codes
  * Must use place.place_code
  * Merge pull request #346 from laws-africa/workflows
  * use prev rather than next for `coalesce`
  * use prev rather than next for `coalesce`
  * use prev rather than next for `coalesce`
  * use prev rather than next for `coalesce`
  * use `_action` in task detail view
  * also coalesce task addition actions for user activity view
  * coalesce workflow tweak
  * also coalesce task addition actions for place activity view
  * no progress for empty workflows in list view
  * join >1 task together for workflow detail view
  * get actions for workflow as object and/or target for stream (`any_stream`)
  * stay in detail view after closing workflow
  * use `_activity_list` in workflow detail view
  * tell user to reopen workflow to add tasks
  * move `action.send` out of model and into controller for Workflow
  * move `action.send` out of model and into controller for Workflow
  * remove `closed_by_user`
  * Workflow due date
  * Additional tests for workflow views
  * Can't add tasks to a closed workflow
  * Merge pull request #356 from laws-africa/workflow-activities-tweak
  * Merge pull request #355 from laws-africa/workflow-activities
  * make 'n of m tasks' fit
  * Grey closed workflows
  * also ignore_actor on main user profile page
  * delete a workflow
  * reopen closed workflow
  * use buttons for filter/toggle
  * Show workflows in activities. Hide actors and places.
  * No progress for empty workflows
  * fixes
  * Merge branch 'workflows' into open-closed-workflows
  * Merge pull request #353 from laws-africa/workflows-completeness
  * first attempt at filtering workflows to open / closed
  * Limit possible tasks
  * Task and workflow buttons
  * Workflow header change
  * Merge branch 'workflows' into workflows-completeness
  * Charts for workflows
  * get workflow count to display correctly in place view
  * workflows-ui 2
  * Merge pull request #352 from laws-africa/workflows-ui2
  * close a workflow, permissions
  * Workflow chooser for task form
  * Workflows in task view
  * Adjustments to workflow view
  * Spiffy task selection
  * Merge pull request #351 from laws-africa/workflows-ui
  * Merge branch 'workflows-ui' into workflows
  * Optimise task loading
  * get tests passing
  * Remove tasks from workflows
  * Don't manage workflow tasks via form
  * Add tasks to workflows
  * Merge branch 'master' into workflows
  * create a workflow from task edit view
  * tweak
  * send place_code with action signals
  * Merge pull request #350 from laws-africa/extra-tests
  * add task to workflow(s) from task create / update view
  * FIX test
  * Some additional tests
  * FIX for count of tasks for a place
  * FIX image url for published docs
  * Task title, linkify task descriptions
  * Annotation permissions
  * tweaks
  * tweaks
  * workflow list
  * list the workflow/s a task is in in the task detail view
  * move workflows into their own tab
  * task_detail tweak
  * migrations
  * Stab at coverpage rendering
  * Merge branch 'master' into workflows
  * Merge pull request #344 from laws-africa/annotation-tasks
  * FIX tests for realsies
  * Merge pull request #345 from laws-africa/task-cards
  * FIX tests, task formatting
  * Better task titles and descriptions
  * use place.tasks, open/pr tasks only
  * Merge pull request #347 from codacy-badger/codacy-badge
  * Add Codacy badge
  * OpenUp -> Laws.Africa
  * OpenUp -> Laws.Africa
  * OpenUp -> Laws.Africa
  * Better sidebar headings when minimized
  * Document hack
  * FIX task display bug
  * templates, views and forms
  * Move task work and document just below title
  * don't need to support "assigned" for now
  * Hack to allow preamble and preface
  * Tweak serializer
  * Jump to specific annotation
  * workflows -- action signals, model changes, views and forms
  * Don't make task link a button
  * Force annotations to render
  * Jump directly to section
  * Perms
  * Highlight relevant item
  * Merge pull request #342 from laws-africa/place-activities
  * Full sentences
  * Use _activity_list template
  * Merge remote-tracking branch 'origin/master' into place-activities
  * Merge pull request #340 from laws-africa/work-activity-list
  * Fix display issues with task buttons
  * Toc builder for individual items
  * Coalesce updated work actions and versions
  * Moved sheet-inner padding styling so that it works everywhere
  * Resolve anchors for tasks with anchors
  * move action signals into controller for Task
  * use 'activity', not 'activities'
  * Merge branch 'master' into place-activities
  * filter activities to place
  * settings, send actions
  * Basics of creating a task from an annotation
  * Merge pull request #341 from laws-africa/non-fixed-header
  * add `django-jsonfield-compat` too
  * give django-jsonfield version
  * get tests passing
  * use `place`
  * get view to pull in the activities for the current place
  * Don't use a fixed-top header
  * Variable
  * Merge work changes with activities.
  *  tab
  * `Activities` tab
  * Task column border
  * Update nokogiri and slaw
  * record `place_code` as part of action
  * Show no tasks message
  * Show tasks in columns or as a list
  * FIX point in time creation
  * Add missing tests
  * Merge pull request #338 from laws-africa/fix-work-pub
  * Ensure pub doc is saved after new work.
  * Go to /places/ after logging in, by default.
  * Merge pull request #335 from laws-africa/fix-activity
  * Fix document activity badges. Fixes #334
  * Site title uses INDIGO_ORGANISATION
  * Permanently redirect old /library to /places
  * Merge pull request #318 from laws-africa/contentapi
  * Flag to support unversioned (latest-only) content API
  * Merge pull request #332 from laws-africa/activity-stream
  * task description not required
  * activity stream on deleted documents:
  * `updated_by_user` before document.save()
  * Merge branch 'master' into contentapi
  * Merge pull request #316 from laws-africa/one-initial
  * Merge branch 'master' into contentapi
  * Simplify template
  * Merge pull request #330 from laws-africa/anon-users
  * Merge branch 'master' into one-initial
  * Fix for amendments at the same date
  * FIX tests
  * Redirect to absolute url
  * Merge branch 'master' into anon-users
  * Fix migration ordering
  * Merge branch 'master' into one-initial
  * Merge branch 'master' into anon-users
  * Merge pull request #322 from laws-africa/activity-streams
  * Merge pull request #331 from laws-africa/place-list
  * get tests passing
  * Merge branch 'master' into contentapi
  * Move social login down, meet Google brand guidelines
  * use place's place_code
  * Remove 1-by-1 counting of work amendments
  * Count open tasks
  * Missing migrations
  * Remove unnecessary country dropdown
  * Change /places/ view, redirect from /. Fixes #323
  * Merge pull request #328 from laws-africa/activity-stream-layout
  * Merge pull request #327 from laws-africa/for-subs
  * Better support for long names, narrow viewports
  * Hide edit button
  * Media attachment view
  * Anon API usage
  * Merge pull request #326 from laws-africa/fix-login-box
  * document published / unpublished signal
  * Support anonymous views.
  * Common user layout
  * User activity page
  * Task activity timeline view
  * Merge branch 'master' into activity-stream-layout
  * Bug fixes for tasks and activities
  * Make place-based API views behave similarly to place-base page views
  * Don't auto-collapse email login. Fixes #320
  * add History to user_profile view
  * only save Amendment once using `form_valid()` when it gets updated
  * add 'deleted' verb for documents (which are only marked as 'deleted')
  * only re-save the documents that share an expression date with a newly created Amendment
  * include `created_by_user` when using `create_expression_at`
  * add `place` property to Work, Task models
  * Colour links in footer, logo height not width
  * fix comment formatting
  * save `updated_by_user` when task is edited
  * remove manual inclusion of creation of task in task history view
  * register additional models and send action signals post save
  * Merge branch 'master' into contentapi
  * Adjust email From address
  * Anchor recaptcha version
  * OpenUp -> laws-africa
  * Update base.html
  * Modern google analytics code
  * Merge branch 'master' into contentapi
  * Filter docs on work country
  * move action from view into task state transitions
  * don't call underscore methods – use getattr() rather than .__getattribute__
  * migration for changes to Task model
  * reverse task stream and move full history into Task history card
  * get rid of `last_updated_at` / `_by_user` / etc
  * use task's activity stream in template instead of `last_submitted_at` /`_by_user` / etc
  * move activity stream into `indigo_api`, simplify task state change code
  * start using django-activity-stream
  * Merge pull request #319 from laws-africa/fix-s3-acls
  * Default AWS S3 ACL to None
  * Attempt at fixing tests
  * Fix URLs in TOC
  * Remove moved countries api test
  * docs
  * Explicitly versioned API urls
  * Email subject prefix
  * FIX tests for atom and slack
  * Token authentication for countries api
  * Remove published url into content api
  * Whitespace
  * Move atom renderers, countries
  * Separate out published content API
  * Merge pull request #315 from laws-africa/validate-work-number
  * Merge pull request #317 from laws-africa/ligatures
  * Merge pull request #312 from laws-africa/tasks-list
  * card for active tasks table in work overview
  * get rid of template tag and include active tasks in work overview view logic
  * include frbr_uri in place-based tasks view form
  * Merge pull request #314 from laws-africa/task-filters
  * Unicode
  * Expand ligatures on import. Fixes #266
  * Only show a date once for points-in-time. Fixes #263
  * Revert "Only show a date once for points-in-time. Fixes #263"
  * Only show a date once for points-in-time. Fixes #263
  * Restrict charset for work numbers. Fixes #234.
  * FIX form defaults
  * Remove tasks.length
  * Use new filters
  * Merge remote-tracking branch 'origin/tasks-list' into task-filters
  * Filter on state
  * label description
  * Add missing test
  * Filters for task view
  * reinsert change from master
  * Merge branch 'tasks-list' of github.com:laws-africa/indigo into tasks-list
  * task list
  * Merge branch 'master' into tasks-list
  * display active tasks in work overview
  * simplify error message when no tasks found
  * Merge pull request #311 from laws-africa/task-labels
  * use .get() to get None if n/a; filter by locality plus work (not work only)
  * fix url tag in work_overview
  * Tests for task creation
  * task list per work done more correctly
  * Task labels
  * Merge pull request #308 from laws-africa/library-changes
  * Merge pull request #310 from laws-africa/simpler-task-calcs
  * Simpler task stat calculations
  * Tweaks to library layout for tasks
  * FIX bug in place chooser
  * remove unnecessary place_code code
  * view for tasks on a work
  * Merge branch 'library-changes' of github.com:laws-africa/indigo into library-changes
  * change ratio for task progress in library view to only care about active tasks
  * Merge branch 'master' into library-changes
  * task progress on work and document
  * Unicode literals
  * Column widths
  * Merge pull request #306 from laws-africa/tasks
  * Merge pull request #307 from laws-africa/library-changes
  * Variable names
  * FIX tooltip popup
  * Nested progress bars
  * indentation
  * don't give info (x published, y drafts, z expected) if all published
  * points in time progress bar
  * link users' names in library view (most recent editors) to their profile pages
  * match updated_by_user on doc to updated_by_user on work
  * Merge branch 'tasks' of github.com:laws-africa/indigo into tasks
  * replace `if` block with one that uses `change.at` when either reopened or unsubmitted
  * display available state transitions based on current user's permissions
  * User profile is tolerant if None user
  * Merge pull request #305 from laws-africa/library
  * Name
  * Fix columns in library view, swap col orders
  * add fields to task model to keep track of most recent state changes
  * add `change_task` permission to Drafter badge
  * display count of tasks in either `open` or `pending_review` state in library
  * Merge pull request #301 from laws-africa/issues
  * permissions for task views
  * Merge branch 'master' into issues
  * Merge pull request #303 from laws-africa/place-based-country
  * Revert "short-term solution for getting checking country perms to work"
  * FIX active tab
  * Merge branch 'master' into place-based-country
  * Re-work place-based views
  * Merge pull request #302 from laws-africa/document-comments
  * short-term solution for getting checking country perms to work
  * change permissions for task views
  * Filter annotations
  * Show count of annotations in work listing view
  * migration for renaming fields on task
  * `created_by_user` and `updated_by_user` (`_user` was missing x2)
  * Merge pull request #285 from laws-africa/issues
  * get rid of `resubmit`, group badge perms
  * new migration for Task and Workflow
  * Pagination tweaks
  * Create task button in work overview
  * FIX success url
  * Show recently updated by in work overview
  * Task create button in work views
  * Link to users
  * Add django-fsm as dependency
  * Merge pull request #296 from laws-africa/issues-works
  * Merge branch 'issues' into issues-works
  * Merge branch 'issues' of github.com:laws-africa/indigo into issues
  * task state transitions using django-fsm
  * migration for task states
  * Merge branch 'issues' into issues-works
  * Merge pull request #298 from laws-africa/issue-icons
  * Task icons
  * Missing form value
  * Remove unused imports
  * Choose point in time for task
  * Tests for task model
  * Ensure task work and document match task place
  * Work chooser for tasks
  * Simplify injection of json countries
  * Merge remote-tracking branch 'origin/master' into issues
  * Merge pull request #295 from laws-africa/username-links
  * Make usernames links to profile
  * Fix form button actions
  * Task layouts
  * Tweaks to view. WIP.
  * success messages when updating task state
  * change task state
  * Prefetch publication document
  * fix migrations
  * Merge branch 'master' into issues
  * Merge pull request #294 from laws-africa/rename-task-content
  * Add missing test file
  * Merge pull request #293 from laws-africa/resolver-404
  * Merge branch 'issues' into rename-task-content
  * Custom 404 page for resolvers
  * task detail and edit views added
  * Tabbed layout for places
  * Task listing view
  * Adjust form
  * field name change on model: content → description
  * field name change on model: content → description
  * Rename Task.content to Task.description
  * Merge pull request #235 from laws-africa/library
  * create task url and view
  * create task template (choice fields need work)
  * Update app.scss
  * Remove inline JS
  * Points in time
  * Toggle caret
  * FIX sorting
  * Borders
  * Sorting
  * Updates to layouts and styles
  * FIX merge
  * Merge branch 'master' into library
  * rename and refine PlaceTasksView --> TaskListView
  * use `page_obj` instead of `page` in template
  * Tweak link to publication document
  * FIX tests
  * Tweak for new works
  * More consistent work form page
  * Merge pull request #286 from laws-africa/attach-gazette
  * new migration
  * move view
  * change url
  * move models
  * remove migration, move template and view
  * PlaceTasksView
  * add url
  * fix typo in detail
  * list of tasks in place view
  * Task and Workflow models, migration
  * Task and Workflow models
  * Final touches
  * delete PublicationDocument if 'Delete' both chosen from dropdown and marked in checkbox
  * Merge branch 'attach-gazette' of github.com:laws-africa/indigo into attach-gazette
  * fix PublicationDocument creation / updating
  * Use val, not checked
  * Indicate to server to delete pub document
  * Merge pull request #245 from laws-africa/act-refs
  * Used named matches, not numbers
  * Merge branch 'attach-gazette' of github.com:laws-africa/indigo into attach-gazette
  * update PublicationDocument if one already exists for the given work
  * Multiline regex to make it easier to read
  * Make act refs finder easier to override
  * no referrer
  * Fix serializer
  * Merge branch 'master' into act-refs
  * Merge branch 'attach-gazette' of github.com:laws-africa/indigo into attach-gazette
  * Rename WorkDetailView to EditWorkView
  * save publication document when uploaded
  * Work serializer is read-only
  * Lots of test fixes for new work form and validation
  * Add missing migrations
  * Merge pull request #289 from laws-africa/attachment-tweaks
  * Adjustments for viewing work attachment
  * Publication document serializer for published documents
  * Publication document serializer
  * Delete work through forms
  * Work view set is readonly
  * Upload publication document attachment
  * Skeleton of attachment code
  * Layout, breadcrumbs
  * Edit work with form
  * Renaming, UI
  * add url, link in template, but NoReverseMatch
  * take in feedback on first pass
  * Merge pull request #246 from laws-africa/importer
  * remove entire lines of --- or ___ but not if there's text on a line with it
  * add PublicationAttachment model
  * stub of issue/workflow models
  * FIX for breadcrumb and locality
  * Forms SCSS, labels are bold
  * Newline for commencing work
  * Fix preview bug, correctly scope .akoma-ntoso queries
  * Merge pull request #261 from OpenUpSA/preview
  * Spinner when empty utility
  * Preview covers content area completely.
  * FIX typo on permission name
  * Add tests
  * Merge pull request #255 from OpenUpSA/amendment-badges
  * New test case for terms finder
  * Merge pull request #254 from OpenUpSA/smart-quote-terms
  * Drafter badge grants amendment permissions
  * Improvements to term matching
  * Match unicode quotes
  * Merge pull request #253 from OpenUpSA/preview-img
  * Ensure previews of documents show images
  * Merge pull request #247 from OpenUpSA/proofread
  * Merge pull request #249 from OpenUpSA/new-work-place
  * Place-ify view for creating a new work. Fixes #248
  * revert bump of 5 to 10 (already dealt with by using \s instead of .)
  * apply sentence case
  * apply sentence case
  * don't get rid of fill-in-the-blanks (increased from 5 to 10)
  * catch refs to Acts with year included before number
  * Merge pull request #244 from OpenUpSA/batch-errors
  * catch all ValidationErrors when creating a work
  * get_table() error displayed on page rather than throwing 500
  * Merge pull request #243 from OpenUpSA/footer
  * Footer text colour from body
  * Site footer
  * error for wrong date format inside table
  * Merge pull request #238 from OpenUpSA/place-view
  * Merge pull request #242 from OpenUpSA/place-based-errors
  * don't try to match country name
  * don't try to match locality names, remove unnecessary empty string ref
  * ignore blank rows, removed unnecessary references to empty strs
  * locality: blank=True, and errors raised for various scenarios:
  * Merge branch 'master' into place-view
  * Merge pull request #231 from OpenUpSA/work-locality
  * Push container up into main.html
  * Use place code
  * Tests, tweaks to place detail page
  * Works use place layout
  * Change Library view to be place-based
  * Can change places
  * Basics of place-based view for batch import
  * Merge branch 'master' into place-view
  * FIX ref to old bootstrap
  * Merge pull request #236 from OpenUpSA/fa-pencil
  * update icon reference
  * patternfly list view with simple expansion for library view
  * Batch import uses view-based country
  * New work button in library view
  * New work view based on country/locality
  * Get locality code from locality, not uri
  * FIX for toggling diff collapse
  * Ensure tests pass
  * Merge pull request #225 from OpenUpSA/parser
  * Migrations
  * Faster locality lookup
  * Merge branch 'master' into work-locality
  * rename refs finders in tests too
  * Merge branch 'master' into parser
  * FIX locality and country lookups for works
  * Missing migration
  * Locality as a first-class field on Work objects. Fixes #202
  * ensure global RefsFinder plugin imports
  * Merge pull request #229 from OpenUpSA/subs-support
  * Token view
  * FRBR URI parsing
  * Determine country and locality for public views
  * Merge pull request #228 from OpenUpSA/view_source_perms
  * Perm required to view document source
  * FIX debug for xml-support checker
  * Add missing migration for renaming Country.locality_set to .localities
  * Merge pull request #227 from OpenUpSA/xml-required
  * Warn for unsupported browsers. Fixes #218.
  * Merge pull request #226 from OpenUpSA/upgrade-bs4
  * Fix imports for analysis plugins
  * Bootstrap 4.1.3
  * don't match Constitution on non-za locales
  * Merge pull request #214 from OpenUpSA/username
  * error messages round 2
  * error messages
  * remove current user from check for uniqueness
  * check that username is unique
  * check that new username doesn't contain anything we don't want
  * Merge pull request #217 from OpenUpSA/security-fix
  * Django >= 1.11.15 for security CVE-2018-14574
  * Docs and checks
  * Merge pull request #212 from OpenUpSA/31Oct
  * Merge pull request #216 from OpenUpSA/contrib-page
  * Merge pull request #213 from OpenUpSA/redirect
  * When a user signs up, grant the contributor badge immediately.
  * order Contributors by last_login
  * reinstate homepage and redirect to `/accounts/profile` from signup only (not login)
  * only clean username if changed
  * remove homepage and give a logout redirect url
  * Merge branch 'master' of github.com:OpenUpSA/indigo
  * FIX checking country perms
  * remove number generator for batch import of works
  * Merge branch 'master' of github.com:OpenUpSA/indigo
  * Merge pull request #208 from OpenUpSA/indigo_social
  * Change award_badges to grant perms for existing badges
  * Merge branch 'master' into indigo_social
  * Merge pull request #207 from OpenUpSA/country-perms
  * FIX tests and fixtures
  * Merge remote-tracking branch 'origin/indigo_social' into bylaws-indigo
  * Merge branch 'bylaws-indigo'
  * Work around application startup/testing issue for badges
  * add permissions to badges
  * Saner import order
  * Fix references to user
  * Merge branch 'master' into country-perms
  * Merge pull request #206 from OpenUpSA/indigo_social
  * Merge branch 'master' into indigo_social
  * Country badges
  * API permissions for countries
  * All work views check country perms
  * Model for countries a user can work with
  * User can choose country via indigo_app
  * Users require countries when signing up
  * Merge pull request #205 from OpenUpSA/country-api
  * Requests dependency
  * Revert "allow Contributors to see `BulkListImportWorksProcess`es"
  * allow Contributors to see `BulkListImportWorksProcess`es
  * dash not hyphen
  * Revert "dash not hyphen"
  * always display current user's name in navbar
  * improve profile headings
  * dash not hyphen
  * Link to search
  * Don't allow per-country view for now
  * Docs
  * Merge pull request #203 from OpenUpSA/move-locality-model
  * Countries API
  * Move locality model from indigo_app to indigo_api
  * Merge pull request #201 from OpenUpSA/pubdate
  * Wrap in a form to take advantage of validation
  * add publication_date as condition for enabling Create button
  * replace 'undefined' in title with 'New Work' if no title yet
  * FIX resolver authority bug
  * Merge pull request #200 from OpenUpSA/saflii-resolver
  * Try to make codacy happy
  * FIX resolver and renderer tests
  * Tweak
  * Slug must be unique
  * Slug that allows dots
  * Pass resolver_url to amendments template
  * Resolver when rendering
  * Support comma-separated list of authorities
  * Hacks for saflii resolver
  * Merge branch 'master' into pubdate
  * Merge pull request #198 from OpenUpSA/uname
  * FIX tests for signup page
  * Authority.slug
  * FIX indigo resolver app config
  * Resolver can specify authority
  * Resolver as TemplateView
  * allow usernames to be email addresses (for the time being)
  * better duplicate message in template; remove repealed_date in BatchAddWorkView
  * raise error if no publication date given in BatchAddWorkView
  * use User, not UserProfile model in AwardBadgeView
  * use User, not UserProfile model in UserProfileView
  * shorten clean of username
  * change display name to be full name throughout
  * set ACCOUNT_PRESERVE_USERNAME_CASING to False
  * make sure no spaces etc in edited username
  * very slightly improve username generator
  * remove lastname initial because of decision not to use it anymore
  * fix typo
  * use username instead of pk for userprofiles
  * add username to fields user can edit on Edit Profile page
  * add a modified account adapter that overrides populate_username
  * Merge pull request #197 from OpenUpSA/fix-resolver
  * Resolver handles no language
  * add first_name, last_name and country to signup form
  * Merge pull request #194 from OpenUpSA/primary-language
  * When listing works, filter primary language
  * Merge pull request #191 from OpenUpSA/orphan-docs
  * Remove unnecessary if
  * Tests, tightening up the code
  * Use user_display on contributor page
  * Merge pull request #187 from OpenUpSA/indigo_social
  * FIX country in profile view
  * Show email in edit profile
  * Add social links to user profile
  * Profile adjustments: country, areas of law
  * Adjust profile form widget for country
  * Merge pull request #192 from OpenUpSA/badges
  * Whitespace
  * Depedency
  * Merge branch 'indigo_social' into badges
  * Pillow as dependency
  * Synch perms
  * Change badges when permissions change
  * Merge branch 'indigo_social' into badges
  * Use slaw 1.0.3. Fixes #135 and fixes #95
  * Show perms for badges to admins
  * Messages when awarding badges
  * improve country dropdown for updating user's editor in UserProfileEditView
  * Form to award badges
  * add country dropdown to update user's editor in UserProfileEditView
  * create a user profile for each new user object
  * Merge pull request #190 from OpenUpSA/display-name
  * Badge detail and listing views
  * Spiffier badges
  * User display for work changes
  * Delegate user display name to django all-auth
  * update all docs at the initial point in time for a work to move to the new point in time when the initial publication date for the work is changed
  * update all docs at a point in time for a work to move to the new point in time when the amendment date (point in time) for the work is changed
  * Basics of permissions-based badges
  * Hide empty breadcrumbs
  * Hide profile photo for now
  * Simpler profile pages
  * Merge branch 'indigo_social' of github.com:OpenUpSA/indigo into indigo_social
  * allow for no last_name when getting initial
  * make profile photo not required
  * fix clean() method to take twitter_username=None into account
  * Simpler profile card
  * include a clean_twitter_username() method on UserProfileForm
  * Merge pull request #189 from OpenUpSA/tweaks
  * Profile tweak
  * User profiles
  * Form layout
  * add migration for autocreation of userprofiles
  * Merge branch 'indigo_social' of github.com:OpenUpSA/indigo into indigo_social
  * undo and redo migrations
  * Merge branch 'master' into indigo_social
  * Merge branch 'master' into indigo_social
  * add migration for making certain UserProfile class attributes TextFields instead of CharFields
  * include `linebreaks` filter in templates
  * finish up Contributors page for the time being, fix other links to /contributors/
  * Merge pull request #186 from OpenUpSA/slack
  * FIX slack import
  * Make indigo-slack more consumable. Spin this out into a plugin later.
  * start of Contributors page
  * fix link to 'contributors' from /accounts/ pages
  * get rid of superfluous `block` lines in user_profile template
  * user profile for viewing pleasure (long version)
  * change work etc fields back to Charfield
  * add templates for viewing a profile, editing a profile and viewing all profiles
  * fix urls
  * move standard url higher in list
  * missed this
  * improve template layout for editing user profile and work on urls
  * get form working at accounts/profile
  * Merge branch 'master' into indigo_social
  * Simpler library view
  * FIX showing drafts as published
  * Messages as toasts. Fixes #172
  * Merge pull request #183 from OpenUpSA/cleaner-doc-page
  * Don't dup countries
  * Prefetch revision user
  * Optimise preloads and expression dates
  * improve urls, views
  * allow the user to update their bio
  * Merge branch 'master' into indigo_social
  * get urls and the start of a form working
  * get urls and the start of a form working
  * Prefetch user information for works
  * Merge pull request #182 from OpenUpSA/work-chooser
  * Normalise pagination, fix tests
  * Don't load works unnecessarily. Fixes #164
  * Paginated work chooser. Fixes #110
  * Default pagination class, support setting page size in request
  * Merge pull request #180 from OpenUpSA/pubname
  * Merge pull request #181 from OpenUpSA/dashes
  * Merge pull request #179 from OpenUpSA/batch
  * Merge branch 'master' into batch
  * FIX batch import for countries
  * add migration to run to reflect database changes based on model changes (see 1192063 and 6b13d17)
  * ensure pubnames are unique within each country (see #177)
  * make Publication.name unique=False (see #177)
  * fix spacing
  * embed youtube link at bottom (whether works are present or not)
  * tighten up instructions wording
  * only show instructions until works have been sucessfully imported
  * remove 'below' (text has moved)
  * move instructions to bottom, remove duplication of one instruction
  * add link to word template spreadsheet, include instructions on how to make it public, on new batch page (issue #176)
  * Merge branch 'master' into batch
  * early indigo social changes
  * Merge pull request #175 from OpenUpSA/search
  * Permit frbr_uri filtering in search
  * Merge branch 'master' into indigo_social
  * change hyphens to dashes where appropriate
  * Sort docs by expression date
  * FIX migration with missing expression dates
  * Merge pull request #171 from OpenUpSA/images-docx
  * update test to pass for two attachments (added an image to the test docx)
  * insert image into test docx
  * last fixes
  * FIX for cropbox, and imports
  * Merge branch 'master' into images-docx
  * Allow importer to create documents
  * Merge pull request #170 from OpenUpSA/simpler-import
  * Merge branch 'images-docx' into simpler-import
  * FIX tests, bugs
  * add userprofile model (still needs recent activity, faves, badges)
  * Empty indigo social
  * Remove uploads from file serializer
  * Import via forms. Ref #167
  * address issues regarding non-saving of docs
  * FIX for embedded images
  * FIX y-m-d
  * Merge pull request #168 from OpenUpSA/images-docx-saving
  * Hack to support attachments from importer
  * Don't accept files to /parse
  * give filename
  * stash images' binary data and save as attachments to doc
  * Blocks in templates
  * Also updated amended docs when deleting an amendment
  * Merge pull request #163 from OpenUpSA/constitution-ref
  * Tests for AFR and ENG constitution finder
  * Merge pull request #165 from OpenUpSA/expression-language
  * FIX tests
  * More efficient preloads
  * New point-in-time flow. Fixes #157
  * Create expression date with particular language.
  * fix the uri
  * incorporate feedback
  * incorporate feedback
  * Merge pull request #160 from OpenUpSA/amendment-api
  * FIX codacy issue
  * FIX codacy issue
  * Move app views into modules
  * Work amendments api is readonly. Modifications via Django only
  * Remove unused view logic around amendments
  * recognise Constitution as an external reference (resolves #114)
  * Merge branch 'master' into amendment-api
  * Prefetch work.country
  * FIX atom dates
  * Revert "Prefetch work.country and document.language"
  * Prefetch work.country and document.language
  * Blocks
  * FIX tests
  * Merge pull request #159 from OpenUpSA/search-perms
  * Merge pull request #158 from OpenUpSA/lang-import
  * Move new amendment logic into Django
  * Drive most amendment stuff through Django forms
  * Separate search endpoints. Closes #146 #150
  * Flake8
  * Choose language during import. Fixes #155
  * Merge branch 'fix-lang-import'
  * Merge pull request #149 from OpenUpSA/library
  * make jshint happy
  * Fix default country code in work views. Fixes #154
  * Fix country filter in works api
  * Revert "Docs, gitignore"
  * fix choosing 'act' in dropdown
  * HACK to workaround missing language in import view
  * Docs, gitignore
  * Flag to disable new accounts
  * change event handler for header click to address Points in Time sort
  * username = 'you' for docs in library
  * Merge pull request #153 from OpenUpSA/col-sizes
  * Make jslint happy
  * Toggle-able documents
  * Replace nature filter with subtype filter
  * Tweaks to col sizes
  * Merge branch 'master' into library
  * Merge pull request #152 from OpenUpSA/move-country-lang
  * Ensure reversion is a migration dependency
  * Remove DEFAULT_COUNTRY. Fixes #78
  * Document revisions work with version objects, not revisions
  * Upgrade language in document versions when migrating
  * address sorting in Library
  * Remove document.country, use work's instead
  * hardcode 'act' for doctype and remove references to it
  * remove repeal date from work generator
  * change references to 'date' to 'year' where appropriate
  * look up 'year' column instead of 'date' column when generating frbr uri
  * only import rows that have nothing in the 'Ignore' column
  * make column widths automatic
  * change reference to font awesome
  * finalise Update column and general cleanup
  * improve Updated column
  * Remove DEFAULT_LANGUAGE
  * Make language a required foreign key on documents
  * Eliminate some use of DEFAULT_LANGUAGE
  * flake8
  * Default language from country
  * Migrate Colophon.country to Country object
  * Move Country and Language into indigo_api
  * add Updated column to Library
  * Merge pull request #151 from OpenUpSA/allauth
  * Use country/language fixtures, not migrations
  * Remove old registration templates
  * Remove user profile view for now, not used
  * improve draft calculation
  * add Drafts / Total column to Library
  * take in GK feedback on previous commit
  * fix Languages, Points in Time columns in Library
  * Merge branch 'docs'
  * Updates to docs
  * Countries have a primary language
  * Fire work_changed signal when creating batch works
  * Data-confirm support
  * DOCS points in time
  * Docs (WIP)
  * DOCS
  * FIX test issue with templates
  * User must accept terms. Closes #144.
  * Imports
  * FIX document link to work layout
  * Move standalone.html under indigo_app
  * Move work templates under indigo_api
  * Make it easier to override navbar items
  * Merge branch 'master' into allauth
  * Add missing migration from 3439b6c9
  * change reference to 'first six columns' to list of column names (columns were moved in spreadsheet)
  * change reference to 'grey columns' to 'first six columns'
  * Merge branch 'master' into library
  * Ensure permissions on revert version
  * Merge branch 'master' into allauth
  * Redirect on frbr_uri change. Fixes #147.
  * Merge branch 'master' into allauth
  * Change pull-right to float-right, which was removed by fontawesome 5.0
  * Facebook button colour
  * Connect not login for social account
  * Default from email, social auth error codes
  * Email confirm
  * Merge branch 'master' into allauth
  * Merge pull request #143 from OpenUpSA/batch
  * fix failure icon
  * Redirect page after confirmation
  * Docs
  * fix typos in Work fields
  * Docs
  * Merge pull request #128 from OpenUpSA/batch-new-work
  * Perms warning
  * Merge branch 'master' into batch-new-work
  * last details on batch upload
  * clean up unnecessary gspread stuff
  * FIX copy-paste error
  * Remove django-rest-auth
  * Remove old user views
  * Tests
  * Social account selection
  * Docs
  * Django-allauth. Ref #121
  * Help menu block
  * Merge branch 'tweaks'
  * Nav for non-logged in users
  * DOCS fix links
  * Token-based auth only for the public api
  * Default empty perms for abstract authed indigo view
  * Fix django admin link
  * Auth token support on editor model
  * Updates to fontawesome icons
  * Fontawesome 5.2
  * Messages for standalone views
  * Bootstrap red for bad inputs
  * FIX unicode pdf rendering
  * Merge pull request #140 from OpenUpSA/l10n_master
  * New translations django.po (Afrikaans)
  * Support custom media url when rendering as html
  * very basic stub of library
  * Fix initial expressions
  * add ValidationError for unsuccessful import / unshared sheet
  * generate 'number' from title where work doesn't have a number
  * Docs
  * Merge pull request #136 from OpenUpSA/l10n_master
  * Merge branch 'master' into l10n_master
  * New translations django.po (Zulu)
  * New translations django.po (Xhosa)
  * New translations django.po (Venda)
  * New translations django.po (Tswana)
  * New translations django.po (Tsonga)
  * New translations django.po (Swati)
  * New translations django.po (Southern Sotho)
  * New translations django.po (Southern Ndebele)
  * New translations django.po (Northern Sotho)
  * New translations django.po (Afrikaans)
  * Translations
  * Remove link
  * Remove workflow; too complex
  * FIX media attachment serialisation
  * FIX unpublished expressions
  * FIX defined terms bugs
  * Remove BS dependency
  * Merge branch 'parse-bug'
  * Revert "Logging around slaw bug"
  * FIX ensure that slaw imports text as text
  * Logging around slaw bug
  * Merge pull request #134 from OpenUpSA/remove-pl
  * Merge branch 'master' into remove-pl
  * Merge pull request #133 from OpenUpSA/pippable
  * Remove indigo_pl into own library
  * Merge branch 'master' into pippable
  * Merge pull request #132 from janzankowski/master
  * Merge branch 'public-api-fields' into pippable
  * Merge branch 'master' into public-api-fields
  * Make staticfiles work for pip-installed apps
  * Limit DRF version
  * Use get_template instead
  * Add status code assertions for some tests
  * Use pkg_resources to look for PDF toc xsl stylesheet
  * Remove missing middleware setting
  * Anchor languages-plus, too
  * Try anchor countries-plus version
  * Remove old middleware
  * coveralls in setup.py
  * Tweak for travis
  * Anchor psycopg2
  * Anchor libsass
  * Merge branch 'master' into pippable
  * Polish importer: extract some constants.
  * Update the importer for Polish: (1) Use pdfttohtml instead of pdftotext and later strip XML tags. (2) Since pdftohtml doesn`t support cropbox, remove header and footer using positional info (top, left) in the XML. (3) Search for superscript division numbers (e.g. `Art. 123^4`) using positional info in XML and indicate that a number is a superscript with a special plaintext label before and after it. (4) Remove footnotes by removing all text in font smaller than most of the law. (5) Structure the code & extensively comment on what`s going on in there.
  * Merge remote-tracking branch 'upstream/master'
  * Merge branch 'master' of github.com:janzankowski/indigo
  * validate uri, improve status, front-end tweaks
  * Filter on language
  * Missing translations
  * Hide some diff fields
  * Merge branch 'master' into public-api-fields
  * FIX subtype lists in work edit view
  * Visual tweaks
  * Tweaks
  * Allow null values on work model, to make full_clean() happy.
  * Validate work model, enforce lowercase frbr_uri
  * Make nested functions object methods
  * Batch import uses requests, not gspread
  * refine batch upload of metadata
  * for posterity
  * Expression_date is required for documents
  * Re-use request's expression uri in response
  * FRBR URI without '@' is equivalent to ':today'
  * DocumentListSerializer not necessary
  * Formalise expression serializer
  * Non-py files
  * Remove django_extensions, new relic
  * Merge branch 'master' into pippable
  * Don't need django-nose
  * First pass at pip distribution
  * Perms on published api
  * Replace amended versions with points-in-time
  * Published document points-in-time
  * Merge branch 'pit-flow'
  * add google sheets
  * Merge pull request #130 from OpenUpSA/l10n_master
  * New translations django.po (Zulu)
  * New translations django.po (Xhosa)
  * New translations django.po (Venda)
  * New translations django.po (Tswana)
  * New translations django.po (Tsonga)
  * New translations django.po (Swati)
  * New translations django.po (Southern Sotho)
  * New translations django.po (Southern Ndebele)
  * New translations django.po (Northern Sotho)
  * New translations django.po (Afrikaans)
  * Simpler published url
  * FIX log message
  * FIX tests
  * Move document content_url into links
  * FIX tests
  * Simplify published repeal serialization
  * Latest cobalt
  * FRBR Expression URI in json
  * Change public and private api, attachments, urls. Ref #102
  * Merge branch 'pit-flow'
  * Merge pull request #129 from OpenUpSA/batch-form
  * Process form for batch works
  * Merge pull request #126 from OpenUpSA/woordomskrywing
  * add 'woordomskrywing/s' to section heads to look for
  * Fixes for unicode terms
  * Only start certain flows from the UI
  * Templates
  * Migrations
  * Full PIT workflow creation
  * Create views, then render.
  * Insert language and coutry models into context
  * Create point-in-time flow
  * Indigo loads multiple views
  * start of batch upload of metadata -- for review only, not yet final
  * Basic stab at 'point in time' workflow
  * Perms for amendments. Fixes #116
  * Merge pull request #119 from OpenUpSA/tasks-in-work-overview
  * Merge branch 'master' into tasks-in-work-overview
  * Indicate language in works, documents
  * Make work/doc sidebar extensible
  * Merge branch 'master' into tasks-in-work-overview
  * View tweak
  * Work workflows listing
  * Workflow tasks in work overview
  * Merge pull request #118 from OpenUpSA/readme
  * resolves #117
  * Stub of batch work import
  * FIX AF translations
  * Merge branch 'nicer-amendment-links'
  * FIX Translations for PL
  * Translations
  * Include link and subtitle in amendment links. Closes #94
  * ZA work detail
  * Use plugin to lookup friendly work numbered title
  * Fire work changed signal when reverting revision
  * FIX work_changed signal correct sender
  * jsonpatch libs and dependencies
  * Missing file
  * Page titles
  * Merge branch 'work-history'
  * Clearer revert messaging
  * Paginated work versions page
  * Can restore old version
  * Nicer diffs
  * Hacky attempt at version history for works
  * Basics of parent work title. Closes #104.
  * Fix for urls and perms
  * FIX tests
  * Merge branch 'work-info'
  * Country, locality, parent
  * Work overview page (WIP)
  * Repealed badge in document view. Closes #105.
  * Indicate repealed in work view. Ref #105
  * Repealed marker in library view. Ref #105
  * Hide save button to prevent accedintal loss of edits. Closes #112.
  * Move editor cheatsheet into edit bar.
  * Merge pull request #115 from OpenUpSA/workflow
  * FIX simpler dirty view detection. Fixes #84.
  * Up max page size to 500
  * FIX tests
  * Correct permissions, tests
  * Merge branch 'master' into workflow
  * Merge amendments into points in time
  * Hand cursor on work chooser box
  * Ensure padding at bottom of work view pages
  * Merge pull request #109 from OpenUpSA/find-replace-Ctrl-H
  * change Apple shortcut again
  * Merge pull request #108 from OpenUpSA/commencement-date-desc
  * change Apple shortcut
  * add Ctrl/-H as shortcut for Find and Replace under Edit menu
  * Merge branch 'commencement-date-desc'
  * Merge branch 'master' of github.com:OpenUpSA/indigo
  * django-viewflow in requirements.txt
  * Merge branch 'master' into workflow
  * Merge pull request #107 from OpenUpSA/parent-work-descriptor
  * make requested changes to PR #107
  * Fix for login vs 403
  * Merge branch 'review-work' into workflow
  * add detail to Commencement date
  * Merge branch 'parent-work-descriptor'
  * add descriptor for Parent work
  * Merge pull request #106 from OpenUpSA/short-title-autofocus
  * add 'autofocus' to work_title input field
  * Close divs correctly
  * FIX active sidbar link checking
  * Pull navbar into layout so it can be overridden
  * Link to active task for user in work views
  * Some explicit blocks in templates
  * Workflow for reviewing a work
  * Fire a signal when a work is created or changed
  * 403.html
  * Import document as part of a work view
  * Class-based views and permissions for works, documents, library
  * Migrations for perms
  * Better task permissions
  * Breadcrumbs and header in main.html
  * Confirm some task actions
  * Margin on nav items
  * Support for messages
  * Fix flow namespaces
  * Links to create new flows
  * JS to support flow creation
  * View for creating a 'create works' workflow
  * Link to tasks view
  * Second workflow
  * Create works workflow
  * Task tables
  * List of tasks
  * Titles
  * Process and review tweaks
  * Separate task detail and instruction views
  * Hacky attempts at workflow
  * Merge pull request #100 from nickyspag/master
  * Amended setup instructions to include bit about postgresql authentication by means of md5 password
  * Escape dismisses work chooser modal
  * Merge branch 'master' into workflow
  * Basic workflow
  * Talk to opengazettes api rather than s3
  * Coverage in readme
  * Merge pull request #99 from OpenUpSA/app-tests
  * Additional app tests
  * App tests
  * Merge pull request #98 from OpenUpSA/coverage
  * Really fix coverage cmd
  * Fix travis and coverage
  * Coverage and coveralls
  * Test for docx/html import
  * FIX importing from html
  * Publication date is an actual date
  * Fire document_published at a higher level
  * Publication date in coverpage notices. Closes #96
  * Slack error handling
  * Slack integration
  * Helpers to lookup country and locality for a work
  * New document_published signal
  * Support multiple publication matches, cache publication lookups
  * Basic publications finder
  * Better edit button placement
  * FIX draft toggling
  * Gemfile.lock
  * Slaw 1.0.2
  * Order amendments, titles
  * FIX library url
  * Schedules container in TOC
  * Bare library url
  * Description of assent date field. Fixes #92.
  * Default date for amendment. Fixes #93
  * Updated CHECKS
  * Merge pull request #90 from OpenUpSA/pol
  * Library is fully scoped to country
  * Work URLs use frbr uri
  * Nested TOC
  * Use model events to track TOC selection
  * Rename doc sidebar
  * Slaw 1.0.1
  * Fix for link to indigo-web css
  * Indigo web 1.0.1
  * Slaw 1.0.0
  * Updated cobalt to 1.0a1
  * Auto-minimize sidebar
  * FIX pl ace mode bug
  * Per-country ace editor syntax highlighting
  * Tradition determines what's quick editable
  * Remove unnecessary quotes
  * FIX for hovering over collapsed sidebar items
  * Merge branch 'master' into pol
  * Fix tooltip error for bs4
  * Sidebar collapse
  * Merge branch 'traditions' into pol
  * Pull rendering in from cobalt
  * Country-specific XSL and templates
  * indigo_analysis -> indigo.analysis
  * Localised templates
  * Indigo Poland
  * Rework plugins and registry system, move za into indigo_za
  * Merge branch 'toc' into pol
  * Localise ZA TOC builder
  * Logging, fix tests
  * Test cases for TOCs
  * Move get_subcomponent out of cobalt
  * Tradition-based TOC
  * Link to managing amendments
  * Merge pull request #86 from janzankowski/18_05_16_pl_importer_text_reformat
  * Polish text reformat: 1. de-hyphenate words, 2. remove linebreaks except for section boundaries.
  * Merge branch 'master' into pol
  * FIX bug when saving document
  * Unicode literals for importers
  * Comment out special sequences
  * Slaw alpha 6
  * Support for alinea rather than list for indents
  * Merge branch 'pol' of github.com:OpenUpSA/indigo into pol
  * Slaw alpha 5
  * Merge branch 'za-reformat' into pol
  * Final aspects of ZA importer
  * Merge branch 'pol' of github.com:OpenUpSA/indigo into pol
  * FIX bug with locale lookups
  * Unbreak lines
  * Latest slaw
  * ZA cleanup for importers
  * Improve subparagraph handling
  * Polish header for rendered acts
  * Merge branch 'pol' of github.com:OpenUpSA/indigo into pol
  * Locale-based importers (WIP)
  * Merge branch 'pol' of github.com:OpenUpSA/indigo into pol
  * Bold TOC elements based on children
  * Guess at quick-editables
  * Slaw, indents
  * Merge branch 'pol' of github.com:OpenUpSA/indigo into pol
  * Merge branch 'master' into pol
  * Remove unnecessary classes
  * Make XML editor a peer of the sheet view. Closes #82
  * Merge branch 'master' into pol
  * Typo
  * Pluggable TOC traditions
  * Slaw 1.0.0.alpha.1 locked
  * Slaw 1.0.0.alpha
  * More docs
  * Docs
  * Articles
  * Slaw doesn't do definition analysis any more
  * Swap back to previous xsl file names
  * PDF and standalone
  * Merge branch 'master' into pol
  * Fix for modals and preview mode
  * Tell cobalt what xsl to use
  * Litera/list
  * Country-based XSL and CSS
  * Slaw 1.0.0, load xsl based on country
  * Missing div
  * Fixes
  * C4SA - OpenUp
  * Fix for terms analysis
  * FIX bug on is-fragment in recent changes view
  * Point-in-time in work sidebar
  * Merge pull request #83 from OpenUpSA/works
  * Guard against no terms
  * Merge branch 'sidebar' into works
  * Doc title and other tweaks
  * Sidebar colours (darker again)
  * Bugfixes
  * Preview
  * Remove unneeded styles
  * Revisions stuff
  * Annotations
  * Indicate overflowing content
  * Edit menu
  * Edit first item in TOC
  * Table editing
  * Document toolbar
  * Major document workspace layout changes
  * Preview in sidebar
  * Doc properties modal
  * Swap _doc_sidebar and _sidebar
  * Inline attachment editing
  * Inheritable sidebar for doc page
  * Lighter sidebar
  * Prevent clashing with doc sidebar
  * Hacking on the sidebar
  * Merge branch 'terms' into works
  * Document permissions. Fixes #76.
  * Fix analyse after import
  * FIX tests
  * AFR terms and refs finders
  * Comments
  * Base class for ref finders
  * Update slaw
  * Move terms logic into base class
  * Terms code
  * Basics of python-based term analysis
  * Common registry
  * Tests
  * Locale-based refs finders
  * Progress and error box fix
  * FIX tests
  * Timeline with cards
  * Nicer timeline
  * Modal styles
  * Remove document chooser
  * Split out scss
  * Attachments card
  * Breadcrumb
  * Remove housekeeping section
  * Draft vs publish in save button
  * Username and email must match
  * Default editor country. Fixes #77.
  * Perms fix
  * Updated logos
  * Navbar
  * Navbar
  * Import page
  * H5
  * Merge branch 'bs4' into works. Closes #71.
  * Standalone
  * New work
  * Timeline and related
  * Fixes for workspace
  * Work header
  * Navbar logo position
  * package.json
  * Navbar height
  * Remove old bootstrap
  * Resolver
  * Dropdown menus
  * Attachments and headings
  * Fix buttons, remove tooltips
  * Button colours
  * Annotations
  * Colours
  * Preview
  * Revisions
  * More document stuff
  * Amendments and doc view
  * Document props
  * Basics of document page
  * Standalone pages
  * Padding
  * Work chooser
  * Import page
  * Password and profile dialog
  * Library page
  * Greys
  * Breadcrumb
  * Timeline
  * Related
  * Work detail form
  * Work form
  * playing with bootstrap
  * Simple form groups
  * Basics of bs4 navbar
  * No related works
  * JS bug fix
  * Hard delete works
  * Updated slaw 0.17.2
  * Fixess for work can_delete
  * Improvements to can_delete and related works
  * Change linked work via menu
  * Prevent infinite recursion with nested serializers
  * Merge branch 'commenced-by' into works
  * Parent work, preloads
  * Commencing work and related
  * Localities in work chooser
  * Taller header, remove unnecessary title
  * Don't stash amendment events, read from work
  * Tweaks
  * Missing template
  * Merge branch 'related' into works
  * Related repeals
  * Basics of related works
  * Stub for related works
  * Fix work chooser save button
  * Document amendments are read-only
  * Merge branch 'date-dropdown' into works
  * Remove expressionset, fix expression date dropdowns
  * Hacky expression date dropdown
  * Remove old amendment code
  * More consistent colours and layouts
  * Breadcrumb links
  * Remember filters
  * Breadcrumb in document view
  * Fix document amendment view
  * Creation of new documents
  * Slaw 0.17.1
  * Default expression date
  * Remove in-year nav for work detail page
  * Boto settings
  * Update django storages and boto
  * Handle bad locality
  * Fix for new work
  * Merge branch 'concrete-amendments' into works
  * Document amendments readonly
  * Create doc at expression
  * Tweaks to timeline
  * Remove expressions from main work view
  * Timeline view in work amendments
  * Stash documents for a work
  * Expression dates in document view
  * Link to new amendment management
  * Simple permission checks
  * Performance tweaks
  * Copy work amendments into doc
  * Migrate to concrete amendments
  * Smarter amending work serialization
  * Use a common layout
  * Link to it
  * Amendments with a big hack to get work info
  * Amendments model and view
  * Work amendments editor basics
  * Indicate dropdowns
  * Dots not brockets
  * Ensure amendments have matching works
  * FIX tests
  * Python 2.7.14
  * Compile scss
  * Faster checks
  * Fix epub/pdf sass during production
  * Remove unneeded pyscss stuff
  * Inline scss for html export
  * Sass for epub
  * Attempt at export stylesheets
  * Use libsass
  * Sort requirements.txt without changing it
  * Security settings
  * Updated gevent/gunicorn
  * Nicer breadcrumbs
  * Preload works in document view
  * Preload work
  * Bugfix, menu change
  * Bug fix for amendment view
  * Parent/child relationship
  * frbr uri in work view
  * Nicer library filter view
  * Filter by nature
  * Filter by no locality
  * Breadcrumb
  * Remove old layout
  * Link to amending works
  * Choose work when changing amnedments
  * Wording
  * Doc workspace uses new layout
  * Fix login form
  * Library view with new navbar
  * Import uses new layout
  * Bootstrap-based nav
  * Nicer work layout
  * Works
  * Docs
  * Grey BG for panel forms
  * Repeal in work view
  * Fixes and tests around repeal
  * Tests and fixes
  * Repeal info on work, not document
  * Better 400-level errors
  * Docs in work view
  * Work chooser toggles country
  * Library view is country-specific
  * Indicate deleted works
  * Bug
  * Localities as dropdown
  * Library view shows works
  * Inject works into library view
  * Move elements around
  * Prevent deletion
  * Improved new document flow
  * Dynamically load documents for work view
  * Make jslint happy
  * Panels in document props view
  * Work title
  * Add expression date to document title
  * Track dirty state for work
  * Show documents for a  work
  * Cascade work attribute updates
  * Adjustments for works
  * Bugfix for locality name
  * fixes for tests
  * Move commencement and assent dates to work
  * Little bit of permissions support
  * Basic work model validation
  * Validate work FRBR URI
  * Always preload user
  * Redirect on created work
  * Edit/new work view
  * Ensure title is correct on import
  * Basics of work chooser in import view
  * Work details
  * Country selector in work chooser
  * Choose a work for a document
  * Basics of work in doc view
  * Serialize pub details
  * Add publication details to work
  * Cascade soft deletes from works to documents
  * Works can't be drafts
  * Typo
  * Document title is required
  * Require frbr_uris to link to works
  * Link work to document, inherit some fields
  * Work FRBR URI is unique
  * Admin
  * Break views into separate submodules
  * Basics of work model and api
  * Use mammoth to convert docx to html
  * Merge pull request #68 from OpenUpSA/new-table-grammar
  * Latest cobalt 0.3.2
  * Use original img src, not full url
  * Use data-href, not full URL, when re-parsing AKN HTML
  * Insert empty table better
  * Ignore empty lines when creating tables
  * Special text inside tables doesn't need to be escaped
  * Strip whitespace from table cell elements
  * Handle imgs and ref tags in table
  * Slaw 0.17
  * Merge branch 'crop'
  * Django-ckeditor 5.3.1
  * Make linked terms and linked acts dialogs similar
  * Merge branch 'crop' into stash-attrs
  * Fix pages scroller with scrollbars
  * psql server 9.4
  * Defer document xml
  * Stash amendment info in db
  * Stash repeal information in db
  * Stash publication details, delegate to work uri
  * Fix historical migrations so that the use the versioned model
  * Indicate loading pdfs
  * Merge branch 'master' into crop
  * Whoops, really fix #63.
  * Merge branch 'master' into crop
  * Bug fix for new document
  * Quick edit bug fix. Closes #63
  * Smaller corners
  * Use poppler-utils pdftotext
  * Local svg.js
  * Docs
  * Use cropbox, FIX bug when passing file_options to server
  * Changes to cropbox controls
  * Use slaw 0.16 and cropbox
  * Crop box dragging
  * Padding page
  * PDFJS
  * Show PDF content in import view
  * Update ruby depedencies
  * Slaw 0.15.1
  * Slaw 0.15.0
  * Allow user to remove refs
  * Fix revision view
  * Merge branch 'tweak-import'
  * Handle country when finding references. Fixes #58
  * Handle country when importing documents
  * psycopg2 to handle psql 10.1 on travis
  * Revert "pin psql 9.4"
  * pin psql 9.4
  * Merge branch 'auth-tokens'
  * Move auth urls under /api/, allow users to reset tokens
  * Auth tokens
  * Slaw 0.14.2
  * Merge pull request #60 from OpenUpSA/login
  * Enforce API permissions
  * Enforce login, remove js support
  * Password reset styling
  * Additional registration files
  * Reset password stuff
  * Basics of login page
  * Merge pull request #59 from OpenUpSA/1.11
  * Django 1.11.8 and fix deprecation warnings
  * Edit mode has sheet border
  * Merge branch 'amendment-chooser'
  * Repeal uses document chooser
  * Tweaks
  * Amendment dialog uses document chooser
  * Calculate frbr uri in model
  * Syntax highlighting for refs in remarks
  * Bump ruby dependencies
  * Slaw 0.14.1
  * Merge pull request #54 from OpenUpSA/search
  * Move stuff around
  * Use default FTS language (easier)
  * DOCS
  * Defer search_text and search_vector
  * Use search rank cd
  * Simplify queries, paginate search
  * Weight title heigher than body
  * Correctly order and rank work search
  * Filter on expression date
  * Scope search
  * Filtering with django-filters
  * Basics of postgres-driven FTS.
  * Docs
  * Merge pull request #51 from OpenUpSA/zip
  * Generate a zipfile response. Closes #41
  * Remove last traces of lime
  * Merge pull request #47 from OpenUpSA/i18n
  * Test for l10n
  * Translations
  * Localise tables of contents
  * Cache 3-to-2 language code lookup
  * Cobalt 0.3.1
  * Translations
  * Merge pull request #46 from OpenUpSA/l10n_i18n
  * Merge branch 'i18n' into l10n_i18n
  * New translations django.po (Zulu)
  * New translations django.po (Xhosa)
  * New translations django.po (Venda)
  * New translations django.po (Afrikaans)
  * New translations django.po (Zulu)
  * New translations django.po (Xhosa)
  * New translations django.po (Venda)
  * New translations django.po (Tswana)
  * New translations django.po (Tsonga)
  * New translations django.po (Swati)
  * New translations django.po (Southern Sotho)
  * New translations django.po (Southern Ndebele)
  * New translations django.po (Northern Sotho)
  * New translations django.po (Afrikaans)
  * Translate part
  * Ensure we source Part translation for use in xsl
  * New translations django.po (Zulu)
  * New translations django.po (Xhosa)
  * New translations django.po (Venda)
  * New translations django.po (Swati)
  * Updated .mo translations
  * Merge pull request #45 from OpenUpSA/l10n_i18n
  * Merge branch 'i18n' into l10n_i18n
  * Update Crowdin configuration file
  * New translations django.po (Zulu)
  * New translations django.po (Xhosa)
  * New translations django.po (Venda)
  * New translations django.po (Tswana)
  * New translations django.po (Tsonga)
  * New translations django.po (Swati)
  * New translations django.po (Southern Sotho)
  * New translations django.po (Southern Ndebele)
  * New translations django.po (Northern Sotho)
  * New translations django.po (Afrikaans)
  * Revert "Merge pull request #44 from OpenUpSA/l10n_i18n"
  * Merge pull request #44 from OpenUpSA/l10n_i18n
  * New translations django.po (Zulu)
  * New translations django.po (Xhosa)
  * New translations django.po (Venda)
  * New translations django.po (Tswana)
  * New translations django.po (Tsonga)
  * New translations django.po (Swati)
  * New translations django.po (Southern Sotho)
  * New translations django.po (Southern Ndebele)
  * New translations django.po (Northern Sotho)
  * New translations django.po (Afrikaans)
  * Translations
  * New translations django.po (Afrikaans)
  * New translations django.po (Zulu)
  * New translations django.po (Xhosa)
  * New translations django.po (Venda)
  * New translations django.po (Tswana)
  * New translations django.po (Tsonga)
  * New translations django.po (Swati)
  * New translations django.po (Southern Sotho)
  * New translations django.po (Southern Ndebele)
  * New translations django.po (Northern Sotho)
  * New translations django.po (Afrikaans)
  * Update Crowdin configuration file
  * Update Crowdin configuration file
  * Additional translations from myconstitution.co.za
  * Translations in xslt
  * Translate chapter
  * Further translations
  * i18n basics
  * Docs
  * Merge branch 'activity'
  * Every 10 seconds
  * Colours
  * Basics of presence indicators
  * User activity api
  * Convert selection to table
  * Attachment heights
  * indigo-web 0.1.3
  * Ensure Django understands SSL
  * Bug fix
  * Make selected amended version clearer
  * Normalise colours
  * Merge pull request #43 from OpenUpSA/images
  * Ruby 2.3.3 in travis
  * Latest cobalt
  * Documentation
  * Drag and drop
  * Merge branch 'new-attachment-editor' into images
  * Pointers, fast-save attachment
  * Merge with image selector
  * Re-use attachment grid list.
  * Sort attachment list when filename changed
  * Image chooser
  * Merge branch 'edit-menu' into images
  * Enable/disable edit menu items
  * Shortcut keys on menu items
  * Basics of edit menu
  * Ace support for images and links
  * Docs
  * Docs for links and images
  * Manifestation uri when rendering
  * Change default INDIGO_URL for development
  * Additional tests
  * Tests
  * Fix content negotiation
  * Integrating media view into published document url
  * Basic media root for documents api
  * Make fully-qualified image urls
  * Slaw 0.14.0
  * Ruby 2.3.3
  * Merge branch 'as-xml'
  * Download as XML, closes #42
  * FIX always create temp file, so not accidentally closed
  * Merge pull request #39 from OpenUpSA/no-lime
  * No more lime
  * Merge pull request #38 from OpenUpSA/annotations
  * Cobalt 0.2.1
  * Ensure schedules have ids
  * Merge branch 'master' into annotations
  * Hide hovering annotation buttons
  * Defined terms shouldn't take up too much space
  * PDF logo
  * Merge branch 'master' into annotations
  * FIX bug when updating entire document
  * FIX editing tables with ids
  * Fix tests
  * tweak colours
  * Merge branch 'master' into annotations
  * Make published url wide
  * Cobalt 0.2.0
  * Blur when comment closed
  * Copy attributes for a tags correctly
  * Scoped id's in schedules
  * Merge branch 'master' into annotations
  * Closing annotations
  * Non-functioning done button
  * Fix readonly
  * Markdown comments, timestamps
  * Showdown
  * Closest
  * Add missing drafts fixture
  * Adjustments
  * Edit
  * Comments on tables
  * Fix reply bug
  * Perms for annotations
  * Validate in-reply-to
  * Throttle new annotation button
  * More onnotatable elements
  * Remove edit
  * Highlights
  * Hover
  * Focus
  * Anchors and stuff
  * Interact with server
  * Basic annotation api
  * Readonly
  * Better new annotations
  * Autogrow textareas
  * New annotation
  * No comments when unauthenticated
  * Ensure annotation events are rebound
  * Updated backbone and underscore
  * Delete annotations
  * Add new annotation
  * Floating annotation button
  * Replies
  * Annotations mockup
  * Styling
  * Now with sorting
  * Stab at expression-set based library view
  * Return user id in api
  * Merge branch 'pub-expression-dates'
  * Metadata -> Document Details
  * Nicer looking fieldsets in properties view
  * Improve layout of metadata
  * Auto-adjust expression and publication dates
  * Merge branch 'basic-validation'
  * Some form validation
  * Adjust help text
  * Badge
  * Merge pull request #35 from Code4SA/act-refs
  * Merge branch 'master' into act-refs
  * Merge branch 'resolver'
  * Cobalt 0.1.11 and matching xsl
  * Merge branch 'master' into act-refs
  * Slaw 0.13.0
  * Anchor java buildpack
  * FIX table editing bug
  * Support authorities without a url
  * Make authority URL optional
  * Send GA event for resolver without refs
  * Find references after import
  * Cobalt 0.1.11
  * Slaw 0.12.0
  * Resolver javascript
  * Import command for authority references
  * Find references view
  * Docs
  * Pass in resolver url to renderer
  * Make resolver URL optional
  * Tooltip is URL
  * Merge branch 'resolver' into act-refs
  * Check for absolute refs
  * Faster transitions
  * Use resolver
  * Handle no matches
  * Move ancestor list
  * Use refs
  * Move logo to footer
  * Layout
  * Basics of the Indigo Resolver
  * Resolver base url in xslt
  * Refs elsewhere in doc, too
  * Don't nest refs
  * FIX document serializer requirements
  * Basics for linking references
