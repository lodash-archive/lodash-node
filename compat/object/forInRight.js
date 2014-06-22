/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCallback = require('../internal/baseCallback'),
    baseForRight = require('../internal/baseForRight'),
    keysIn = require('./keysIn');

/**
 * This method is like `_.forIn` except that it iterates over elements of a
 * collection in the opposite order.
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
 * _.forInRight(new Shape, function(value, key) {
 *   console.log(key);
 * });
 * // => logs 'z', 'y', and 'x' assuming `_.forIn ` logs 'x', 'y', and 'z'
 */
function forInRight(object, iterator, thisArg) {
  iterator = baseCallback(iterator, thisArg, 3);
  return baseForRight(object, iterator, keysIn);
}

module.exports = forInRight;
