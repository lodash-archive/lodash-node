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
    isPlainObject = require('../objects/isPlainObject');

/**
 * The base implementation of `_.merge` without argument juggling or support
 * for `this` binding.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {Function} [callback] The function to customize merging properties.
 * @param {Array} [stackA=[]] Tracks traversed source objects.
 * @param {Array} [stackB=[]] Associates values with source counterparts.
 */
function baseMerge(object, source, callback, stackA, stackB) {
  (isArray(source) ? arrayEach : baseForOwn)(source, function(srcValue, key, source) {
    var found,
        isArr,
        result = srcValue,
        value = object[key];

    if (srcValue && ((isArr = isArray(srcValue)) || isPlainObject(srcValue))) {
      // avoid merging previously merged cyclic sources
      var stackLength = stackA.length;
      while (stackLength--) {
        if ((found = stackA[stackLength] == srcValue)) {
          value = stackB[stackLength];
          break;
        }
      }
      if (!found) {
        var isShallow;
        if (callback) {
          result = callback(value, srcValue, key, object, source);
          if ((isShallow = typeof result != 'undefined')) {
            value = result;
          }
        }
        if (!isShallow) {
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
      }
    }
    else {
      if (callback) {
        result = callback(value, srcValue, key, object, source);
        if (typeof result == 'undefined') {
          result = srcValue;
        }
      }
      if (typeof result != 'undefined') {
        value = result;
      }
    }
    object[key] = value;
  });
}

module.exports = baseMerge;
