/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="node" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseForIn = require('../internals/baseForIn'),
    isFunction = require('./isFunction');

/**
 * Creates a sorted array of property names of all enumerable properties,
 * own and inherited, of `object` that have function values.
 *
 * @static
 * @memberOf _
 * @alias methods
 * @category Objects
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns an array of property names that have function values.
 * @example
 *
 * _.functions(_);
 * // => ['all', 'any', 'bind', 'bindAll', 'clone', 'compact', 'compose', ...]
 */
function functions(object) {
  var result = [];
  baseForIn(object, function(value, key) {
    if (isFunction(value)) {
      result.push(key);
    }
  });
  return result.sort();
}

module.exports = functions;
