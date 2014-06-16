/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * The base implementation of `_.at` without support for strings and
 * individual key arguments.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {number[]|string[]} [props] The keys of elements to pick.
 * @returns {Array} Returns the new array of picked elements.
 */
function baseAt(collection, props) {
  var index = -1,
      length = props.length,
      result = Array(length);

  while(++index < length) {
    result[index] = collection[props[index]];
  }
  return result;
}

module.exports = baseAt;
