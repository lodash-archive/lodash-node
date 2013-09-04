/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** `Object#toString` result shortcuts */
var numberClass = '[object Number]';

/** Used for native method references */
var objectProto = Object.prototype;

/** Native method shortcuts */
var toString = objectProto.toString;

/**
 * Checks if `value` is a number.
 *
 * Note: `NaN` is considered a number. See http://es5.github.io/#x8.5.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(8.4 * 5);
 * // => true
 */
function isNumber(value) {
  return typeof value == 'number' || toString.call(value) == numberClass;
}

module.exports = isNumber;
