/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCallback = require('../internal/baseCallback'),
    baseForOwn = require('../internal/baseForOwn');

/**
 * Iterates over own enumerable properties of an object executing `iterator`
 * for each property. The `iterator` is bound to `thisArg` and invoked with
 * three arguments; (value, key, object). Iterator functions may exit iteration
 * early by explicitly returning `false`.
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
 * _.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(n, key) {
 *   console.log(key);
 * });
 * // => logs '0', '1', and 'length' (property order is not guaranteed across environments)
 */
function forOwn(object, iterator, thisArg) {
  if (typeof iterator != 'function' || typeof thisArg != 'undefined') {
    iterator = baseCallback(iterator, thisArg, 3);
  }
  return baseForOwn(object, iterator);
}

module.exports = forOwn;
