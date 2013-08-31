/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isObject = require('../objects/isObject'),
    noop = require('./noop'),
    reNative = require('./reNative');

/** Used for native method references */
var objectProto = Object.prototype;

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeCreate = reNative.test(nativeCreate = Object.create) && nativeCreate;

/**
 * Creates a new object with the specified `prototype`.
 *
 * @private
 * @param {Object} prototype The prototype object.
 * @returns {Object} Returns the new object.
 */
function createObject(prototype) {
  return isObject(prototype) ? nativeCreate(prototype) : {};
}

module.exports = createObject;
