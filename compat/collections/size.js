/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var keys = require('../objects/keys');

/**
 * Used as the maximum length of an array-like object.
 * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
 * for more details.
 */
var maxSafeInteger = Math.pow(2, 53) - 1;

/**
 * Gets the size of the collection by returning `collection.length` for arrays
 * and array-like objects or the number of own enumerable properties for objects.
 *
 * @static
 * @memberOf _
 * @category Collections
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns `collection.length` or number of own enumerable properties.
 * @example
 *
 * _.size([1, 2]);
 * // => 2
 *
 * _.size({ 'one': 1, 'two': 2, 'three': 3 });
 * // => 3
 *
 * _.size('pebbles');
 * // => 7
 */
function size(collection) {
  var length = collection ? collection.length : 0;
  return (typeof length == 'number' && length > -1 && length <= maxSafeInteger)
    ? length
    : keys(collection).length;
}

module.exports = size;
