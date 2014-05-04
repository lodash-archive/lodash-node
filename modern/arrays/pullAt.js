/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCompareAscending = require('../internals/baseCompareAscending'),
    baseFlatten = require('../internals/baseFlatten');

/** Used for native method references */
var arrayRef = Array.prototype;

/** Native method shortcuts */
var splice = arrayRef.splice;

/**
 * Removes elements from `array` corresponding to the specified indexes and
 * returns an array of removed elements. Indexes may be specified as an array
 * of indexes or as individual arguments.
 *
 * Note: Like `_.pull`, this method mutates `array`.
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {Array} array The array to modify.
 * @param {...(number|number[])} [index] The indexes of values to remove,
 *  specified as individual indexes or arrays of indexes.
 * @returns {Array} Returns the new array of removed elements.
 * @example
 *
 * var array = [5, 10, 15, 20];
 * var evens = _.removeAt(array, [1, 3]);
 *
 * console.log(array);
 * // => [5, 15]
 *
 * console.log(evens);
 * // => [10, 20]
 */
function pullAt(array) {
  var previous,
      index = -1,
      removals = baseFlatten(arguments, true, false, 1),
      length = removals.length,
      result = Array(length);

  while (++index < length) {
    result[index] = array[removals[index]];
  }
  removals.sort(baseCompareAscending);
  while (length--) {
    var removal = removals[length];
    if (removal != previous) {
      splice.call(array, removal, 1);
      previous = removal;
    }
  }
  return result;
}

module.exports = pullAt;
