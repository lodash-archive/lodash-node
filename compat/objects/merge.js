/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var arrayEach = require('../internals/arrayEach'),
    baseCreateCallback = require('../internals/baseCreateCallback'),
    baseForOwn = require('../internals/baseForOwn'),
    isArray = require('./isArray'),
    isPlainObject = require('./isPlainObject'),
    slice = require('../arrays/slice');

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

/**
 * Recursively merges own enumerable properties of the source object(s), that
 * don't resolve to `undefined` into the destination object. Subsequent sources
 * will overwrite property assignments of previous sources. If a callback is
 * provided it will be executed to produce the merged values of the destination
 * and source properties. If the callback returns `undefined` merging will
 * be handled by the method instead. The callback is bound to `thisArg` and
 * invoked with five arguments; (objectValue, sourceValue, key, object, source).
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @param {Function} [callback] The function to customize merging properties.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {Object} Returns the destination object.
 * @example
 *
 * var names = {
 *   'characters': [
 *     { 'name': 'barney' },
 *     { 'name': 'fred' }
 *   ]
 * };
 *
 * var ages = {
 *   'characters': [
 *     { 'age': 36 },
 *     { 'age': 40 }
 *   ]
 * };
 *
 * _.merge(names, ages);
 * // => { 'characters': [{ 'name': 'barney', 'age': 36 }, { 'name': 'fred', 'age': 40 }] }
 *
 * var food = {
 *   'fruits': ['apple'],
 *   'vegetables': ['beet']
 * };
 *
 * var otherFood = {
 *   'fruits': ['banana'],
 *   'vegetables': ['carrot']
 * };
 *
 * _.merge(food, otherFood, function(a, b) {
 *   return _.isArray(a) ? a.concat(b) : undefined;
 * });
 * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot] }
 */
function merge(object, source, guard) {
  var args = arguments,
      length = args.length,
      type = typeof guard;

  if (!object || length < 2) {
    return object;
  }
  // enables use as a callback for functions like `_.reduce`
  if ((type == 'number' || type == 'string') && args[3] && args[3][guard] === source) {
    length = 2;
  }
  // juggle arguments
  if (length > 3 && typeof args[length - 2] == 'function') {
    var callback = baseCreateCallback(args[--length - 1], args[length--], 2);
  } else if (length > 2 && typeof args[length - 1] == 'function') {
    callback = args[--length];
  }
  var sources = slice(args, 1, length),
      index = -1,
      stackA = [],
      stackB = [];

  while (++index < length) {
    baseMerge(object, sources[index], callback, stackA, stackB);
  }
  return object;
}

module.exports = merge;
