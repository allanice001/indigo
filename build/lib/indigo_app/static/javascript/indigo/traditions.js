(function(exports) {
  "use strict";

  if (!exports.Indigo) exports.Indigo = {};
  Indigo = exports.Indigo;
  if (!Indigo.traditions) Indigo.traditions = {};

  Indigo.traditions.get = function(country) {
    return Indigo.traditions[country] || Indigo.traditions.default;
  };

  Indigo.Tradition = function(settings) {
    this.settings = settings;
    this.initialize.apply(this, arguments);
  };

  _.extend(Indigo.Tradition.prototype, {
    initialize: function() {},

    // Should this XML node be included in the table of contents?
    // By default, checks if the name of the node is in the +elements+ object.
    is_toc_element: function(node) {
      return !!this.settings.toc.elements[node.localName];
    },

    toc_element_title: function(item) {
      return (
        this.settings.toc.titles[item.type] ||
        Indigo.traditions.default.settings.toc.titles[item.type] ||
        this.settings.toc.titles.default ||
        Indigo.traditions.default.settings.toc.titles.default
      )(item);
    },
  });

  // Base
  Indigo.traditions.default = new Indigo.Tradition({
    country: null,
    grammar: {
      fragments: {
        chapter: 'chapters',
        part: 'parts',
        section: 'sections',
        component: 'schedules',
        components: 'schedules_container',
      },
      quickEditable: '.akn-chapter, .akn-part, .akn-section, .akn-component, .akn-components',
      aceMode: 'ace/mode/indigo',
    },
    // CSS selector for elements that can hold annotations
    annotatable: ".akn-coverPage, .akn-preface, .akn-preamble, .akn-conclusions, " +
                 ".akn-chapter, .akn-part, .akn-section, .akn-subsection, .akn-blockList, .akn-heading, " +
                 ".akn-article, .akn-paragraph, .akn-subheading, .akn-item, table",
    toc: {
      elements: {
        akomaNtoso: 1,
        chapter: 1,
        component: 1,
        components: 1,
        conclusions: 1,
        coverpage: 1,
        part: 1,
        preamble: 1,
        preface: 1,
        section: 1,
      },
      titles: {
        default     : function(i) { return i.num + " " + i.heading; },
        akomaNtoso  : function(i) { return "Entire document"; },
        chapter     : function(i) { return "Ch. " + i.num + " – " + i.heading; },
        conclusions : function(i) { return "Conclusions"; },
        coverpage   : function(i) { return "Coverpage"; },
        part        : function(i) {
                                    if (i.heading) {
                                      return "Part " + i.num + " – " + i.heading;
                                    } else {
                                      return "Part " + i.num;
                                    }
        },
        preamble    : function(i) { return "Preamble"; },
        preface     : function(i) { return "Preface"; },
        components  : function(i) { return "Schedules"; },
        component   : function(i) { 
          var alias = i.element.querySelector('FRBRalias');
          if (alias) {
            return alias.getAttribute('value');
          }

          var component = i.element.querySelector('FRBRWork FRBRthis');
          if (component) {
            var parts = component.getAttribute('value').split('/');
            component = parts[parts.length-1];
          } else {
            component = i.element.getAttribute('name') || "Component";
          }

          var match = component.match(/([^0-9]+)([0-9]+)/);
          if (match) {
            component = match[1] + ' ' + match[2];
          }

          return component.charAt(0).toUpperCase() + component.slice(1);
        },
      },
    },
  });

  // South Africa
  Indigo.traditions.za = new Indigo.Tradition({
    country: 'za',
    grammar: Indigo.traditions.default.settings.grammar,
    annotatable: Indigo.traditions.default.settings.annotatable,
    toc: {
      elements: Indigo.traditions.default.settings.toc.elements,
      titles: {
        // just rely on the defaults
      },
    },
  });

  // Poland
  Indigo.traditions.pl = new Indigo.Tradition({
    country: 'pl',
    grammar: {
      fragments: {
        article: 'articles',
        chapter: 'chapters',
        component: 'schedules',
        components: 'schedules_container',
        division: 'divisions',
        paragraph: 'paragraphs',
        section: 'sections',
        subdivision: 'subdivisions',
      },
      quickEditable: '.akn-chapter, .akn-part, .akn-section, .akn-division, .akn-subdivision, .akn-article, .akn-component, .akn-components',
      aceMode: 'ace/mode/indigo_pl',
    },
    annotatable: Indigo.traditions.default.settings.annotatable,
    toc: {
      elements: {
        akomaNtoso: 1,
        article: 1,
        chapter: 1,
        component: 1,
        components: 1,
        conclusions: 1,
        coverpage: 1,
        division: 1,
        paragraph: 1,
        preamble: 1,
        preface: 1,
        section: 1,
        subdivision: 1,
      },
      titles: {
        article     : function(i) { return "Art. " + i.num + " " + i.heading; },
        chapter     : function(i) { return "Rozdział " + i.num + " " + i.heading; },
        division    : function(i) { return "Dział " + i.num + " " + i.heading; },
        list        : function(i) { return i.num + " " + i.heading; },
        paragraph   : function(i) { return i.num + " " + i.heading; },
        section     : function(i) { return "§ " + i.num + " " + i.heading; },
        subdivision : function(i) { return "Oddział " + i.num + " " + i.heading; },
      },
    },
  });

})(window);
