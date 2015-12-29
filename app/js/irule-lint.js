// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  function lintError(message, line, column) {
    this.message = message;
    this.mark = {
      line: line,
      column: column,
    };
    this.severity = 'error';
  }

  function lintWarning(message, line, column) {
    this.message = message;
    this.mark = {
      line: line,
      column: column,
    };
    this.severity = 'warning';
  }

  // declare global: irulelint
  function iruleLint(text) {
    var errors = [];
    var state = [];
    var indent = 0;
    var lines = text.split('\n');
    for (var i = 0; i < lines.length; i++) {
      if (lines[i][0] === '#' || lines[i][0] === undefined) {
        // Comment, ignore everything
      } else {
        var splitWords = lines[i].split(' ');
        var words = [];
        for (var j = 0; j < splitWords.length; j++) {
          if (splitWords[j].length > 1) {
            // pull braces off end
            while (splitWords[j].search('}|{') > 0) {
              var myIndex = splitWords[j].search('}|{');
              words.push(splitWords[j].substr(0, myIndex));
              splitWords[j] = splitWords[j].substr(myIndex);
            }
            // pull braces off beginning
            while (splitWords[j].charAt(0) === '{' || splitWords[j].charAt(0) === '}' ) {
              var brace = splitWords[j][0];
              words.push(brace);
              splitWords[j] = splitWords[j].substr(1);
            }
            while (splitWords[j].charAt(0) === '[' || splitWords[j].charAt(0) === ']' ) {
              var brace = splitWords[j][0];
              words.push(brace);
              splitWords[j] = splitWords[j].substr(1);
            }
            while (splitWords[j].charAt(splitWords[j].length - 1) === '}') {
              var brace = splitWords[j].charAt(splitWords[j].length - 1);
              words.push(brace);
              splitWords[j] = splitWords[j].slice(0, -1);
            }
            while (splitWords[j].charAt(splitWords[j].length - 1) === '{') {
              var brace = splitWords[j].charAt(splitWords[j].length - 1);
              words.push(brace);
              splitWords[j] = splitWords[j].slice(0, -1);
            }
            while (splitWords[j].charAt(splitWords[j].length - 1) === ']') {
              var brace = splitWords[j].charAt(splitWords[j].length - 1);
              words.push(brace);
              splitWords[j] = splitWords[j].slice(0, -1);
            }
            while (splitWords[j].charAt(splitWords[j].length - 1) === '[') {
              var brace = splitWords[j].charAt(splitWords[j].length - 1);
              words.push(brace);
              splitWords[j] = splitWords[j].slice(0, -1);
            }
            if (splitWords[j].length > 0) {
              words.push(splitWords[j]);
            }
          } else {
            words.push(splitWords[j]);
          }
        }
        for (var j = 0; j < words.length; j++) {
          if (words[j] == '') {
            //space
          } else if (words[j][0] == '#') {
            // Comment
            // break out of loop
            j = words.length;
          } else if (words[j] == 'when') {
            if (eventList.indexOf(words[j+1]) >= 0) {
            }
            if (indent > 0) {
              //console.log('Event Error, indent: ' + indent);
              errors.push(new lintError('Can\'t have event inside another event', i, j));
            }
            state.push(words[j + 1]);
          } else if (words[j] == '{') {
            indent++;
          } else if (words[j] == '}') {
            indent--;
            if (indent == 0) {
              state.pop();
            }
          } else if (state == '') {
            errors.push(new lintError('Functions outside of an event', i, j));
          } else if (indent < 0) {
            errors.push(new lintError('Brace Mismatch: Too many closing braces', i, 0));
          } else if (words[j] === 'set') {
            if (words[j + 1] !== undefined) {
              if (words[j + 1][0] === ':') {
                errors.push(new lintWarning('Global Variable disables CMP', i, j + 1));
              }
            }
          } else if (words[j] === 'elseif') {
            errors.push(new lintWarning('Consider using a switch or class match if many elseifs', i, j));
          } else if (words[j][0] === '$') {
            if (words[j][1] === ':') {
              errors.push(new lintWarning('Possible deprecated datagroup usage; will cause error in v11', i, j));
            }
          } else if (words[j] === 'matchclass') {
            errors.push(new lintWarning('Deprecated command matchclass, use class command instead', i, j));
          } else if (words[j] === 'findclass') {
            errors.push(new lintWarning('Deprecated command findclass, use class command instead', i, j));
          }
        }
      }
      if (indent < 0) {
        errors.push(new lintError('Brace Mismatch: Too many closing braces', i, 0));
      }
    }
    if (indent > 0) {
      errors.push(new lintError('Brace Mismatch: Missing closing brace', i, 0));
    } else if (indent < 0) {
      errors.push(new lintError('Brace Mismatch: Too many closing braces', i, 0));
    }
    return errors;
  }

  CodeMirror.registerHelper("lint", "irule", function(text) {
    var found = [];
    var errorsReturned = [];
    try {
      errorsReturned = iruleLint(text);
    }
    catch(e) {
      console.log(e);
      //var loc = e.mark;
      //found.push({ from: CodeMirror.Pos(loc.line, loc.column), to: CodeMirror.Pos(loc.line, loc.column), message: e.message });
    }
    for (var i = 0; i < errorsReturned.length; i++) {
      var loc = errorsReturned[i].mark;
      found.push({
        from: CodeMirror.Pos(loc.line, loc.column),
        to: CodeMirror.Pos(loc.line, loc.column),
        message: errorsReturned[i].message,
        severity: errorsReturned[i].severity
      });
    }
    return found;
  });
});
