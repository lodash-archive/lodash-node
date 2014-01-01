/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCreateCallback = require('./baseCreateCallback'),
    forOwn = require('../objects/forOwn'),
    isString = require('../objects/isString'),
    support = require('../support');

/**
 * Iterates `arguments` objects, arrays, objects, and strings consistently
 * across environments, executing the callback for each element in the
 * collection. The callback is bound to `thisArg` and invoked with three
 * arguments; (value, index|key, collection). Callbacks may exit iteration
 * early by explicitly returning `false`.
 *
 * @private
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} [callback=identity] The function called per iteration.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {Array|Object|string} Returns `collection`.
 */
function baseEach(collection, callback, thisArg) {
  var index = -1,
      iterable = collection,
      length = collection ? collection.length : 0;

  callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
  if (typeof length == 'number') {
    if (support.unindexedChars && isString(iterable)) {
      iterable = iterable.split('');
    }
    while (++index < length) {
      if (callback(iterable[index], index, collection) === false) {
        break;
      }
    }
  } else {
    forOwn(collection, callback);
  }
  return collection;
}

module.exports = baseEach;
