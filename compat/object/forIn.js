/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCallback = require('../internal/baseCallback'),
    baseFor = require('../internal/baseFor'),
    keysIn = require('./keysIn');

/**
 * Iterates over own and inherited enumerable properties of an object executing
 * `iterator` for each property. The `iterator` is bound to `thisArg` and invoked
 * with three arguments; (value, key, object). Iterator functions may exit
 * iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iterator=identity] The function called per iteration.
 * @param {*} [thisArg] The `this` binding of `iterator`.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function Shape() {
 *   this.x = 0;
 *   this.y = 0;
 * }
 *
 * Shape.prototype.z = 0;
 *
 * _.forIn(new Shape, function(value, key) {
 *   console.log(key);
 * });
 * // => logs 'x', 'y', and 'z' (property order is not guaranteed across environments)
 */
function forIn(object, iterator, thisArg) {
  if (typeof iterator != 'function' || typeof thisArg != 'undefined') {
    iterator = baseCallback(iterator, thisArg, 3);
  }
  return baseFor(object, iterator, keysIn);
}

module.exports = forIn;
