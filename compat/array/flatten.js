/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseFlatten = require('../internal/baseFlatten');

/**
 * Flattens a nested array. If `isDeep` is `true` the array is recursively
 * flattened, otherwise it is only flattened a single level.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to flatten.
 * @param {boolean} [isDeep=false] Specify a deep flatten.
 * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2], [3, [[4]]]]);
 * // => [1, 2, 3, [[4]]];
 *
 * // using `isDeep`
 * _.flatten([1, [2], [3, [[4]]]], true);
 * // => [1, 2, 3, 4];
 */
function flatten(array, isDeep, guard) {
  var length = array ? array.length : 0;
  if (!length) {
    return [];
  }
  // enables use as a callback for functions like `_.map`
  var type = typeof isDeep;
  if ((type == 'number' || type == 'string') && guard && guard[isDeep] === array) {
    isDeep = false;
  }
  return baseFlatten(array, isDeep);
}

module.exports = flatten;
