/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var assign = require('../objects/assign'),
    forEach = require('../collections/forEach'),
    forOwn = require('../objects/forOwn'),
    getArray = require('./getArray'),
    isArray = require('../objects/isArray'),
    isObject = require('../objects/isObject'),
    releaseArray = require('./releaseArray'),
    slice = require('./slice');

/** Used to match regexp flags from their coerced string values */
var reFlags = /\w*$/;

/** `Object#toString` result shortcuts */
var argsClass = '[object Arguments]',
    arrayClass = '[object Array]',
    boolClass = '[object Boolean]',
    dateClass = '[object Date]',
    funcClass = '[object Function]',
    numberClass = '[object Number]',
    objectClass = '[object Object]',
    regexpClass = '[object RegExp]',
    stringClass = '[object String]';

/** Used to identify object classifications that `_.clone` supports */
var cloneableClasses = {};
cloneableClasses[funcClass] = false;
cloneableClasses[argsClass] = cloneableClasses[arrayClass] =
cloneableClasses[boolClass] = cloneableClasses[dateClass] =
cloneableClasses[numberClass] = cloneableClasses[objectClass] =
cloneableClasses[regexpClass] = cloneableClasses[stringClass] = true;

/** Used for native method references */
var objectProto = Object.prototype;

/** Native method shortcuts */
var hasOwnProperty = objectProto.hasOwnProperty,
    toString = objectProto.toString;

/** Used to lookup a built-in constructor by [[Class]] */
var ctorByClass = {};
ctorByClass[arrayClass] = Array;
ctorByClass[boolClass] = Boolean;
ctorByClass[dateClass] = Date;
ctorByClass[funcClass] = Function;
ctorByClass[objectClass] = Object;
ctorByClass[numberClass] = Number;
ctorByClass[regexpClass] = RegExp;
ctorByClass[stringClass] = String;

/**
 * The base implementation of `_.clone` without argument juggling or support
 * for `thisArg` binding.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [deep=false] A flag to indicate a deep clone.
 * @param {Function} [callback] The function to customize cloning values.
 * @param {Array} [stackA=[]] Tracks traversed source objects.
 * @param {Array} [stackB=[]] Associates clones with source counterparts.
 * @returns {*} Returns the cloned `value`.
 */
function baseClone(value, deep, callback, stackA, stackB) {
  var result = value;

  if (callback) {
    result = callback(result);
    if (typeof result != 'undefined') {
      return result;
    }
    result = value;
  }
  // inspect [[Class]]
  var isObj = isObject(result);
  if (isObj) {
    var className = toString.call(result);
    if (!cloneableClasses[className]) {
      return result;
    }
    var isArr = isArray(result);
  }
  // shallow clone
  if (!isObj || !deep) {
    return isObj
      ? (isArr ? slice(result) : assign({}, result))
      : result;
  }
  var ctor = ctorByClass[className];
  switch (className) {
    case boolClass:
    case dateClass:
      return new ctor(+result);

    case numberClass:
    case stringClass:
      return new ctor(result);

    case regexpClass:
      return ctor(result.source, reFlags.exec(result));
  }
  // check for circular references and return corresponding clone
  var initedStack = !stackA;
  stackA || (stackA = getArray());
  stackB || (stackB = getArray());

  var length = stackA.length;
  while (length--) {
    if (stackA[length] == value) {
      return stackB[length];
    }
  }
  // init cloned object
  result = isArr ? ctor(result.length) : {};

  // add array properties assigned by `RegExp#exec`
  if (isArr) {
    if (hasOwnProperty.call(value, 'index')) {
      result.index = value.index;
    }
    if (hasOwnProperty.call(value, 'input')) {
      result.input = value.input;
    }
  }
  // add the source value to the stack of traversed objects
  // and associate it with its clone
  stackA.push(value);
  stackB.push(result);

  // recursively populate clone (susceptible to call stack limits)
  (isArr ? forEach : forOwn)(value, function(objValue, key) {
    result[key] = baseClone(objValue, deep, callback, stackA, stackB);
  });

  if (initedStack) {
    releaseArray(stackA);
    releaseArray(stackB);
  }
  return result;
}

module.exports = baseClone;
