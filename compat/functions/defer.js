/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isFunction = require('../objects/isFunction'),
    objectTypes = require('../internals/objectTypes'),
    reNative = require('../internals/reNative');

/** Used as a safe reference for `undefined` in pre ES5 environments */
var undefined;

/** Detect free variable `exports` */
var freeExports = objectTypes[typeof exports] && exports;

/** Detect free variable `module` */
var freeModule = objectTypes[typeof module] && module && module.exports == freeExports && module;

/**
 * Used for `Array` method references.
 *
 * Normally `Array.prototype` would suffice, however, using an array literal
 * avoids issues in Narwhal.
 */
var arrayRef = [];

/** Used for native method references */
var objectProto = Object.prototype;

/** Native method shortcuts */
var toString = objectProto.toString;

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeBind = reNative.test(nativeBind = toString.bind) && nativeBind,
    nativeSlice = arrayRef.slice;

/** Detect various environments */
var isIeOpera = reNative.test(global.attachEvent),
    isV8 = nativeBind && !/\n|true/.test(nativeBind + isIeOpera);

/**
 * Defers executing the `func` function until the current call stack has cleared.
 * Additional arguments will be provided to `func` when it is invoked.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} func The function to defer.
 * @param {...*} [arg] Arguments to invoke the function with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.defer(function() { console.log('deferred'); });
 * // returns from the function before 'deferred' is logged
 */
function defer(func) {
  if (!isFunction(func)) {
    throw new TypeError;
  }
  var args = nativeSlice.call(arguments, 1);
  return setTimeout(function() { func.apply(undefined, args); }, 1);
}
// use `setImmediate` if available in Node.js
if (isV8 && freeModule && typeof setImmediate == 'function') {
  defer = function(func) {
    if (!isFunction(func)) {
      throw new TypeError;
    }
    return setImmediate.apply(root, arguments);
  };
}

module.exports = defer;
