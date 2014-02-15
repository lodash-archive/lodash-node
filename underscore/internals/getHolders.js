/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="node" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * Finds the indexes of all placeholder elements in a given array.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns a new array of placeholder indexes.
 */
function getHolders(array) {
  var index = -1,
      length = array.length,
      result = [];

  while (++index < length) {
    if (array[index] === lodash) {
      result.push(index);
    }
  }
  return result;
}

module.exports = getHolders;
