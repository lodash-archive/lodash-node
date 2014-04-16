/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var find = require('./find'),
    matches = require('../utilities/matches');

/**
 * Performs a deep comparison between each element in `collection` and the
 * source object, returning the first element that has equivalent property
 * values.
 *
 * @static
 * @memberOf _
 * @category Collections
 * @param {Array|Object|string} collection The collection to search.
 * @param {Object} source The object of property values to match.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var characters = [
 *   { 'name': 'barney', 'age': 36, 'employer': 'slate' },
 *   { 'name': 'fred',   'age': 40, 'employer': 'slate' }
 * ];
 *
 * _.findWhere(characters, { 'employer': 'slate' });
 * // => { 'name': 'barney', 'age': 36, 'employer': 'slate' }
 *
 * _.findWhere(characters, { 'age': 40 });
 * // =>  { 'name': 'fred', 'age': 40, 'employer': 'slate' }
 */
function findWhere(collection, source) {
  return find(collection, matches(source));
}

module.exports = findWhere;
