/**
 * Lo-Dash 2.3.0 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isFunction = require('../objects/isFunction'),
    objectTypes = require('../internals/objectTypes'),
    reNative = require('../internals/reNative'),
    slice = require('../internals/slice');

/** Detect free variable `exports` */
var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

/** Detect free variable `module` */
var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports` */
var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

/** Detect free variable `global` from Node.js or Browserified code and use it as `root` */
var freeGlobal = objectTypes[typeof global] && global;
if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
  root = freeGlobal;
}

/** Used to detect `setImmediate` in Node.js */
var setImmediate = typeof (setImmediate = freeGlobal && moduleExports && freeGlobal.setImmediate) == 'function' &&
  !reNative.test(setImmediate) && setImmediate;

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
  var args = slice(arguments, 1);
  return setTimeout(function() { func.apply(undefined, args); }, 1);
}
// use `setImmediate` if available in Node.js
if (setImmediate) {
  defer = function(func) {
    if (!isFunction(func)) {
      throw new TypeError;
    }
    return setImmediate.apply(root, arguments);
  };
}

module.exports = defer;
