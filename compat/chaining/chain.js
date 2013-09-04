/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var lodashWrapper = require('../internals/lodashWrapper');

/**
 * Creates a `lodash` object that wraps the given `value`.
 *
 * @static
 * @memberOf _
 * @category Chaining
 * @param {*} value The value to wrap.
 * @returns {Object} Returns the wrapper object.
 * @example
 *
 * var stooges = [
 *   { 'name': 'moe', 'age': 40 },
 *   { 'name': 'larry', 'age': 50 },
 *   { 'name': 'curly', 'age': 60 }
 * ];
 *
 * var youngest = _.chain(stooges)
 *     .sortBy(function(stooge) { return stooge.age; })
 *     .map(function(stooge) { return stooge.name + ' is ' + stooge.age; })
 *     .first();
 * // => 'moe is 40'
 */
function chain(value) {
  value = new lodashWrapper(value);
  value.__chain__ = true;
  return value;
}

module.exports = chain;
