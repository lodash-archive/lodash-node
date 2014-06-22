/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var callback = require('../utility/callback'),
    slice = require('./slice');

/**
 * Creates a slice of `array` excluding elements dropped from the end.
 * Elements are dropped until the predicate returns falsey. The predicate is
 * bound to `thisArg` and invoked with three arguments; (value, index, array).
 *
 * If a property name is provided for `predicate` the created "_.pluck" style
 * callback returns the property value of the given element.
 *
 * If an object is provided for `predicate` the created "_.where" style callback
 * returns `true` for elements that have the properties of the given object,
 * else `false`.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function|Object|string} [predicate=identity] The function called
 *  per element.
 * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.dropRightWhile([1, 2, 3], function(n) { return n > 1; });
 * // => [1]
 *
 * var characters = [
 *   { 'name': 'barney',  'employer': 'slate' },
 *   { 'name': 'fred',    'employer': 'slate', 'blocked': true },
 *   { 'name': 'pebbles', 'employer': 'na',    'blocked': true }
 * ];
 *
 * // using "_.pluck" callback shorthand
 * _.pluck(_.dropRightWhile(characters, 'blocked'), 'name');
 * // => ['barney']
 *
 * // using "_.where" callback shorthand
 * _.pluck(_.dropRightWhile(characters, { 'employer': 'na' }), 'name');
 * // => ['barney', 'fred']
 */
function dropRightWhile(array, predicate, thisArg) {
  var length = array ? array.length : 0,
      index = length,
      n = 0;

  predicate = callback(predicate, thisArg, 3);
  while (index-- && predicate(array[index], index, array)) {
    n++;
  }
  n = length - (n || 0);
  return slice(array, 0, n < 0 ? 0 : n);
}

module.exports = dropRightWhile;
