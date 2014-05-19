/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="node" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseForIn = require('./baseForIn');

/**
 * The base implementation of `_.pick` without support for `this` binding
 * and individual property name arguments.
 *
 * @private
 * @param {Object} object The source object.
 * @param {Function|string[]} predicate The function called per iteration or
 *  property names to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, predicate) {
  var result = {};

  if (typeof predicate == 'function') {
    baseForIn(object, function(value, key, object) {
      if (predicate(value, key, object)) {
        result[key] = value;
      }
    });
    return result;
  }
  var index = -1,
      props = predicate,
      length = props.length;

  while (++index < length) {
    var key = props[index];
    if (key in object) {
      result[key] = object[key];
    }
  }
  return result;
}

module.exports = basePick;
