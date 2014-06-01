/**
 * Lo-Dash 2.5.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="node" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isFunction = require('./isFunction'),
    keysIn = require('./keysIn');

/**
 * The base implementation of `_.functions` which creates a sorted array of
 * function property names from those returned by `keysFunc`.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Array} Returns the new sorted array of property names.
 */
function baseFunctions(object, keysFunc) {
  var index = -1,
      props = keysFunc(object),
      length = props.length,
      result = [];

  while (++index < length) {
    var key = props[index];
    if (isFunction(object[key])) {
      result.push(key);
    }
  }
  return result.sort();
}

/**
 * Creates a sorted array of function property names from all enumerable
 * properties, own and inherited, of `object`.
 *
 * @static
 * @memberOf _
 * @alias methods
 * @category Objects
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns the new sorted array of property names.
 * @example
 *
 * _.functions(_);
 * // => ['all', 'any', 'bind', 'bindAll', 'clone', 'compact', 'compose', ...]
 */
function functions(object) {
  return baseFunctions(object, keysIn);
}

module.exports = functions;
