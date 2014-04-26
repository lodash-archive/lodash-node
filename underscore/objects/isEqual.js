/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="node" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseForIn = require('../internals/baseForIn'),
    isFunction = require('./isFunction');

/** Used as the semantic version number */
var version = '2.4.1';

/** Used as the property name for wrapper metadata */
var expando = '__lodash@' + version + '__';

/** Used by methods to exit iteration */
var breakIndicator = expando + 'breaker__';

/** `Object#toString` result shortcuts */
var arrayClass = '[object Array]',
    boolClass = '[object Boolean]',
    dateClass = '[object Date]',
    numberClass = '[object Number]',
    objectClass = '[object Object]',
    regexpClass = '[object RegExp]',
    stringClass = '[object String]';

/** Used for native method references */
var objectProto = Object.prototype;

/** Used to resolve the internal `[[Class]]` of values */
var toString = objectProto.toString;

/** Native method shortcuts */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.isEqual`, without support for `thisArg`
 * binding, that allows partial "_.where" style comparisons.
 *
 * @private
 * @param {*} value The value to compare to `other`.
 * @param {*} other The value to compare to `value`.
 * @param {Function} [callback] The function to customize comparing values.
 * @param {Function} [isWhere=false] A flag to indicate performing partial comparisons.
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
  var isArr = valClass == arrayClass;
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
  var result = true,
      size = 0;

  stackA.push(value);
  stackB.push(other);

  if (isArr) {
    size = other.length;
    result = size == value.length;

    if (result) {
      while (size--) {
        if (!(result = baseIsEqual(value[size], other[size], stackA, stackB))) {
          break;
        }
      }
    }
  }
  else {
    baseForIn(other, function(othValue, key, other) {
      if (hasOwnProperty.call(other, key)) {
        size++;
        return !(result = hasOwnProperty.call(value, key) && baseIsEqual(value[key], othValue, stackA, stackB)) && breakIndicator;
      }
    });

    if (result) {
      baseForIn(value, function(valValue, key, value) {
        if (hasOwnProperty.call(value, key)) {
          return !(result = --size > -1) && breakIndicator;
        }
      });
    }
  }
  stackA.pop();
  stackB.pop();
  return result;
}

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent. If a callback is provided it will be executed to compare
 * values. If the callback returns `undefined` comparisons will be handled
 * by the method instead. The callback is bound to `thisArg` and invoked
 * with two arguments; (value, other).
 *
 * Note: This method supports comparing arrays, booleans, `Date` objects,
 * numbers, `Object` objects, regexes, and strings. Functions and DOM nodes
 * are **not** supported. A callback may be used to extend support for
 * comparing other values.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {*} value The value to compare to `other`.
 * @param {*} other The value to compare to `value`.
 * @param {Function} [callback] The function to customize comparing values.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'name': 'fred' };
 * var other = { 'name': 'fred' };
 *
 * object == other;
 * // => false
 *
 * _.isEqual(object, other);
 * // => true
 *
 * var words = ['hello', 'goodbye'];
 * var otherWords = ['hi', 'goodbye'];
 *
 * _.isEqual(words, otherWords, function() {
 *   return _.every(arguments, _.bind(RegExp.prototype.test, /^h(?:i|ello)$/)) || undefined;
 * });
 * // => true
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;
