/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseEach = require('../internals/baseEach'),
    createCallback = require('../functions/createCallback'),
    isArray = require('../objects/isArray');

/** Used as the max size of the `arrayPool` and `objectPool` */
var MAX_POOL_SIZE = 40;

/** Used to pool arrays and objects used internally */
var objectPool = [];

/**
 * The base implementation of `compareAscending` used to compare values and
 * sort them in ascending order without guaranteeing a stable sort.
 *
 * @private
 * @param {*} a The value to compare to `b`.
 * @param {*} b The value to compare to `a`.
 * @returns {number} Returns the sort order indicator for `a`.
 */
function baseCompareAscending(a, b) {
  if (a !== b) {
    if (a > b || typeof a == 'undefined') {
      return 1;
    }
    if (a < b || typeof b == 'undefined') {
      return -1;
    }
  }
  return 0;
}

/**
 * Used by `sortBy` to compare transformed elements of a collection and stable
 * sort them in ascending order.
 *
 * @private
 * @param {Object} a The object to compare to `b`.
 * @param {Object} b The object to compare to `a`.
 * @returns {number} Returns the sort order indicator for `a`.
 */
function compareAscending(a, b) {
  return baseCompareAscending(a.criteria, b.criteria) || a.index - b.index;
}

/**
 * Used by `sortBy` to compare multiple properties of each element in a
 * collection and stable sort them in ascending order.
 *
 * @private
 * @param {Object} a The object to compare to `b`.
 * @param {Object} b The object to compare to `a`.
 * @returns {number} Returns the sort order indicator for `a`.
 */
function compareMultipleAscending(a, b) {
  var ac = a.criteria,
      bc = b.criteria,
      index = -1,
      length = ac.length;

  while (++index < length) {
    var result = baseCompareAscending(ac[index], bc[index]);
    if (result) {
      return result;
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provided the same value
  // for `a` and `b`. See https://github.com/jashkenas/underscore/pull/1247
  //
  // This also ensures a stable sort in V8 and other engines.
  // See http://code.google.com/p/v8/issues/detail?id=90
  return a.index - b.index;
}

/**
 * Gets an object from the object pool or creates a new one if the pool is empty.
 *
 * @private
 * @returns {Object} The object from the pool.
 */
function getObject() {
  return objectPool.pop() || {
    'criteria': null,
    'index': 0,
    'value': null
  };
}

/**
 * Releases `object` back to the object pool.
 *
 * @private
 * @param {Object} object The object to release.
 */
function releaseObject(object) {
  object.criteria = object.value = null;
  if (objectPool.length < MAX_POOL_SIZE) {
    objectPool.push(object);
  }
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
 * @param {Array|Function|Object|string} [callback=identity] The function called
 *  per iteration. If a property name or object is provided it will be used
 *  to create a "_.pluck" or "_.where" style callback, respectively.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {Array} Returns a new array of sorted elements.
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
      multi = callback && isArray(callback),
      length = collection ? collection.length : 0,
      result = Array(typeof length == 'number' ? length : 0);

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
    var object = result[++index] = getObject();
    object.criteria = criteria;
    object.index = index;
    object.value = value;
  });

  length = result.length;
  result.sort(multi ? compareMultipleAscending : compareAscending);
  while (length--) {
    var object = result[length];
    result[length] = object.value;
    releaseObject(object);
  }
  return result;
}

module.exports = sortBy;
