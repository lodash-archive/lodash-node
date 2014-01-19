/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isNative = require('./isNative');

/** Native method shortcuts */
var Set = isNative(Set = global.Set) && Set;

/**
 * Creates a cache object to optimize linear searches of large arrays.
 *
 * @private
 * @param {Array} [array=[]] The array to search.
 * @returns {Object} Returns the cache object.
 */
var createCache = Set && function(array) {
  var cache = new Set,
      length = array ? array.length : 0;

  cache.push = cache.add;
  while (length--) {
    cache.push(array[length]);
  }
  return cache;
};

module.exports = createCache;
