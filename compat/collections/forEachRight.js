/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCreateCallback = require('../internals/baseCreateCallback'),
    baseEachRight = require('../internals/baseEachRight'),
    isArray = require('../objects/isArray');

/**
 * This method is like `_.forEach` except that it iterates over elements
 * of a `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @alias eachRight
 * @category Collections
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} [callback=identity] The function called per iteration.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {Array|Object|string} Returns `collection`.
 * @example
 *
 * _([1, 2, 3]).forEachRight(function(num) { console.log(num); }).join(',');
 * // => logs each number from right to left and returns '3,2,1'
 */
function forEachRight(collection, callback, thisArg) {
  if (callback && typeof thisArg == 'undefined' && isArray(collection)) {
    var length = collection.length;
    while (length--) {
      if (callback(collection[length], length, collection) === false) {
        break;
      }
    }
  } else {
    baseEachRight(collection, baseCreateCallback(callback, thisArg, 3));
  }
  return collection;
}

module.exports = forEachRight;
