/**
 * @license
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var arrays = require('./arrays'),
    chaining = require('./chaining'),
    collections = require('./collections'),
    functions = require('./functions'),
    objects = require('./objects'),
    strings = require('./strings'),
    utilities = require('./utilities'),
    arrayEach = require('./internals/arrayEach'),
    baseAssign = require('./internals/baseAssign'),
    baseForOwn = require('./internals/baseForOwn'),
    baseFunctions = require('./internals/baseFunctions'),
    isArray = require('./objects/isArray'),
    keys = require('./objects/keys'),
    lodashWrapper = require('./internals/lodashWrapper'),
    mixin = require('./utilities/mixin'),
    support = require('./support');

/** Used as the semantic version number */
var version = '3.0.0-pre';

/** Used for native method references */
var arrayProto = Array.prototype,
    objectProto = Object.prototype;

/** Native method shortcuts */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps the given value to enable intuitive
 * method chaining.
 *
 * In addition to Lo-Dash methods, wrappers also have the following `Array` methods:
 * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`, `splice`,
 * and `unshift`
 *
 * Chaining is supported in custom builds as long as the `value` method is
 * implicitly or explicitly included in the build.
 *
 * The chainable wrapper functions are:
 * `after`, `assign`, `at`, `bind`, `bindAll`, `bindKey`, `chain`, `compact`,
 * `compose`, `concat`, `constant`, `countBy`, `create`, `createCallback`,
 * `curry`, `debounce`, `defaults`, `defer`, `delay`, `difference`, `filter`,
 * `flatten`, `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`,
 * `forOwnRight`, `functions`, `groupBy`, `indexBy`, `initial`, `intersection`,
 * `invert`, `invoke`, `keys`, `map`, `mapValues`, `matches`, `max`, `memoize`,
 * `merge`, `min`, `mixin`, `noop`, `object`, `omit`, `once`, `pairs`, `partial`,
 * `partialRight`, `pick`, `pluck`, `property`, `pull`, `pullAt`, `push`,
 * `range`, `reject`, `remove`, `rest`, `reverse`, `shuffle`, `slice`, `sort`,
 * `sortBy`, `splice`, `tap`, `throttle`, `times`, `toArray`, `transform`,
 * `union`, `uniq`, `unshift`, `unzip`, `values`, `where`, `without`, `wrap`,
 * `xor`, and `zip`
 *
 * The non-chainable wrapper functions are:
 * `capitalize`, `clone`, `cloneDeep`, `contains`, `escape`, `every`, `find`,
 * `findIndex`, `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `has`,
 * `identity`, `indexOf`, `isArguments`, `isArray`, `isBoolean`, `isDate`,
 * `isElement`, `isEmpty`, `isEqual`, `isFinite`, `isFunction`, `isNaN`,
 * `isNull`, `isNumber`, `isObject`, `isPlainObject`, `isRegExp`, `isString`,
 * `isUndefined`, `join`, `lastIndexOf`, `noConflict`, `now`, `parseInt`,
 * `pop`, `random`, `reduce`, `reduceRight`, `result`, `shift`, `size`, `some`,
 * `sortedIndex`, `runInContext`, `template`, `trim`, `trimLeft`, `trimRight`,
 * `unescape`, `uniqueId`, and `value`
 *
 * The wrapper functions `first`, `last`, and `sample` return wrapped values
 * when `n` is provided, otherwise they return unwrapped values.
 *
 * Explicit chaining can be enabled by using the `_.chain` method.
 *
 * @name _
 * @constructor
 * @category Chaining
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns a `lodash` instance.
 * @example
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // returns an unwrapped value
 * wrapped.reduce(function(sum, n) { return sum + n; });
 * // => 6
 *
 * // returns a wrapped value
 * var squares = wrapped.map(function(n) { return n * n; });
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  // don't wrap if already wrapped, even if wrapped by a different `lodash` constructor
  return (value && typeof value == 'object' && !isArray(value) && hasOwnProperty.call(value, '__wrapped__'))
   ? value
   : new lodashWrapper(value);
}

// ensure `new lodashWrapper` is an instance of `lodash`
lodashWrapper.prototype = lodash.prototype;

// wrap `_.mixin` so it works when provided only one argument
mixin = (function(func) {
  return function(object, source, options) {
    if (!source || (!options && !baseFunctions(source, keys).length)) {
      if (options == null) {
        options = source;
      }
      source = object;
      object = this;
    }
    return func(object, source, options);
  };
}(mixin));

// add functions that return wrapped values when chaining
lodash.after = functions.after;
lodash.assign = objects.assign;
lodash.at = collections.at;
lodash.bind = functions.bind;
lodash.bindAll = functions.bindAll;
lodash.bindKey = functions.bindKey;
lodash.chain = chaining.chain;
lodash.chunk = arrays.chunk;
lodash.compact = arrays.compact;
lodash.compose = functions.compose;
lodash.constant = utilities.constant;
lodash.countBy = collections.countBy;
lodash.create = objects.create;
lodash.createCallback = functions.createCallback;
lodash.curry = functions.curry;
lodash.debounce = functions.debounce;
lodash.defaults = objects.defaults;
lodash.defer = functions.defer;
lodash.delay = functions.delay;
lodash.difference = arrays.difference;
lodash.drop = arrays.drop;
lodash.dropRight = arrays.dropRight;
lodash.dropRightWhile = arrays.dropRightWhile;
lodash.dropWhile = arrays.dropWhile;
lodash.filter = collections.filter;
lodash.flatten = arrays.flatten;
lodash.forEach = collections.forEach;
lodash.forEachRight = collections.forEachRight;
lodash.forIn = objects.forIn;
lodash.forInRight = objects.forInRight;
lodash.forOwn = objects.forOwn;
lodash.forOwnRight = objects.forOwnRight;
lodash.functions = objects.functions;
lodash.groupBy = collections.groupBy;
lodash.indexBy = collections.indexBy;
lodash.initial = arrays.initial;
lodash.intersection = arrays.intersection;
lodash.invert = objects.invert;
lodash.invoke = collections.invoke;
lodash.keys = keys;
lodash.keysIn = objects.keysIn;
lodash.map = collections.map;
lodash.mapValues = objects.mapValues;
lodash.matches = utilities.matches;
lodash.max = collections.max;
lodash.memoize = functions.memoize;
lodash.merge = objects.merge;
lodash.min = collections.min;
lodash.mixin = mixin;
lodash.negate = functions.negate;
lodash.omit = objects.omit;
lodash.once = functions.once;
lodash.pairs = objects.pairs;
lodash.partial = functions.partial;
lodash.partialRight = functions.partialRight;
lodash.partition = collections.partition;
lodash.pick = objects.pick;
lodash.pluck = collections.pluck;
lodash.property = utilities.property;
lodash.pull = arrays.pull;
lodash.pullAt = arrays.pullAt;
lodash.range = arrays.range;
lodash.reject = collections.reject;
lodash.remove = arrays.remove;
lodash.rest = arrays.rest;
lodash.shuffle = collections.shuffle;
lodash.slice = arrays.slice;
lodash.sortBy = collections.sortBy;
lodash.tap = chaining.tap;
lodash.throttle = functions.throttle;
lodash.times = utilities.times;
lodash.toArray = collections.toArray;
lodash.transform = objects.transform;
lodash.union = arrays.union;
lodash.uniq = arrays.uniq;
lodash.values = objects.values;
lodash.valuesIn = objects.valuesIn;
lodash.where = collections.where;
lodash.without = arrays.without;
lodash.wrap = functions.wrap;
lodash.xor = arrays.xor;
lodash.zip = arrays.zip;
lodash.zipObject = arrays.zipObject;

// add aliases
lodash.callback = functions.createCallback;
lodash.collect = collections.map;
lodash.each = collections.forEach;
lodash.eachRight = collections.forEachRight;
lodash.extend = objects.assign;
lodash.methods = objects.functions;
lodash.object = arrays.zipObject;
lodash.select = collections.filter;
lodash.tail = arrays.rest;
lodash.unique = arrays.uniq;
lodash.unzip = arrays.zip;

// add functions to `lodash.prototype`
mixin(lodash, baseAssign({}, lodash));

// add functions that return unwrapped values when chaining
lodash.camelCase = strings.camelCase;
lodash.capitalize = strings.capitalize;
lodash.clone = objects.clone;
lodash.cloneDeep = objects.cloneDeep;
lodash.contains = collections.contains;
lodash.endsWith = strings.endsWith;
lodash.escape = utilities.escape;
lodash.escapeRegExp = strings.escapeRegExp;
lodash.every = collections.every;
lodash.find = collections.find;
lodash.findIndex = arrays.findIndex;
lodash.findKey = objects.findKey;
lodash.findLast = collections.findLast;
lodash.findLastIndex = arrays.findLastIndex;
lodash.findLastKey = objects.findLastKey;
lodash.findWhere = collections.findWhere;
lodash.has = objects.has;
lodash.identity = utilities.identity;
lodash.indexOf = arrays.indexOf;
lodash.isArguments = objects.isArguments;
lodash.isArray = isArray;
lodash.isBoolean = objects.isBoolean;
lodash.isDate = objects.isDate;
lodash.isElement = objects.isElement;
lodash.isEmpty = objects.isEmpty;
lodash.isEqual = objects.isEqual;
lodash.isError = objects.isError;
lodash.isFinite = objects.isFinite;
lodash.isFunction = objects.isFunction;
lodash.isNaN = objects.isNaN;
lodash.isNull = objects.isNull;
lodash.isNumber = objects.isNumber;
lodash.isObject = objects.isObject;
lodash.isPlainObject = objects.isPlainObject;
lodash.isRegExp = objects.isRegExp;
lodash.isString = objects.isString;
lodash.isUndefined = objects.isUndefined;
lodash.kebabCase = strings.kebabCase;
lodash.lastIndexOf = arrays.lastIndexOf;
lodash.noConflict = utilities.noConflict;
lodash.noop = utilities.noop;
lodash.now = utilities.now;
lodash.pad = strings.pad;
lodash.padLeft = strings.padLeft;
lodash.padRight = strings.padRight;
lodash.parseInt = utilities.parseInt;
lodash.random = utilities.random;
lodash.reduce = collections.reduce;
lodash.reduceRight = collections.reduceRight;
lodash.repeat = strings.repeat;
lodash.result = utilities.result;
lodash.size = collections.size;
lodash.some = collections.some;
lodash.sortedIndex = arrays.sortedIndex;
lodash.snakeCase = strings.snakeCase;
lodash.startsWith = strings.startsWith;
lodash.template = utilities.template;
lodash.trim = strings.trim;
lodash.trimLeft = strings.trimLeft;
lodash.trimRight = strings.trimRight;
lodash.trunc = strings.trunc;
lodash.unescape = utilities.unescape;
lodash.uniqueId = utilities.uniqueId;

// add aliases
lodash.all = collections.every;
lodash.any = collections.some;
lodash.detect = collections.find;
lodash.foldl = collections.reduce;
lodash.foldr = collections.reduceRight;
lodash.include = collections.contains;
lodash.inject = collections.reduce;

mixin(lodash, (function() {
  var source = {};
  baseForOwn(lodash, function(func, methodName) {
    if (!lodash.prototype[methodName]) {
      source[methodName] = func;
    }
  });
  return source;
}()), false);

// add functions capable of returning wrapped and unwrapped values when chaining
lodash.first = arrays.first;
lodash.last = arrays.last;
lodash.sample = collections.sample;
lodash.take = arrays.take;
lodash.takeRight = arrays.takeRight;
lodash.takeRightWhile = arrays.takeRightWhile;
lodash.takeWhile = arrays.takeWhile;

// add alias
lodash.head = arrays.first;

baseForOwn(lodash, function(func, methodName) {
  var callbackable = methodName != 'sample';
  if (!lodash.prototype[methodName]) {
    lodash.prototype[methodName] = function(n, guard) {
      var chainAll = this.__chain__,
          result = func(this.__wrapped__, n, guard);

      return !chainAll && (n == null || (guard && !(callbackable && typeof n == 'function')))
        ? result
        : new lodashWrapper(result, chainAll);
    };
  }
});

/**
 * The semantic version number.
 *
 * @static
 * @memberOf _
 * @type string
 */
lodash.VERSION = version;

lodash.support = support;
(lodash.templateSettings = utilities.templateSettings).imports._ = lodash;

// add "Chaining" functions to the wrapper
lodash.prototype.chain = chaining.wrapperChain;
lodash.prototype.toJSON = chaining.wrapperValueOf;
lodash.prototype.toString = chaining.wrapperToString;
lodash.prototype.value = chaining.wrapperValueOf;
lodash.prototype.valueOf = chaining.wrapperValueOf;

// add `Array` functions that return unwrapped values
arrayEach(['join', 'pop', 'shift'], function(methodName) {
  var func = arrayProto[methodName];
  lodash.prototype[methodName] = function() {
    var chainAll = this.__chain__,
        result = func.apply(this.__wrapped__, arguments);

    return chainAll
      ? new lodashWrapper(result, chainAll)
      : result;
  };
});

// add `Array` functions that return the existing wrapped value
arrayEach(['push', 'reverse', 'sort', 'unshift'], function(methodName) {
  var func = arrayProto[methodName];
  lodash.prototype[methodName] = function() {
    func.apply(this.__wrapped__, arguments);
    return this;
  };
});

// add `Array` functions that return new wrapped values
arrayEach(['concat', 'splice'], function(methodName) {
  var func = arrayProto[methodName];
  lodash.prototype[methodName] = function() {
    return new lodashWrapper(func.apply(this.__wrapped__, arguments), this.__chain__);
  };
});

// avoid array-like object bugs with `Array#shift` and `Array#splice`
// in IE < 9, Firefox < 10, Narwhal, and RingoJS
if (!support.spliceObjects) {
  arrayEach(['pop', 'shift', 'splice'], function(methodName) {
    var func = arrayProto[methodName],
        isSplice = methodName == 'splice';

    lodash.prototype[methodName] = function() {
      var chainAll = this.__chain__,
          value = this.__wrapped__,
          result = func.apply(value, arguments);

      if (value.length === 0) {
        delete value[0];
      }
      return (chainAll || isSplice)
        ? new lodashWrapper(result, chainAll)
        : result;
    };
  });
}

module.exports = lodash;
