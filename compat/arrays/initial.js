/**
 * Lo-Dash 2.5.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var createCallback = require('../functions/createCallback'),
    slice = require('./slice');

/**
 * Gets all but the last element of `array`.
 *
 * Note: The `n` and `predicate` arguments are deprecated; replace with
 * `_.dropRight` and `_.dropRightWhile` respectively.
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.initial([1, 2, 3]);
 * // => [1, 2]
 */
function initial(array, predicate, thisArg) {
  var length = array ? array.length : 0;

  if (typeof predicate != 'number' && predicate != null) {
    var index = length,
        n = 0;

    predicate = createCallback(predicate, thisArg, 3);
    while (index-- && predicate(array[index], index, array)) {
      n++;
    }
  } else {
    n = (predicate == null || thisArg) ? 1 : predicate;
  }
  n = length - (n || 0);
  return slice(array, 0, n < 0 ? 0 : n);
}

module.exports = initial;
