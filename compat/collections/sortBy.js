/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseEach = require('../internals/baseEach'),
    createCallback = require('../functions/createCallback'),
    isArray = require('../objects/isArray');

/**
 * The base implementation of `compareAscending` used to compare values and
 * sort them in ascending order without guaranteeing a stable sort.
 *
 * @private
 * @param {*} value The value to compare to `other`.
 * @param {*} other The value to compare to `value`.
 * @returns {number} Returns the sort order indicator for `a`.
 */
function baseCompareAscending(value, other) {
  if (value !== other) {
    if (value > other || typeof value == 'undefined') {
      return 1;
    }
    if (value < other || typeof other == 'undefined') {
      return -1;
    }
  }
  return 0;
}

/**
 * Used by `_.sortBy` to compare transformed elements of a collection and stable
 * sort them in ascending order.
 *
 * @private
 * @param {Object} value The object to compare to `other`.
 * @param {Object} other The object to compare to `object`.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareAscending(object, other) {
  return baseCompareAscending(object.criteria, other.criteria) || object.index - other.index;
}

/**
 * Used by `_.sortBy` to compare multiple properties of each element in a
 * collection and stable sort them in ascending order.
 *
 * @private
 * @param {Object} value The object to compare to `other`.
 * @param {Object} other The object to compare to `object`.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultipleAscending(object, other) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length;

  while (++index < length) {
    var result = baseCompareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      return result;
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provided the same value
  // for `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://code.google.com/p/v8/issues/detail?id=90
  return object.index - other.index;
}

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection through the callback. This method
 * performs a stable sort, that is, it will preserve the original sort order
 * of equal elements. The callback is bound to `thisArg` and invoked with
 * three arguments; (value, index|key, collection).
 *
 * If a property name is provided for `callback` the created "_.pluck" style
 * callback will return the property value of the given element.
 *
 * If an array of property names is provided for `callback` the collection
 * will be sorted by each property value.
 *
 * If an object is provided for `callback` the created "_.where" style callback
 * will return `true` for elements that have the properties of the given object,
 * else `false`.
 *
 * @static
 * @memberOf _
 * @category Collections
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Array|Function|Object|string} [callback=identity] The function
 *  called per iteration. If a property name or object is provided it will
 *  be used to create a "_.pluck" or "_.where" style callback respectively.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * _.sortBy([1, 2, 3], function(num) { return Math.sin(num); });
 * // => [3, 1, 2]
 *
 * _.sortBy([1, 2, 3], function(num) { return this.sin(num); }, Math);
 * // => [3, 1, 2]
 *
 * var characters = [
 *   { 'name': 'barney',  'age': 36 },
 *   { 'name': 'fred',    'age': 40 },
 *   { 'name': 'barney',  'age': 26 },
 *   { 'name': 'fred',    'age': 30 }
 * ];
 *
 * // using "_.pluck" callback shorthand
 * _.map(_.sortBy(characters, 'age'), _.values);
 * // => [['barney', 26], ['fred', 30], ['barney', 36], ['fred', 40]]
 *
 * // sorting by multiple properties
 * _.map(_.sortBy(characters, ['name', 'age']), _.values);
 * // = > [['barney', 26], ['barney', 36], ['fred', 30], ['fred', 40]]
 */
function sortBy(collection, callback, thisArg) {
  var index = -1,
      length = collection && collection.length,
      multi = callback && isArray(callback),
      result = Array(length < 0 ? 0 : length >>> 0);

  if (!multi) {
    callback = createCallback(callback, thisArg, 3);
  }
  baseEach(collection, function(value, key, collection) {
    if (multi) {
      var length = callback.length,
          criteria = Array(length);

      while (length--) {
        criteria[length] = value[callback[length]];
      }
    } else {
      criteria = callback(value, key, collection);
    }
    result[++index] = { 'criteria': criteria, 'index': index, 'value': value };
  });

  length = result.length;
  result.sort(multi ? compareMultipleAscending : compareAscending);
  while (length--) {
    result[length] = result[length].value;
  }
  return result;
}

module.exports = sortBy;
