/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="node" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var createWrapper = require('./createWrapper');

/** Used to compose bitmasks for wrapper metadata */
var BIND_FLAG = 1;

/**
 * The base implementation of `_.bindAll` without support for individual
 * method name arguments.
 *
 * @private
 * @param {Object} object The object to bind and assign the bound methods to.
 * @param {string[]} methodNames The object method names to bind.
 * @returns {Object} Returns `object`.
 */
function baseBindAll(object, methodNames) {
  var index = -1,
      length = methodNames.length;

  while (++index < length) {
    var key = methodNames[index];
    object[key] = createWrapper(object[key], BIND_FLAG, null, object);
  }
  return object;
}

module.exports = baseBindAll;
