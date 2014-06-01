/**
 * Lo-Dash 2.5.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isFunction = require('../objects/isFunction');

/**
 * Resolves the value of property `key` on `object`. If `key` is a function
 * it is invoked with the `this` binding of `object` and its result returned,
 * else the property value is returned. If `object` is `null` or `undefined`
 * then `undefined` is returned. If a default value is provided it is returned
 * if the property value resolves to `undefined`.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @param {Object} object The object to inspect.
 * @param {string} key The name of the property to resolve.
 * @param {*} [defaultValue] The value returned if the property value
 *  resolves to `undefined`.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = {
 *   'name': 'fred',
 *   'age': function() {
 *     return 40;
 *   }
 * };
 *
 * _.result(object, 'name');
 * // => 'fred'
 *
 * _.result(object, 'age');
 * // => 40
 *
 * _.result(object, 'employer', 'slate');
 * // => 'slate'
 */
function result(object, key, defaultValue) {
  var value = object == null ? undefined : object[key];
  if (typeof value == 'undefined') {
    return defaultValue;
  }
  return isFunction(value) ? object[key]() : value;
}

module.exports = result;
