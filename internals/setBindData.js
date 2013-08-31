/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var getObject = require('./getObject'),
    reNative = require('./reNative'),
    releaseObject = require('./releaseObject');

/** Used for native method references */
var objectProto = Object.prototype;

var defineProperty = (function() {
  try {
    var o = {},
        func = reNative.test(func = Object.defineProperty) && func,
        result = func(o, o, o) && func;
  } catch(e) { }
  return result;
}());

/**
 * Sets `this` binding data on a given function.
 *
 * @private
 * @param {Function} func The function to set data on.
 * @param {*} value The value to set.
 */
var setBindData = !defineProperty ? noop : function(func, value) {
  var descriptor = getObject();
  descriptor.value = value;
  defineProperty(func, '__bindData__', descriptor);
  releaseObject(descriptor);
};

module.exports = setBindData;
