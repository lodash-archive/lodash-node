/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseEach = require('../internal/baseEach'),
    callback = require('../utility/callback');

/**
 * Used as the maximum length of an array-like object.
 * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
 * for more details.
 */
var maxSafeInteger = Math.pow(2, 53) - 1;

/**
 * Reduces a collection to a value which is the accumulated result of running
 * each element in the collection through `iterator`, where each successive
 * execution consumes the return value of the previous execution. If `accumulator`
 * is not provided the first element of the collection is used as the initial
 * `accumulator` value. The `iterator` is bound to `thisArg`and invoked with
 * four arguments; (accumulator, value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @alias foldl, inject
 * @category Collection
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} [iterator=identity] The function called per iteration.
 * @param {*} [accumulator] Initial value of the accumulator.
 * @param {*} [thisArg] The `this` binding of `iterator`.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * var sum = _.reduce([1, 2, 3], function(sum, n) { return sum + n; });
 * // => 6
 *
 * var mapped = _.reduce({ 'a': 1, 'b': 2, 'c': 3 }, function(result, n, key) {
 *   result[key] = n * 3;
 *   return result;
 * }, {});
 * // => { 'a': 3, 'b': 6, 'c': 9 }
 */
function reduce(collection, iterator, accumulator, thisArg) {
  var noaccum = arguments.length < 3;
  iterator = callback(iterator, thisArg, 4);

  var index = -1,
      length = collection ? collection.length : 0;

  if (typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
    if (noaccum && length) {
      accumulator = collection[++index];
    }
    while (++index < length) {
      accumulator = iterator(accumulator, collection[index], index, collection);
    }
  } else {
    baseEach(collection, function(value, index, collection) {
      accumulator = noaccum
        ? (noaccum = false, value)
        : iterator(accumulator, value, index, collection)
    });
  }
  return accumulator;
}

module.exports = reduce;
