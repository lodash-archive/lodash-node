/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseAt = require('../internals/baseAt'),
    baseCompareAscending = require('../internals/baseCompareAscending'),
    baseFlatten = require('../internals/baseFlatten');

/** Used for native method references */
var arrayProto = Array.prototype;

/** Native method shortcuts */
var splice = arrayProto.splice;

/**
 * The base implementation of `_.pullAt` without support for individual
 * index arguments.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {number[]} indexes The indexes of elements to remove.
 * @returns {Array} Returns the new array of removed elements.
 */
function basePullAt(array, indexes) {
  var length = indexes.length,
      result = baseAt(array, indexes);

  indexes.sort(baseCompareAscending);
  while (length--) {
    var index = parseFloat(indexes[length]);
    if (index != previous && index > -1 && index % 1 == 0) {
      var previous = index;
      splice.call(array, index, 1);
    }
  }
  return result;
}

/**
 * Removes elements from `array` corresponding to the specified indexes and
 * returns an array of removed elements. Indexes may be specified as an array
 * of indexes or as individual arguments.
 *
 * Note: Unlike `_.at`, this method mutates `array`.
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {Array} array The array to modify.
 * @param {...(number|number[])} [indexes] The indexes of elements to remove,
 *  specified as individual indexes or arrays of indexes.
 * @returns {Array} Returns the new array of removed elements.
 * @example
 *
 * var array = [5, 10, 15, 20];
 * var evens = _.pullAt(array, [1, 3]);
 *
 * console.log(array);
 * // => [5, 15]
 *
 * console.log(evens);
 * // => [10, 20]
 */
function pullAt(array) {
  return basePullAt(array, baseFlatten(arguments, true, false, 1));
}

module.exports = pullAt;
