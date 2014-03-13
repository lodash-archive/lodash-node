/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Checks if `string` ends with a given target string.
 *
 * @static
 * @memberOf _
 * @category Strings
 * @param {string} [string=''] The string to search.
 * @param {string} [target] The string to search for.
 * @param {number} [position=string.length] The position to search from.
 * @returns {boolean} Returns `true` if the given string ends with the
 *  target string, else `false`.
 * @example
 *
 * _.endsWith('abc', 'c');
 * // => true
 *
 * _.endsWith('abc', 'b');
 * // => false
 *
 * _.endsWith('abc', 'b', 2);
 * // => true
 */
function endsWith(string, target, position) {
  string = string == null ? '' : String(string);
  target = String(target);

  var length = string.length;
  position = (typeof position == 'number' ? nativeMin(nativeMax(position | 0, 0), length) : length) - target.length;
  return position >= 0 && string.indexOf(target, position) == position;
}

module.exports = endsWith;
