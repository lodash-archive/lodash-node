/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCallback = require('../internal/baseCallback'),
    baseEachRight = require('../internal/baseEachRight'),
    isArray = require('../object/isArray');

/**
 * A specialized version of `_.forEachRight` for arrays without support for
 * callback shorthands or `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iterator The function called per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEachRight(array, iterator) {
  var length = array ? array.length : 0;
  while (length--) {
    if (iterator(array[length], length, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * This method is like `_.forEach` except that it iterates over elements of
 * a collection from right to left.
 *
 * @static
 * @memberOf _
 * @alias eachRight
 * @category Collection
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} [iterator=identity] The function called per iteration.
 * @param {*} [thisArg] The `this` binding of `iterator`.
 * @returns {Array|Object|string} Returns `collection`.
 * @example
 *
 * _([1, 2, 3]).forEachRight(function(n) { console.log(n); }).join(',');
 * // => logs each number from right to left and returns '3,2,1'
 */
function forEachRight(collection, iterator, thisArg) {
  return (typeof iterator == 'function' && typeof thisArg == 'undefined' && isArray(collection))
    ? arrayEachRight(collection, iterator)
    : baseEachRight(collection, baseCallback(iterator, thisArg, 3));
}

module.exports = forEachRight;
