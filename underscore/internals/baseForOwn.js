/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="node" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var keys = require('../objects/keys');

/** Used as the semantic version number */
var version = '2.4.1';

/** Used as the property name for wrapper metadata */
var expando = '__lodash@' + version + '__';

/** Used by methods to exit iteration */
var breakIndicator = expando + 'breaker__';

/**
 * The base implementation of `_.forOwn` without support for callback
 * shorthands or `thisArg` binding.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} callback The function called per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, callback) {
  var index = -1,
      props = keys(object),
      length = props.length;

  while (++index < length) {
    var key = props[index];
    if (callback(object[key], key, object) === breakIndicator) {
      break;
    }
  }
  return object;
}

module.exports = baseForOwn;
