/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isFunction = require('../objects/isFunction');

/** Used as a safe reference for `undefined` in pre ES5 environments */
var undefined;

/**
 * Used for `Array` method references.
 *
 * Normally `Array.prototype` would suffice, however, using an array literal
 * avoids issues in Narwhal.
 */
var arrayRef = [];

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeSlice = arrayRef.slice;

/**
 * Executes the `func` function after `wait` milliseconds. Additional arguments
 * will be provided to `func` when it is invoked.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay execution.
 * @param {...*} [arg] Arguments to invoke the function with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * var log = _.bind(console.log, console);
 * _.delay(log, 1000, 'logged later');
 * // => 'logged later' (Appears after one second.)
 */
function delay(func, wait) {
  if (!isFunction(func)) {
    throw new TypeError;
  }
  var args = nativeSlice.call(arguments, 2);
  return setTimeout(function() { func.apply(undefined, args); }, wait);
}

module.exports = delay;
