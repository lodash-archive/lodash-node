/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="node" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var arrayMap = require('../internal/arrayMap'),
    baseDifference = require('../internal/baseDifference'),
    baseFlatten = require('../internal/baseFlatten'),
    basePick = require('../internal/basePick'),
    keysIn = require('./keysIn');

/**
 * Creates a shallow clone of `object` excluding the specified properties.
 * Property names may be specified as individual arguments or as arrays of
 * property names. If a predicate is provided it is executed for each property
 * of `object` omitting the properties the predicate returns truthy for. The
 * predicate is bound to `thisArg` and invoked with three arguments;
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {Function|...(string|string[])} [predicate] The function called per
 *  iteration or property names to omit, specified as individual property
 *  names or arrays of property names.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.omit({ 'name': 'fred', 'age': 40 }, 'age');
 * // => { 'name': 'fred' }
 *
 * _.omit({ 'name': 'fred', 'age': 40 }, function(value) {
 *   return typeof value == 'number';
 * });
 * // => { 'name': 'fred' }
 */
function omit(object) {
  if (object == null) {
    return {};
  }
  var omitProps = baseFlatten(arguments, false, false, 1);
  return basePick(Object(object), baseDifference(keysIn(object), arrayMap(omitProps, String)));
}

module.exports = omit;
