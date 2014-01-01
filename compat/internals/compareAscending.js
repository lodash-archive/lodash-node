/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCompareAscending = require('./baseCompareAscending');

/**
 * Used by `sortBy` to compare transformed elements of a collection and stable
 * sort them in ascending order.
 *
 * @private
 * @param {Object} a The object to compare to `b`.
 * @param {Object} b The object to compare to `a`.
 * @returns {number} Returns the sort order indicator for `a`.
 */
function compareAscending(a, b) {
  return baseCompareAscending(a.criteria, b.criteria) || a.index - b.index;
}

module.exports = compareAscending;
