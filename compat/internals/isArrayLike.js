/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** `Object#toString` result shortcuts */
var argsClass = '[object Arguments]',
    arrayClass = '[object Array]',
    boolClass = '[object Boolean]',
    dateClass = '[object Date]',
    errorClass = '[object Error]',
    funcClass = '[object Function]',
    mapClass = '[object Map]',
    numberClass = '[object Number]',
    objectClass = '[object Object]',
    regexpClass = '[object RegExp]',
    setClass = '[object Set]',
    stringClass = '[object String]',
    weakMapClass = '[object WeakMap]';

var arrayBufferClass = '[object ArrayBuffer]',
    float32Class = '[object Float32Array]',
    float64Class = '[object Float64Array]',
    int8Class = '[object Int8Array]',
    int16Class = '[object Int16Array]',
    int32Class = '[object Int32Array]',
    uint8Class = '[object Uint8Array]',
    uint8ClampedClass = '[object Uint8ClampedArray]',
    uint16Class = '[object Uint16Array]',
    uint32Class = '[object Uint32Array]';

/** Used to identify object classifications that are treated like arrays */
var arrayLikeClasses = {};
arrayLikeClasses[argsClass] =
arrayLikeClasses[arrayClass] = arrayLikeClasses[float32Class] =
arrayLikeClasses[float64Class] = arrayLikeClasses[int8Class] =
arrayLikeClasses[int16Class] = arrayLikeClasses[int32Class] =
arrayLikeClasses[uint8Class] = arrayLikeClasses[uint8ClampedClass] =
arrayLikeClasses[uint16Class] = arrayLikeClasses[uint32Class] = true;
arrayLikeClasses[arrayBufferClass] = arrayLikeClasses[boolClass] =
arrayLikeClasses[dateClass] = arrayLikeClasses[errorClass] =
arrayLikeClasses[funcClass] = arrayLikeClasses[mapClass] =
arrayLikeClasses[numberClass] = arrayLikeClasses[objectClass] =
arrayLikeClasses[regexpClass] = arrayLikeClasses[setClass] =
arrayLikeClasses[stringClass] = arrayLikeClasses[weakMapClass] = false;

/** Used for native method references */
var objectProto = Object.prototype;

/** Used to resolve the internal `[[Class]]` of values */
var toString = objectProto.toString;

/**
 * Checks if `value` is an array-like object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
 */
function isArrayLike(value) {
  return (value && typeof value == 'object' && typeof value.length == 'number' &&
    arrayLikeClasses[toString.call(value)]) || false;
}

module.exports = isArrayLike;
