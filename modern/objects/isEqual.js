/**
 * Lo-Dash 2.5.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCreateCallback = require('../internals/baseCreateCallback'),
    baseIsEqual = require('../internals/baseIsEqual');

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent. If a callback is provided it is executed to compare values.
 * If the callback returns `undefined` comparisons are handled by the method
 * instead. The callback is bound to `thisArg` and invoked with three arguments;
 * (value, other, key).
 *
 * Note: This method supports comparing arrays, booleans, `Date` objects,
 * numbers, `Object` objects, regexes, and strings. Functions and DOM nodes
 * are **not** supported. A callback may be used to extend support for
 * comparing other values.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {*} value The value to compare to `other`.
 * @param {*} other The value to compare to `value`.
 * @param {Function} [callback] The function to customize comparing values.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'name': 'fred' };
 * var other = { 'name': 'fred' };
 *
 * object == other;
 * // => false
 *
 * _.isEqual(object, other);
 * // => true
 *
 * var words = ['hello', 'goodbye'];
 * var otherWords = ['hi', 'goodbye'];
 *
 * _.isEqual(words, otherWords, function() {
 *   return _.every(arguments, _.bind(RegExp.prototype.test, /^h(?:i|ello)$/)) || undefined;
 * });
 * // => true
 */
function isEqual(value, other, callback, thisArg) {
  callback = typeof callback == 'function' && baseCreateCallback(callback, thisArg, 3);

  if (!callback) {
    // exit early for identical values
    if (value === other) {
      // treat `-0` vs. `+0` as not equal
      return value !== 0 || (1 / value == 1 / other);
    }
    var valType = typeof value,
        othType = typeof other;

    // exit early for unlike primitive values
    if (value === value && (value == null || other == null ||
        (valType != 'function' && valType != 'object' && othType != 'function' && othType != 'object'))) {
      return false;
    }
  }
  return baseIsEqual(value, other, callback);
}

module.exports = isEqual;
