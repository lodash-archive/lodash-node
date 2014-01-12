/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isObject = require('./isObject'),
    keys = require('./keys');

/**
 * Assigns own enumerable properties of source object(s) to the destination
 * object for all destination properties that resolve to `undefined`. Once a
 * property is set, additional defaults of the same property will be ignored.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The destination object.
 * @param {...Object} [source] The source objects.
 * @param- {Object} [guard] Allows working with functions like `_.reduce`
 *   without using their `key` and `object` arguments as sources.
 * @returns {Object} Returns the destination object.
 * @example
 *
 * var object = { 'name': 'barney' };
 * _.defaults(object, { 'name': 'fred', 'employer': 'slate' });
 * // => { 'name': 'barney', 'employer': 'slate' }
 */
function defaults(object, source, guard) {
  var args = arguments,
      argsIndex = 0,
      argsLength = args.length,
      type = typeof guard;

  // allows working with functions like `_.reduce` without using their
  // `key` and `object` arguments as sources
  if ((type == 'number' || type == 'string') && args[3] && args[3][guard] === source) {
    argsLength = 2;
  }
  while (++argsIndex < argsLength) {
    source = args[argsIndex];
    if (isObject(source)) {
      var index = -1,
          props = keys(source),
          length = props.length;

      while (++index < length) {
        var key = props[index];
        if (typeof object[key] == 'undefined') {
          object[key] = source[key];
        }
      }
    }
  }
  return object;
}

module.exports = defaults;
