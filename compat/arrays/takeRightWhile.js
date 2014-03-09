/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var last = require('./last');

/**
 * Creates a slice of `array` with elements taken from the end. Elements will
 * be taken until the predicate returns falsey. The predicate is bound to
 * `thisArg` and invoked with three arguments; (value, index, array).
 *
 * If a property name is provided for `predicate` the created "_.pluck" style
 * callback will return the property value of the given element.
 *
 * If an object is provided for `predicate` the created "_.where" style callback
 * will return `true` for elements that have the properties of the given object,
 * else `false`.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Arrays
 * @param {Array} array The array to query.
 * @param {Function|Object|string} [predicate=identity] The function called
 *  per element.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.takeRightWhile([1, 2, 3], function(num) {
 *   return num > 1;
 * });
 * // => [2, 3]
 *
 * var characters = [
 *   { 'name': 'barney',  'employer': 'slate' },
 *   { 'name': 'fred',    'employer': 'slate', 'blocked': true },
 *   { 'name': 'pebbles', 'employer': 'na',    'blocked': true }
 * ];
 *
 * // using "_.pluck" callback shorthand
 * _.pluck(_.takeRightWhile(characters, 'blocked'), 'name');
 * // => ['fred', 'pebbles']
 *
 * // using "_.where" callback shorthand
 * _.pluck(_.takeRightWhile(characters, { 'employer': 'na' }), 'name');
 * // => ['pebbles']
 */
var takeRightWhile = last;

module.exports = takeRightWhile;
