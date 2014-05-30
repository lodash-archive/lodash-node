/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var arrayEach = require('./arrayEach'),
    baseForOwn = require('./baseForOwn'),
    isArray = require('../objects/isArray'),
    isArrayLike = require('./isArrayLike'),
    isPlainObject = require('../objects/isPlainObject');

/**
 * The base implementation of `_.merge` without support for argument juggling,
 * multiple sources, and `this` binding.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {Function} [callback] The function to customize merging properties.
 * @param {Array} [stackA=[]] Tracks traversed source objects.
 * @param {Array} [stackB=[]] Associates values with source counterparts.
 * @returns {Object} Returns the destination object.
 */
function baseMerge(object, source, callback, stackA, stackB) {
  if (!object) {
    return object;
  }
  (isArrayLike(source) ? arrayEach : baseForOwn)(source, function(srcValue, key, source) {
    var isArr = srcValue && isArrayLike(srcValue),
        isObj = srcValue && isPlainObject(srcValue),
        value = object[key];

    if (!(isArr || isObj)) {
      result = callback ? callback(value, srcValue, key, object, source) : undefined;
      if (typeof result == 'undefined') {
        result = srcValue;
      }
      if (typeof result != 'undefined') {
        value = result;
      }
      object[key] = value;
      return;
    }
    // avoid merging previously merged cyclic sources
    stackA || (stackA = []);
    stackB || (stackB = []);

    var length = stackA.length;
    while (length--) {
      if (stackA[length] == srcValue) {
        object[key] = stackB[length];
        return;
      }
    }
    var result = callback ? callback(value, srcValue, key, object, source) : undefined,
        isShallow = typeof result != 'undefined';

    if (isShallow) {
      value = result;
    } else {
      value = isArr
        ? (isArray(value) ? value : [])
        : (isPlainObject(value) ? value : {});
    }
    // add `source` and associated `value` to the stack of traversed objects
    stackA.push(srcValue);
    stackB.push(value);

    // recursively merge objects and arrays (susceptible to call stack limits)
    if (!isShallow) {
      baseMerge(value, srcValue, callback, stackA, stackB);
    }
    object[key] = value;
  });

  return object;
}

module.exports = baseMerge;
