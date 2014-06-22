/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseUniq = require('../internal/baseUniq'),
    callback = require('../utility/callback');

/**
 * Creates a duplicate-value-free version of an array using strict equality
 * for comparisons, i.e. `===`. Providing `true` for `isSorted` performs a
 * faster search algorithm for sorted arrays. If an iterator function is
 * provided it is executed for each value in the array to generate the criterion
 * by which uniqueness is computed. The `iterator` is bound to `thisArg` and
 * invoked with three arguments; (value, index, array).
 *
 * If a property name is provided for `iterator` the created "_.pluck" style
 * callback returns the property value of the given element.
 *
 * If an object is provided for `iterator` the created "_.where" style callback
 * returns `true` for elements that have the properties of the given object,
 * else `false`.
 *
 * @static
 * @memberOf _
 * @alias unique
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {boolean} [isSorted=false] Specify the array is sorted.
 * @param {Function|Object|string} [iterator] The function called per iteration.
 *  If a property name or object is provided it is used to create a "_.pluck"
 *  or "_.where" style callback respectively.
 * @param {*} [thisArg] The `this` binding of `iterator`.
 * @returns {Array} Returns the new duplicate-value-free array.
 * @example
 *
 * _.uniq([1, 2, 1]);
 * // => [1, 2]
 *
 * // using `isSorted`
 * _.uniq([1, 1, 2], true);
 * // => [1, 2]
 *
 * // using an iterator function
 * _.uniq([1, 2.5, 1.5, 2], function(n) { return this.floor(n); }, Math);
 * // => [1, 2.5]
 *
 * // using "_.pluck" callback shorthand
 * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
 * // => [{ 'x': 1 }, { 'x': 2 }]
 */
function uniq(array, isSorted, iterator, thisArg) {
  var length = array ? array.length : 0;
  if (!length) {
    return [];
  }
  // juggle arguments
  var type = typeof isSorted;
  if (type != 'boolean' && isSorted != null) {
    thisArg = iterator;
    iterator = isSorted;
    isSorted = false;

    // enables use as a callback for functions like `_.map`
    if ((type == 'number' || type == 'string') && thisArg && thisArg[iterator] === array) {
      iterator = null;
    }
  }
  if (iterator != null) {
    iterator = callback(iterator, thisArg, 3);
  }
  return baseUniq(array, isSorted, iterator);
}

module.exports = uniq;
