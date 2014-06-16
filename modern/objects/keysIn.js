/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isArguments = require('./isArguments'),
    isArray = require('./isArray'),
    isObject = require('./isObject'),
    support = require('../support');

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Shape() {
 *   this.x = 0;
 *   this.y = 0;
 * }
 *
 * Shape.prototype.z = 0;
 *
 * _.keysIn(new Shape);
 * // => ['x', 'y', 'z'] (property order is not guaranteed across environments)
 */
function keysIn(object) {
  if (!isObject(object)) {
    return [];
  }
  var length = object.length;
  length = (typeof length == 'number' && length > 0 &&
    (isArray(object) || (support.nonEnumArgs && isArguments(object))) && length) >>> 0;

  var keyIndex,
      Ctor = object.constructor,
      index = -1,
      isProto = Ctor && object === Ctor.prototype,
      maxIndex = length - 1,
      result = Array(length),
      skipIndexes = length > 0;

  while (++index < length) {
    result[index] = String(index);
  }
  for (var key in object) {
    if (!(isProto && key == 'constructor') &&
        !(skipIndexes && (keyIndex = +key, keyIndex > -1 && keyIndex <= maxIndex && keyIndex % 1 == 0))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = keysIn;
