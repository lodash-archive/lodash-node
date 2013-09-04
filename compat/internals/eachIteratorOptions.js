/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var keys = require('../objects/keys');

/** Reusable iterator options shared by `each`, `forIn`, and `forOwn` */
var eachIteratorOptions = {
  'args': 'collection, callback, thisArg',
  'top': "callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",
  'array': "typeof length == 'number'",
  'keys': keys,
  'loop': 'if (callback(iterable[index], index, collection) === false) return result'
};

module.exports = eachIteratorOptions;
