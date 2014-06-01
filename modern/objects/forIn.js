/**
 * Lo-Dash 2.5.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCreateCallback = require('../internals/baseCreateCallback'),
    baseFor = require('../internals/baseFor'),
    keysIn = require('./keysIn');

/**
 * Iterates over own and inherited enumerable properties of an object executing
 * the callback for each property. The callback is bound to `thisArg` and invoked
 * with three arguments; (value, key, object). Callbacks may exit iteration
 * early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The object to iterate over.
 * @param {Function} [callback=identity] The function called per iteration.
 * @param {*} [thisArg] The `this` binding of `callback`.
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
function forIn(object, callback, thisArg) {
  if (typeof callback != 'function' || typeof thisArg != 'undefined') {
    callback = baseCreateCallback(callback, thisArg, 3);
  }
  return baseFor(object, callback, keysIn);
}

module.exports = forIn;
