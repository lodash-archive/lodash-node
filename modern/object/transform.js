/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var arrayEach = require('../internal/arrayEach'),
    baseCreate = require('../internal/baseCreate'),
    baseForOwn = require('../internal/baseForOwn'),
    callback = require('../utility/callback'),
    isArrayLike = require('../internal/isArrayLike'),
    isObject = require('./isObject');

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable properties through `iterator`, with each execution potentially
 * mutating the `accumulator` object. The `iterator` is bound to `thisArg`
 * and invoked with four arguments; (accumulator, value, key, object). Iterator
 * functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Array|Object} object The object to iterate over.
 * @param {Function} [iterator=identity] The function called per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @param {*} [thisArg] The `this` binding of `iterator`.
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
function transform(object, iterator, accumulator, thisArg) {
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
  if (iterator) {
    iterator = callback(iterator, thisArg, 4);
    (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
      return iterator(accumulator, value, index, object);
    });
  }
  return accumulator;
}

module.exports = transform;
