ace.define("ace/mode/indigo", ["require", "exports", "module", "ace/lib/oop", "ace/mode/text_highlight_rules"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var IndigoHighlightRules = function() {

    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used
    this.$rules = {
        "start": [
            {
                token: ["constant.numeric"],
                regex: /^([0-9][0-9a-z]*\.\s+)/
            }, {
                token: "constant.language",
                regex: /^(body|preamble|preface)\s*$/,
                caseInsensitive: true,
            }, {
                token: ["constant.language", "entity.name.tag"],
                regex: /^(LONGTITLE|CROSSHEADING)(\s+.+)$/,
            }, {
                token: "constant.numeric",
                regex: /^\([0-9][0-9a-z]*\)/
            }, {
                token: "constant.numeric",
                regex: /^\([a-z][0-9a-z]*\)/
            }, {
                token: ["constant.language", "constant.numeric", "entity.name.tag"],
                regex: /^(chapter|part)(\s+[a-zA-Z0-9]+\s*)(.*)?$/,
                caseInsensitive: true,
            }, {
                token: ["constant.language", "constant.numeric", "entity.name.tag"],
                regex: /^(schedule)(\s+[a-zA-Z0-9]*\s*)(-.*)?$/,
                caseInsensitive: true,
            }, {
                token: "constant.language",
                regex: /^schedule\s*$/,
                caseInsensitive: true,
            }, {
                token: "comment.line.remark",
                regex: /\[\[/,
                next: "remark",
            }, {
                token: "markup.underline.link",
                regex: /\[[^\]]*\]\([^\)]*\)/,
            }, {
                token: "constant.other.image",
                regex: /!\[[^\]]*\]\([^\)]*\)/,
            }, {
                token: "constant.language.table",
                regex: /^{\|/,
                next: "table",
            }
        ],
        "remark": [
            // remarks can contain links
            {
                token: "markup.underline.link",
                regex: /\[[^\]]*\]\([^\)]*\)/,
            },
            {
                token: "comment.line.remark",
                regex: /]]/,
                next: "start",
            },
            {
                defaultToken: "comment.line.remark"
            }
        ],
        "table": [
            {
                token: "constant.language.table",
                regex: /^\|}/,
                next: "start"
            },
            {
                token: "constant.language.table",
                regex: /^!|(\|-?)/,
            }
        ]
    };
};

oop.inherits(IndigoHighlightRules, TextHighlightRules);

var TextMode = require("./text").Mode;
var Mode = function() {
    this.HighlightRules = IndigoHighlightRules;
};

oop.inherits(Mode, TextMode);

(function() {
    this.$id = "ace/mode/indigo";
}).call(Mode.prototype);

exports.Mode = Mode;
});
