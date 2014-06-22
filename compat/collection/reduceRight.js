/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseEachRight = require('../internal/baseEachRight'),
    callback = require('../utility/callback');

/**
 * This method is like `_.reduce` except that it iterates over elements of a
 * collection from right to left.
 *
 * @static
 * @memberOf _
 * @alias foldr
 * @category Collection
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} [iterator=identity] The function called per iteration.
 * @param {*} [accumulator] Initial value of the accumulator.
 * @param {*} [thisArg] The `this` binding of `iterator`.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * var array = [[0, 1], [2, 3], [4, 5]];
 * _.reduceRight(array, function(flattened, other) { return flattened.concat(other); }, []);
 * // => [4, 5, 2, 3, 0, 1]
 */
function reduceRight(collection, iterator, accumulator, thisArg) {
  var noaccum = arguments.length < 3;
  iterator = callback(iterator, thisArg, 4);

  baseEachRight(collection, function(value, index, collection) {
    accumulator = noaccum
      ? (noaccum = false, value)
      : iterator(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = reduceRight;
