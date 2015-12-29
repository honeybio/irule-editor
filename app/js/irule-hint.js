(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

//var WORD = /[\w$]+/, RANGE = 500;
var WORD = /[\w\$_:{}\xa1-\uffff]/, RANGE = 500;

  CodeMirror.registerHelper("hint", "irule", function(editor, options) {
    var word = options && options.word || WORD;
    var range = options && options.range || RANGE;
    var cur = editor.getCursor(), curLine = editor.getLine(cur.line);
    var token = editor.getTokenAt(cur);
    var end = cur.ch, start = end;
    var re = new RegExp(word.source, "g");
    var list = [];

    while (start && word.test(curLine.charAt(start - 1))) --start;
    var curWord = start != end && curLine.slice(start, end);
    var text = curLine, m;

    if (token.state.state == 'events') {
      if (curWord) {
        list = [];
        var reString = curWord;
        var regex = new RegExp('^' + curWord);
        for (var i = 0; i < eventList.length; i++) {
          if (regex.test(eventList[i])) {
            list.push(eventList[i]);
          }
        }
      } else {
        list = eventList;
      }
    }
    var allList = [];
    var allList = allList.concat(keywords, f5SpecialWords, f5keywords, functions);
    while (m = re.exec(text)) {
      //console.log(m);
      if (token.state.state == 'events') {
        if (curWord) {
          list = [];
          var reString = curWord;
          var regex = new RegExp('^' + curWord);
          for (var i = 0; i < eventList.length; i++) {
            if (regex.test(eventList[i])) {
              list.push(eventList[i]);
            }
          }
        } else {
          list = eventList;
        }
      } else if (token.state.state == 'start') {
        list = [ 'when' ];
      }
      else {
        if (curWord) {
          list = [];
          var reString = curWord;
          var regex = new RegExp('^' + curWord);
          for (var i = 0; i < allList.length; i++) {
            if (regex.test(allList[i])) {
              list.push(allList[i]);
            }
          }
        } else {
          list = allList;
        }
      }
    }
    return {
      list: list,
      from: CodeMirror.Pos(cur.line, start),
      to: CodeMirror.Pos(cur.line, end)
    };
  });
});
