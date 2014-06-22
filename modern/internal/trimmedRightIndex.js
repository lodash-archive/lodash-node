/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * Used by `_.trim` and `_.trimRight` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedRightIndex(string) {
  var index = string.length;

  while (index--) {
    var c = string.charCodeAt(index);
    if (!((c <= 160 && (c >= 9 && c <= 13) || c == 32 || c == 160) || c == 5760 || c == 6158 ||
        (c >= 8192 && (c <= 8202 || c == 8232 || c == 8233 || c == 8239 || c == 8287 || c == 12288 || c == 65279)))) {
      break;
    }
  }
  return index;
}

module.exports = trimmedRightIndex;
