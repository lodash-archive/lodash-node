/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="node" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCreateWrapper = require('./baseCreateWrapper'),
    isFunction = require('../objects/isFunction'),
    slice = require('../arrays/slice');

/** Used to compose bitmasks for wrapper metadata */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    PARTIAL_FLAG = 16,
    PARTIAL_RIGHT_FLAG = 32;

/**
 * Creates a function that either curries or invokes `func` with an optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to reference.
 * @param {number} bitmask The bitmask of flags to compose.
 *  The bitmask may be composed of the following flags:
 *  1  - `_.bind`
 *  2  - `_.bindKey`
 *  4  - `_.curry`
 *  8  - `_.curry` (bound)
 *  16 - `_.partial`
 *  32 - `_.partialRight`
 * @param {number} [arity] The arity of `func`.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partialArgs] An array of arguments to prepend to those
 *  provided to the new function.
 * @param {Array} [partialRightArgs] An array of arguments to append to those
 *  provided to the new function.
 * @param {Array} [partialHolders] An array of `partialArgs` placeholder indexes.
 * @param {Array} [partialRightHolders] An array of `partialRightArgs` placeholder indexes.
 * @returns {Function} Returns the new function.
 */
function createWrapper(func, bitmask, arity, thisArg, partialArgs, partialRightArgs, partialHolders, partialRightHolders) {
  var isBind = bitmask & BIND_FLAG,
      isBindKey = bitmask & BIND_KEY_FLAG,
      isPartial = bitmask & PARTIAL_FLAG,
      isPartialRight = bitmask & PARTIAL_RIGHT_FLAG;

  if (!isFunction(func)) {
    throw new TypeError;
  }
  if (isPartial && !partialArgs.length) {
    bitmask &= ~PARTIAL_FLAG;
    isPartial = partialArgs = false;
  }
  if (isPartial) {
    partialHolders = [];
  }
  // fast path for `_.bind`
  var data = [func, bitmask, arity, thisArg, partialArgs, partialRightArgs, partialHolders, partialRightHolders];
  return baseCreateWrapper(data);
}

module.exports = createWrapper;
