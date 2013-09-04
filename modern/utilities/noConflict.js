/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Used to restore the original `_` reference in `noConflict` */
var oldDash = global._;

/**
 * Reverts the '_' variable to its previous value and returns a reference to
 * the `lodash` function.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @returns {Function} Returns the `lodash` function.
 * @example
 *
 * var lodash = _.noConflict();
 */
function noConflict() {
  global._ = oldDash;
  return this;
}

module.exports = noConflict;
