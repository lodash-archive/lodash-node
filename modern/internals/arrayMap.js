/**
 * Lo-Dash 2.5.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * A specialized version of `_.map` for arrays without support for callback
 * shorthands or `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} callback The function called per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, callback) {
  var index = -1,
      length = array ? array.length >>> 0 : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = callback(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;
