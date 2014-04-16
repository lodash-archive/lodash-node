/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseForOwn = require('../internals/baseForOwn'),
    isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isFunction = require('./isFunction'),
    isString = require('./isString');

/**
 * Used as the maximum length of an array-like object.
 * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
 * for more details.
 */
var maxSafeInteger = Math.pow(2, 53) - 1;

/**
 * Checks if a collection is empty. A value is considered empty unless it is
 * an array, array-like object, or string with a length greater than `0` or
 * an object with own properties.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Array|Object|string} value The value to inspect.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  var result = true;
  if (!value) {
    return result;
  }
  var length = value.length;
  if (length > -1 && length <= maxSafeInteger &&
      (isArray(value) || isString(value) || isArguments(value) ||
        (typeof value == 'object' && isFunction(value.splice)))) {
    return !length;
  }
  baseForOwn(value, function() {
    return (result = false);
  });
  return result;
}

module.exports = isEmpty;
