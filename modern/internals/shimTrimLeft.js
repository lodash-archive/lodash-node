/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var charsLeftIndex = require('./charsLeftIndex'),
    trimmedLeftIndex = require('./trimmedLeftIndex');

/**
 * A fallback implementation of `String#trimLeft` to remove leading whitespace
 * or specified characters from `string`.
 *
 * @private
 * @param {string} string The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @returns {string} Returns the trimmed string.
 */
function shimTrimLeft(string, chars) {
  string = string == null ? '' : String(string);
  if (!string) {
    return string;
  }
  if (chars == null) {
    return string.slice(trimmedLeftIndex(string))
  }
  chars = String(chars);
  return string.slice(charsLeftIndex(string, chars));
}

module.exports = shimTrimLeft;
