/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * The base implementation of `compareAscending` used to compare values and
 * sort them in ascending order without guaranteeing a stable sort.
 *
 * @private
 * @param {*} a The value to compare to `b`.
 * @param {*} b The value to compare to `a`.
 * @returns {number} Returns the sort order indicator for `a`.
 */
function baseCompareAscending(a, b) {
  if (a !== b) {
    if (a > b || typeof a == 'undefined') {
      return 1;
    }
    if (a < b || typeof b == 'undefined') {
      return -1;
    }
  }
  return 0;
}

module.exports = baseCompareAscending;
