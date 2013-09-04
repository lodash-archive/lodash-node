/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** `Object#toString` result shortcuts */
var funcClass = '[object Function]';

/** Used for native method references */
var objectProto = Object.prototype;

/** Native method shortcuts */
var toString = objectProto.toString;

/**
 * Checks if `value` is a function.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 */
function isFunction(value) {
  return typeof value == 'function';
}
// fallback for older versions of Chrome and Safari
if (isFunction(/x/)) {
  isFunction = function(value) {
    return typeof value == 'function' && toString.call(value) == funcClass;
  };
}

module.exports = isFunction;
