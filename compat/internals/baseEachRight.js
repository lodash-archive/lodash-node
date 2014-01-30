/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseForOwnRight = require('./baseForOwnRight'),
    isString = require('../objects/isString'),
    support = require('../support');

/**
 * The base implementation of `_.forEachEach` without support for callback
 * shorthands or `thisArg` binding.
 *
 * @private
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} callback The function called per iteration.
 * @returns {Array|Object|string} Returns `collection`.
 */
function baseEachRight(collection, callback) {
  var iterable = collection,
      length = collection ? collection.length : 0;

  if (typeof length == 'number') {
    if (support.unindexedChars && isString(iterable)) {
      iterable = iterable.split('');
    }
    while (length--) {
      if (callback(iterable[length], length, collection) === false) {
        break;
      }
    }
  } else {
    baseForOwnRight(collection, callback);
  }
  return collection;
}

module.exports = baseEachRight;
