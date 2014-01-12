/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * Gets the index of the first character of `string` that is not found in `chars`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the first non-whitespace character.
 */
function charsLeftIndex(string, chars) {
  var index = -1,
      length = string.length;

  while (++index < length) {
    if (chars.indexOf(string.charAt(index)) < 0) {
      break;
    }
  }
  return index;
}

module.exports = charsLeftIndex;
