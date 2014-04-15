/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseIndexOf = require('../internals/baseIndexOf'),
    isArray = require('../objects/isArray'),
    isNative = require('../internals/isNative'),
    isString = require('../objects/isString'),
    values = require('../objects/values');

/** Used for native method references */
var stringProto = String.prototype;

/**
 * Used as the maximum length of an array-like object.
 * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
 * for more details.
 */
var maxSafeInteger = Math.pow(2, 53) - 1;

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeContains = isNative(nativeContains = stringProto.contains) && nativeContains,
    nativeMax = Math.max;

/**
 * Checks if a given value is present in a collection using strict equality
 * for comparisons, i.e. `===`. If `fromIndex` is negative, it is used as the
 * offset from the end of the collection.
 *
 * @static
 * @memberOf _
 * @alias include
 * @category Collections
 * @param {Array|Object|string} collection The collection to search.
 * @param {*} target The value to check for.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {boolean} Returns `true` if a matching element is found, else `false`.
 * @example
 *
 * _.contains([1, 2, 3], 1);
 * // => true
 *
 * _.contains([1, 2, 3], 1, 2);
 * // => false
 *
 * _.contains({ 'name': 'fred', 'age': 40 }, 'fred');
 * // => true
 *
 * _.contains('pebbles', 'eb');
 * // => true
 */
function contains(collection, target, fromIndex) {
  var length = collection ? collection.length : 0;
  if (!(typeof length == 'number' && length > -1 && length <= maxSafeInteger)) {
    collection = values(collection);
    length = collection.length;
  }
  if (typeof fromIndex == 'number') {
    fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
  } else {
    fromIndex = 0;
  }
  if (typeof collection == 'string' || !isArray(collection) && isString(collection)) {
    if (fromIndex >= length) {
      return false;
    }
    return nativeContains
      ? nativeContains.call(collection, target, fromIndex)
      : collection.indexOf(target, fromIndex) > -1;
  }
  var indexOf = baseIndexOf;
  return indexOf(collection, target, fromIndex) > -1;
}

module.exports = contains;
