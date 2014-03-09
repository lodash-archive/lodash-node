/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * Produces the result of coercing the wrapped value to a string.
 *
 * @name toString
 * @memberOf _
 * @category Chaining
 * @returns {string} Returns the coerced string value.
 * @example
 *
 * _([1, 2, 3]).toString();
 * // => '1,2,3'
 */
function wrapperToString() {
  return String(this.__wrapped__);
}

module.exports = wrapperToString;
