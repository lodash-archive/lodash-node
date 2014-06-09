/**
 * Lo-Dash 2.5.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var bind = require('../functions/bind'),
    identity = require('../utilities/identity'),
    setData = require('./setData'),
    support = require('../support');

/** Used to compose bitmasks for wrapper metadata */
var BIND_FLAG = 1;

/** Used as the semantic version number */
var version = '2.5.0-pre';

/** Used as the property name for wrapper metadata */
var expando = '__lodash@' + version + '__';

/** Used to detected named functions */
var reFuncName = /^\s*function[ \n\r\t]+\w/;

/** Used to detect functions containing a `this` reference */
var reThis = /\bthis\b/;

/** Used to resolve the decompiled source of functions */
var fnToString = Function.prototype.toString;

/**
 * The base implementation of `_.createCallback` without support for creating
 * "_.pluck" and "_.where" style callbacks.
 *
 * @private
 * @param {*} [func=identity] The value to convert to a callback.
 * @param {*} [thisArg] The `this` binding of the created callback.
 * @param {number} [argCount] The number of arguments the callback accepts.
 * @returns {Function} Returns the new function.
 */
function baseCreateCallback(func, thisArg, argCount) {
  if (typeof func != 'function') {
    return identity;
  }
  // exit early for no `thisArg` or already bound by `Function#bind`
  if (typeof thisArg == 'undefined' || !('prototype' in func)) {
    return func;
  }
  var data = func[expando];
  if (typeof data == 'undefined') {
    if (support.funcNames) {
      data = !func.name;
    }
    data = data || !support.funcDecomp;
    if (!data) {
      var source = fnToString.call(func);
      if (!support.funcNames) {
        data = !reFuncName.test(source);
      }
      if (!data) {
        // checks if `func` references the `this` keyword and stores the result
        data = reThis.test(source);
        setData(func, data);
      }
    }
  }
  // exit early if there are no `this` references or `func` is bound
  if (data === false || (data !== true && data[1] & BIND_FLAG)) {
    return func;
  }
  switch (argCount) {
    case 1: return function(value) {
      return func.call(thisArg, value);
    };
    case 3: return function(value, index, collection) {
      return func.call(thisArg, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(thisArg, accumulator, value, index, collection);
    };
    case 5: return function(value, other, key, object, source) {
      return func.call(thisArg, value, other, key, object, source);
    };
  }
  return bind(func, thisArg);
}

module.exports = baseCreateCallback;
