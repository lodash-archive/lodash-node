/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var forEach = require('../collections/forEach');

/**
 * Extracts the wrapped value.
 *
 * @name valueOf
 * @memberOf _
 * @alias value
 * @category Chaining
 * @returns {*} Returns the wrapped value.
 * @example
 *
 * _([1, 2, 3]).valueOf();
 * // => [1, 2, 3]
 */
function wrapperValueOf() {
  return this.__wrapped__;
}

module.exports = wrapperValueOf;
