/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="node" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * The base implementation of `compareAscending` used to compare values and
 * sort them in ascending order without guaranteeing a stable sort.
 *
 * @private
 * @param {*} value The value to compare to `other`.
 * @param {*} other The value to compare to `value`.
 * @returns {number} Returns the sort order indicator for `a`.
 */
function baseCompareAscending(value, other) {
  if (value !== other) {
    if (value > other || typeof value == 'undefined') {
      return 1;
    }
    if (value < other || typeof other == 'undefined') {
      return -1;
    }
  }
  return 0;
}

module.exports = baseCompareAscending;
