/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var charsLeftIndex = require('./charsLeftIndex'),
    charsRightIndex = require('./charsRightIndex'),
    trimmedLeftIndex = require('./trimmedLeftIndex'),
    trimmedRightIndex = require('./trimmedRightIndex');

/**
 * A fallback implementation of `trim` to remove leading and trailing
 * whitespace or specified characters from `string`.
 *
 * @private
 * @param {string} string The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @returns {string} Returns the trimmed string.
 */
function shimTrim(string, chars) {
  string = string == null ? '' : String(string);
  if (!string) {
    return string;
  }
  if (chars == null) {
    return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
  }
  chars = String(chars);
  return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
}

module.exports = shimTrim;
