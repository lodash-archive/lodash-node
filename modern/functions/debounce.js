/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isFunction = require('../objects/isFunction'),
    isObject = require('../objects/isObject'),
    reNative = require('../internals/reNative');

/** Used for native method references */
var objectProto = Object.prototype;

/** Native method shortcuts */
var now = reNative.test(now = Date.now) && now || function() { return +new Date; };

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeMax = Math.max;

/**
 * Creates a function that will delay the execution of `func` until after
 * `wait` milliseconds have elapsed since the last time it was invoked.
 * Provide an options object to indicate that `func` should be invoked on
 * the leading and/or trailing edge of the `wait` timeout. Subsequent calls
 * to the debounced function will return the result of the last `func` call.
 *
 * Note: If `leading` and `trailing` options are `true` `func` will be called
 * on the trailing edge of the timeout only if the the debounced function is
 * invoked more than once during the `wait` timeout.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} func The function to debounce.
 * @param {number} wait The number of milliseconds to delay.
 * @param {Object} [options] The options object.
 * @param {boolean} [options.leading=false] Specify execution on the leading edge of the timeout.
 * @param {number} [options.maxWait] The maximum time `func` is allowed to be delayed before it's called.
 * @param {boolean} [options.trailing=true] Specify execution on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // avoid costly calculations while the window size is in flux
 * var lazyLayout = _.debounce(calculateLayout, 150);
 * jQuery(window).on('resize', lazyLayout);
 *
 * // execute `sendMail` when the click event is fired, debouncing subsequent calls
 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * });
 *
 * // ensure `batchLog` is executed once after 1 second of debounced calls
 * var source = new EventSource('/stream');
 * source.addEventListener('message', _.debounce(batchLog, 250, {
 *   'maxWait': 1000
 * }, false);
 */
function debounce(func, wait, options) {
  var args,
      result,
      stamp,
      thisArg,
      callCount = 0,
      lastCalled = 0,
      maxWait = false,
      maxTimeoutId = null,
      timeoutId = null,
      trailing = true;

  if (!isFunction(func)) {
    throw new TypeError;
  }
  wait = nativeMax(0, wait || 0);
  if (options === true) {
    var leading = true;
    trailing = false;
  } else if (isObject(options)) {
    leading = options.leading;
    maxWait = 'maxWait' in options && nativeMax(wait, options.maxWait || 0);
    trailing = 'trailing' in options ? options.trailing : trailing;
  }
  var delayed = function() {
    var remaining = wait - (now() - stamp);
    if (remaining <= 0) {
      var isCalled = trailing && (!leading || callCount > 1);
      if (maxTimeoutId) {
        clearTimeout(maxTimeoutId);
      }
      callCount = 0;
      maxTimeoutId = timeoutId = null;
      if (isCalled) {
        lastCalled = now();
        result = func.apply(thisArg, args);
      }
    } else {
      timeoutId = setTimeout(delayed, remaining);
    }
  };

  var maxDelayed = function() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    callCount = 0;
    maxTimeoutId = timeoutId = null;
    if (trailing || (maxWait !== wait)) {
      lastCalled = now();
      result = func.apply(thisArg, args);
    }
  };

  return function() {
    args = arguments;
    stamp = now();
    thisArg = this;
    callCount++;

    if (maxWait === false) {
      if (leading && callCount < 2) {
        result = func.apply(thisArg, args);
      }
    } else {
      if (!maxTimeoutId && !leading) {
        lastCalled = stamp;
      }
      var remaining = maxWait - (stamp - lastCalled);
      if (remaining <= 0) {
        if (maxTimeoutId) {
          clearTimeout(maxTimeoutId);
          maxTimeoutId = null;
        }
        lastCalled = stamp;
        result = func.apply(thisArg, args);
      }
      else if (!maxTimeoutId) {
        maxTimeoutId = setTimeout(maxDelayed, remaining);
      }
    }
    if (!timeoutId && wait !== maxWait) {
      timeoutId = setTimeout(delayed, wait);
    }
    return result;
  };
}

module.exports = debounce;
