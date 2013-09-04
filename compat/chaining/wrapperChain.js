/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * Enables method chaining on the wrapper object.
 *
 * @name chain
 * @memberOf _
 * @category Chaining
 * @returns {*} Returns the wrapper object.
 * @example
 *
 * var sum = _([1, 2, 3])
 *     .chain()
 *     .reduce(function(sum, num) { return sum + num; })
 *     .value()
 * // => 6`
 */
function wrapperChain() {
  this.__chain__ = true;
  return this;
}

module.exports = wrapperChain;
