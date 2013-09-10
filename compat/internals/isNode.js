/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * Checks if `value` is a DOM node in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the `value` is a DOM node, else `false`.
 */
function isNode(value) {
  // IE < 9 presents DOM nodes as `Object` objects except they have `toString`
  // methods that are `typeof` "string" and still can coerce nodes to strings
  return typeof value.toString != 'function' && typeof (value + '') == 'string';
}

module.exports = isNode;
