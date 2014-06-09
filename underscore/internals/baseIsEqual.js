/**
 * Lo-Dash 2.5.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="node" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isFunction = require('../objects/isFunction'),
    keys = require('../objects/keys');

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

/** Native method shortcuts */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.isEqual`, without support for `thisArg`
 * binding, which allows partial "_.where" style comparisons.
 *
 * @private
 * @param {*} value The value to compare to `other`.
 * @param {*} other The value to compare to `value`.
 * @param {Function} [callback] The function to customize comparing values.
 * @param {boolean} [isWhere=false] A flag to indicate performing partial comparisons.
 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, stackA, stackB) {
  if (value === other) {
    return value !== 0 || (1 / value == 1 / other);
  }
  var valType = typeof value,
      othType = typeof other;

  if (value === value && (value == null || other == null ||
      (valType != 'function' && valType != 'object' && othType != 'function' && othType != 'object'))) {
    return false;
  }
  var valClass = toString.call(value),
      othClass = toString.call(other);

  if (valClass != othClass) {
    return false;
  }
  switch (valClass) {
    case boolClass:
    case dateClass:
      return +value == +other;

    case numberClass:
      return value != +value
        ? other != +other
        : (value == 0 ? (1 / value == 1 / other) : value == +other);

    case regexpClass:
    case stringClass:
      return value == String(other);
  }
  var isArr = arrayLikeClasses[valClass];
  if (!isArr) {
    if (valClass != objectClass) {
      return false;
    }
    var valWrapped = hasOwnProperty.call(value, '__wrapped__'),
        othWrapped = hasOwnProperty.call(other, '__wrapped__');

    if (valWrapped || othWrapped) {
      return baseIsEqual(valWrapped ? value.__wrapped__ : value, othWrapped ? other.__wrapped__ : other, stackA, stackB);
    }
    var hasValCtor = hasOwnProperty.call(value, 'constructor'),
        hasOthCtor = hasOwnProperty.call(other, 'constructor');

    if (hasValCtor != hasOthCtor) {
      return false;
    }
    if (!hasValCtor) {
      var valCtor = value.constructor,
          othCtor = other.constructor;

      if (valCtor != othCtor &&
            !(isFunction(valCtor) && valCtor instanceof valCtor && isFunction(othCtor) && othCtor instanceof othCtor) &&
            ('constructor' in value && 'constructor' in other)
          ) {
        return false;
      }
    }
  }
  stackA || (stackA = []);
  stackB || (stackB = []);

  var length = stackA.length;
  while (length--) {
    if (stackA[length] == value) {
      return stackB[length] == other;
    }
  }
  stackA.push(value);
  stackB.push(other);

  if (isArr) {
    length = value.length;
    var result = length == other.length;

    if (result) {
      while (length--) {
        result = baseIsEqual(value[length], other[length], stackA, stackB);
        if (!result) {
          break;
        }
      }
    }
  }
  else {
    var props = keys(value);
    length = props.length;
    result = length == keys(other).length;

    if (result) {
      while (length--) {
        var key = props[length];
        result = hasOwnProperty.call(other, key) && baseIsEqual(value[key], other[key], stackA, stackB);
        if (!result) {
          break;
        }
      }
    }
  }
  stackA.pop();
  stackB.pop();

  return result;
}

module.exports = baseIsEqual;
