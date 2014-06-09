/**
 * Lo-Dash 2.5.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var arrayEach = require('../internals/arrayEach'),
    baseCreate = require('../internals/baseCreate'),
    baseForOwn = require('../internals/baseForOwn'),
    createCallback = require('../functions/createCallback'),
    isArrayLike = require('../internals/isArrayLike'),
    isObject = require('./isObject');

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable properties through a callback, with each callback execution
 * potentially mutating the `accumulator` object. The callback is bound to
 * `thisArg` and invoked with four arguments; (accumulator, value, key, object).
 * Callbacks may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Array|Object} object The object to iterate over.
 * @param {Function} [callback=identity] The function called per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * var squares = _.transform([1, 2, 3, 4, 5, 6], function(result, n) {
 *   n *= n;
 *   if (n % 2) {
 *     return result.push(n) < 3;
 *   }
 * });
 * // => [1, 9, 25]
 *
 * var mapped = _.transform({ 'a': 1, 'b': 2, 'c': 3 }, function(result, n, key) {
 *   result[key] = n * 3;
 * });
 * // => { 'a': 3, 'b': 6, 'c': 9 }
 */
function transform(object, callback, accumulator, thisArg) {
  var isArr = isArrayLike(object);
  if (accumulator == null) {
    if (isArr) {
      accumulator = [];
    } else {
      if (isObject(object)) {
        var Ctor = object.constructor,
            proto = Ctor && Ctor.prototype;
      }
      accumulator = baseCreate(proto);
    }
  }
  if (callback) {
    callback = createCallback(callback, thisArg, 4);
    (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
      return callback(accumulator, value, index, object);
    });
  }
  return accumulator;
}

module.exports = transform;
