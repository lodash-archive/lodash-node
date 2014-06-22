/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var arrayEach = require('../internal/arrayEach'),
    baseForOwn = require('../internal/baseForOwn'),
    createAssigner = require('../internal/createAssigner'),
    isArray = require('./isArray'),
    isArrayLike = require('../internal/isArrayLike'),
    isPlainObject = require('./isPlainObject');

/**
 * The base implementation of `_.merge` without support for argument juggling,
 * multiple sources, and `this` binding.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {Function} [customizer] The function to customize merging properties.
 * @param {Array} [stackA=[]] Tracks traversed source objects.
 * @param {Array} [stackB=[]] Associates values with source counterparts.
 * @returns {Object} Returns the destination object.
 */
function baseMerge(object, source, customizer, stackA, stackB) {
  var isSrcArr = isArrayLike(source);
  (isSrcArr ? arrayEach : baseForOwn)(source, function(srcValue, key, source) {
    var isArr = srcValue && isArrayLike(srcValue),
        isObj = srcValue && isPlainObject(srcValue),
        value = object[key];

    if (!(isArr || isObj)) {
      result = customizer ? customizer(value, srcValue, key, object, source) : undefined;
      if (typeof result == 'undefined') {
        result = srcValue;
      }
      if (isSrcArr || typeof result != 'undefined') {
        object[key] = result;
      }
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
    var result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
        isShallow = typeof result != 'undefined';

    if (!isShallow) {
      result = isArr
        ? (isArray(value) ? value : [])
        : (isPlainObject(value) ? value : {});
    }
    // add the source value to the stack of traversed objects
    // and associate it with its merged value
    stackA.push(srcValue);
    stackB.push(result);

    // recursively merge objects and arrays (susceptible to call stack limits)
    if (!isShallow) {
      baseMerge(result, srcValue, customizer, stackA, stackB);
    }
    object[key] = result;
  });

  return object;
}

/**
 * Recursively merges own enumerable properties of the source object(s), that
 * don't resolve to `undefined` into the destination object. Subsequent sources
 * overwrite property assignments of previous sources. If `customizer` is
 * provided it is executed to produce the merged values of the destination
 * and source properties. If `customizer` returns `undefined` merging is handled
 * by the method instead. The `customizer` is bound to `thisArg` and invoked
 * with five arguments; (objectValue, sourceValue, key, object, source).
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @param {Function} [customizer] The function to customize merging properties.
 * @param {*} [thisArg] The `this` binding of `customizer`.
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
var merge = createAssigner(baseMerge);

module.exports = merge;
