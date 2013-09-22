/**
 * Lo-Dash 2.1.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
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
    'args': '',
    'array': null,
    'bottom': '',
    'cache': null,
    'configurable': false,
    'criteria': null,
    'enumerable': false,
    'false': false,
    'firstArg': '',
    'index': 0,
    'init': '',
    'keys': null,
    'leading': false,
    'loop': '',
    'maxWait': 0,
    'null': false,
    'number': null,
    'object': null,
    'push': null,
    'shadowedProps': null,
    'string': null,
    'top': '',
    'trailing': false,
    'true': false,
    'undefined': false,
    'useHas': false,
    'value': null,
    'writable': false
  };
}

module.exports = getObject;
