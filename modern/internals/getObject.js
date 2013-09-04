/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var objectPool = require('./objectPool');

/**
 * Gets an object from the object pool or creates a new one if the pool is empty.
 *
 * @private
 * @returns {Object} The object from the pool.
 */
function getObject() {
  return objectPool.pop() || {
    'array': null,
    'cache': null,
    'configurable': false,
    'criteria': null,
    'enumerable': false,
    'false': false,
    'index': 0,
    'leading': false,
    'maxWait': 0,
    'null': false,
    'number': null,
    'object': null,
    'push': null,
    'string': null,
    'trailing': false,
    'true': false,
    'undefined': false,
    'value': null,
    'writable': false
  };
}

module.exports = getObject;
