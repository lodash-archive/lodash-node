/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var charsRightIndex = require('../internal/charsRightIndex'),
    trimmedRightIndex = require('../internal/trimmedRightIndex');

/**
 * Removes trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @category String
 * @param {string} [string=''] The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trimRight('  fred  ');
 * // => '  fred'
 *
 * _.trimRight('-_-fred-_-', '_-');
 * // => '-_-fred'
 */
function trimRight(string, chars) {
  string = string == null ? '' : String(string);
  if (!string) {
    return string;
  }
  if (chars == null) {
    return string.slice(0, trimmedRightIndex(string) + 1)
  }
  chars = String(chars);
  return string.slice(0, charsRightIndex(string, chars) + 1);
}

module.exports = trimRight;
