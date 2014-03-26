/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Native method shortcuts */
var floor = Math.floor;

/**
 * Repeats the given string `n` times.
 *
 * @static
 * @memberOf _
 * @category Strings
 * @param {string} [string=''] The string to repeat.
 * @param {number} [n=0] The number of times to repeat the string.
 * @returns {string} Returns the repeated string.
 * @example
 *
 * _.repeat('*', 3);
 * // => '***'
 *
 * _.repeat('abc', 2);
 * // => 'abcabc'
 *
 * _.repeat('abc', 0);
 * // => ''
 */
function repeat(string, n) {
  var result = '';
  n |= 0;

  if (n < 1 || string == null) {
    return result;
  }
  string = String(string);
  do {
    if (n % 2) {
      result += string;
    }
    n = floor(n / 2);
    string += string;
  } while (n);
  return result;
}

module.exports = repeat;
