/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="node" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseEach = require('../internal/baseEach'),
    callback = require('../utility/callback');

/**
 * Used as the maximum length of an array-like object.
 * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
 * for more details.
 */
var maxSafeInteger = Math.pow(2, 53) - 1;

/**
 * Retrieves the minimum value of a collection. If the collection is empty
 * or falsey `Infinity` is returned. If an iterator function is provided it
 * is executed for each value in the collection to generate the criterion by
 * which the value is ranked. The `iterator` is bound to `thisArg` and invoked
 * with three arguments; (value, index, collection).
 *
 * If a property name is provided for `iterator` the created "_.pluck" style
 * callback returns the property value of the given element.
 *
 * If an object is provided for `iterator` the created "_.where" style callback
 * returns `true` for elements that have the properties of the given object,
 * else `false`.
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function|Object|string} [iterator] The function called per iteration.
 *  If a property name or object is provided it is used to create a "_.pluck"
 *  or "_.where" style callback respectively.
 * @param {*} [thisArg] The `this` binding of `iterator`.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * _.min([4, 2, 8, 6]);
 * // => 2
 *
 * _.min([]);
 * // => Infinity
 *
 * var characters = [
 *   { 'name': 'barney', 'age': 36 },
 *   { 'name': 'fred',   'age': 40 }
 * ];
 *
 * _.min(characters, function(chr) { return chr.age; });
 * // => { 'name': 'barney', 'age': 36 };
 *
 * // using "_.pluck" callback shorthand
 * _.min(characters, 'age');
 * // => { 'name': 'barney', 'age': 36 };
 */
function min(collection, iterator, thisArg) {
  var computed = Infinity,
      result = computed,
      type = typeof iterator;

  // enables use as a callback for functions like `_.map`
  if ((type == 'number' || type == 'string') && thisArg && thisArg[iterator] === collection) {
    iterator = null;
  }
  var index = -1,
      length = collection ? collection.length : 0;

  if (iterator == null && typeof length == 'number' && length > -1 && length <= maxSafeInteger) {
    while (++index < length) {
      var value = collection[index];
      if (value < result) {
        result = value;
      }
    }
  } else {
    iterator = callback(iterator, thisArg, 3);

    baseEach(collection, function(value, index, collection) {
      var current = iterator(value, index, collection);
      if (current < computed || (current === Infinity && current === result)) {
        computed = current;
        result = value;
      }
    });
  }
  return result;
}

module.exports = min;
