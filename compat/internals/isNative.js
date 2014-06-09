/**
 * Lo-Dash 2.5.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var escapeRegExp = require('../strings/escapeRegExp');

/** Used to detect host constructors (Safari > 5) */
var reHostCtor = /^\[object .+?Constructor\]$/;

/** Used for native method references */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions */
var fnToString = Function.prototype.toString;

/** Used to resolve the internal `[[Class]]` of values */
var toString = objectProto.toString;

/** Used to detect if a method is native */
var reNative = RegExp('^' +
  escapeRegExp(toString)
  .replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * Checks if `value` is a native function.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
 */
function isNative(value) {
  var type = typeof value;
  return type == 'function'
    ? reNative.test(fnToString.call(value))
    : (value && type == 'object' && reHostCtor.test(toString.call(value))) || false;
}

module.exports = isNative;
