/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseAt = require('../internals/baseAt'),
    baseFlatten = require('../internals/baseFlatten'),
    isString = require('../objects/isString'),
    support = require('../support');

/**
 * Creates an array of elements corresponding to the specified keys, or indexes,
 * of the collection. Keys may be specified as individual arguments or as arrays
 * of keys.
 *
 * @static
 * @memberOf _
 * @category Collections
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {...(number|number[]|string|string[])} [keys] The keys of elements
 *  to pick, specified as individual keys or arrays of keys.
 * @returns {Array} Returns the new array of picked elements.
 * @example
 *
 * _.at(['a', 'b', 'c', 'd', 'e'], [0, 2, 4]);
 * // => ['a', 'c', 'e']
 *
 * _.at(['fred', 'barney', 'pebbles'], 0, 2);
 * // => ['fred', 'pebbles']
 */
function at(collection) {
  if (support.unindexedChars && isString(collection)) {
    collection = collection.split('');
  }
  return baseAt(collection, baseFlatten(arguments, true, false, 1));
}

module.exports = at;
