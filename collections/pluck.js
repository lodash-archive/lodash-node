/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var map = require('./map');

/**
 * Retrieves the value of a specified property from all elements in the `collection`.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Collections
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {string} property The property to pluck.
 * @returns {Array} Returns a new array of property values.
 * @example
 *
 * var stooges = [
 *   { 'name': 'moe', 'age': 40 },
 *   { 'name': 'larry', 'age': 50 }
 * ];
 *
 * _.pluck(stooges, 'name');
 * // => ['moe', 'larry']
 */
function pluck(collection, property) {
  var index = -1,
      length = collection ? collection.length : 0;

  if (typeof length == 'number') {
    var result = Array(length);
    while (++index < length) {
      result[index] = collection[index][property];
    }
  }
  return result || map(collection, property);
}

module.exports = pluck;
