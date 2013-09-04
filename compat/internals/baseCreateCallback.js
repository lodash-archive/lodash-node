/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var bind = require('../functions/bind'),
    identity = require('../utilities/identity'),
    setBindData = require('./setBindData'),
    support = require('../support');

/** Used to detected named functions */
var reFuncName = /^function[ \n\r\t]+\w/;

/** Used to detect functions containing a `this` reference */
var reThis = (reThis = /\bthis\b/) && reThis.test(function() { return this; }) && reThis;

/** Native method shortcuts */
var fnToString = Function.prototype.toString;

/**
 * The base implementation of `_.createCallback` without support for creating
 * "_.pluck" or "_.where" style callbacks.
 *
 * @private
 * @param {*} [func=identity] The value to convert to a callback.
 * @param {*} [thisArg] The `this` binding of the created callback.
 * @param {number} [argCount] The number of arguments the callback accepts.
 * @returns {Function} Returns a callback function.
 */
function baseCreateCallback(func, thisArg, argCount) {
  if (typeof func != 'function') {
    return identity;
  }
  // exit early if there is no `thisArg`
  if (typeof thisArg == 'undefined') {
    return func;
  }
  var bindData = func.__bindData__ || (support.funcNames && !func.name);
  if (typeof bindData == 'undefined') {
    var source = reThis && fnToString.call(func);
    if (!support.funcNames && source && !reFuncName.test(source)) {
      bindData = true;
    }
    if (support.funcNames || !bindData) {
      // checks if `func` references the `this` keyword and stores the result
      bindData = !reThis || reThis.test(source);
      setBindData(func, bindData);
    }
  }
  // exit early if there are no `this` references or `func` is bound
  if (bindData !== true && (bindData && bindData[1] & 1)) {
    return func;
  }
  switch (argCount) {
    case 1: return function(value) {
      return func.call(thisArg, value);
    };
    case 2: return function(a, b) {
      return func.call(thisArg, a, b);
    };
    case 3: return function(value, index, collection) {
      return func.call(thisArg, value, index, collection);
    };
    case 4: return function(accumulator, value, index, collection) {
      return func.call(thisArg, accumulator, value, index, collection);
    };
  }
  return bind(func, thisArg);
}

module.exports = baseCreateCallback;
