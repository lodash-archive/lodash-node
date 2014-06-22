/**
 * @license
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="node" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var arrays = require('./array'),
    chaining = require('./chain'),
    collections = require('./collection'),
    functions = require('./function'),
    objects = require('./object'),
    strings = require('./string'),
    utilities = require('./utility'),
    arrayEach = require('./internal/arrayEach'),
    assign = require('./object/assign'),
    lodash = require('./chain/lodash'),
    lodashWrapper = require('./internal/lodashWrapper'),
    mixin = require('./utility/mixin'),
    support = require('./support');

/** Used as the semantic version number */
var version = '3.0.0-pre';

/** Used for native method references */
var arrayProto = Array.prototype;

// wrap `_.mixin` so it works when provided only one argument
mixin = (function(func) {
  return function(object, source) {
    if (!source) {
      source = object;
      object = lodash;
    }
    return func(object, source);
  };
}(mixin));

// add functions that return wrapped values when chaining
lodash.after = functions.after;
lodash.bind = functions.bind;
lodash.bindAll = functions.bindAll;
lodash.chain = chaining.chain;
lodash.compact = arrays.compact;
lodash.compose = functions.compose;
lodash.constant = utilities.constant;
lodash.countBy = collections.countBy;
lodash.debounce = functions.debounce;
lodash.defaults = objects.defaults;
lodash.defer = functions.defer;
lodash.delay = functions.delay;
lodash.difference = arrays.difference;
lodash.drop = arrays.drop;
lodash.filter = collections.filter;
lodash.flatten = arrays.flatten;
lodash.forEach = collections.forEach;
lodash.functions = objects.functions;
lodash.groupBy = collections.groupBy;
lodash.indexBy = collections.indexBy;
lodash.initial = arrays.initial;
lodash.intersection = arrays.intersection;
lodash.invert = objects.invert;
lodash.invoke = collections.invoke;
lodash.keys = objects.keys;
lodash.map = collections.map;
lodash.matches = utilities.matches;
lodash.memoize = functions.memoize;
lodash.mixin = mixin;
lodash.omit = objects.omit;
lodash.once = functions.once;
lodash.pairs = objects.pairs;
lodash.partial = functions.partial;
lodash.partition = collections.partition;
lodash.pick = objects.pick;
lodash.pluck = collections.pluck;
lodash.property = utilities.property;
lodash.range = utilities.range;
lodash.reject = collections.reject;
lodash.rest = arrays.rest;
lodash.shuffle = collections.shuffle;
lodash.sortBy = collections.sortBy;
lodash.take = arrays.take;
lodash.tap = chaining.tap;
lodash.throttle = functions.throttle;
lodash.times = utilities.times;
lodash.toArray = collections.toArray;
lodash.union = arrays.union;
lodash.uniq = arrays.uniq;
lodash.values = objects.values;
lodash.where = collections.where;
lodash.without = arrays.without;
lodash.wrap = functions.wrap;
lodash.zip = arrays.zip;

// add aliases
lodash.collect = collections.map;
lodash.each = collections.forEach;
lodash.extend = assign;
lodash.methods = objects.functions;
lodash.object = arrays.zipObject;
lodash.select = collections.filter;
lodash.tail = arrays.rest;
lodash.unique = arrays.uniq;

// add functions that return unwrapped values when chaining
lodash.clone = objects.clone;
lodash.contains = collections.contains;
lodash.escape = strings.escape;
lodash.every = collections.every;
lodash.find = collections.find;
lodash.findWhere = collections.findWhere;
lodash.first = arrays.first;
lodash.has = objects.has;
lodash.identity = utilities.identity;
lodash.indexOf = arrays.indexOf;
lodash.isArguments = objects.isArguments;
lodash.isArray = objects.isArray;
lodash.isBoolean = objects.isBoolean;
lodash.isDate = objects.isDate;
lodash.isElement = objects.isElement;
lodash.isEmpty = objects.isEmpty;
lodash.isEqual = objects.isEqual;
lodash.isFinite = objects.isFinite;
lodash.isFunction = objects.isFunction;
lodash.isNaN = objects.isNaN;
lodash.isNull = objects.isNull;
lodash.isNumber = objects.isNumber;
lodash.isObject = objects.isObject;
lodash.isRegExp = objects.isRegExp;
lodash.isString = objects.isString;
lodash.isUndefined = objects.isUndefined;
lodash.last = arrays.last;
lodash.lastIndexOf = arrays.lastIndexOf;
lodash.max = collections.max;
lodash.min = collections.min;
lodash.noConflict = utilities.noConflict;
lodash.now = utilities.now;
lodash.random = utilities.random;
lodash.reduce = collections.reduce;
lodash.reduceRight = collections.reduceRight;
lodash.result = utilities.result;
lodash.size = collections.size;
lodash.some = collections.some;
lodash.sortedIndex = arrays.sortedIndex;
lodash.template = strings.template;
lodash.unescape = strings.unescape;
lodash.uniqueId = utilities.uniqueId;

// add aliases
lodash.all = collections.every;
lodash.any = collections.some;
lodash.detect = collections.find;
lodash.foldl = collections.reduce;
lodash.foldr = collections.reduceRight;
lodash.head = arrays.first;
lodash.include = collections.contains;
lodash.inject = collections.reduce;

// add functions capable of returning wrapped and unwrapped values when chaining
lodash.sample = collections.sample;

// add functions to `lodash.prototype`
mixin(assign({}, lodash));

/**
 * The semantic version number.
 *
 * @static
 * @memberOf _
 * @type string
 */
lodash.VERSION = version;

lodash.support = support;
(lodash.templateSettings = strings.templateSettings).imports._ = lodash;

// add "Chaining" functions to the wrapper
lodash.prototype.chain = chaining.wrapperChain;
lodash.prototype.value = chaining.wrapperValueOf;

// add `Array` mutator functions to the wrapper
arrayEach(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(methodName) {
  var func = arrayProto[methodName];
  lodash.prototype[methodName] = function() {
    var value = this.__wrapped__;
    func.apply(value, arguments);

    // avoid array-like object bugs with `Array#shift` and `Array#splice`
    // in Firefox < 10 and IE < 9
    if (!support.spliceObjects && value.length === 0) {
      delete value[0];
    }
    return this;
  };
});

// add `Array` accessor functions to the wrapper
arrayEach(['concat', 'join', 'slice'], function(methodName) {
  var func = arrayProto[methodName];
  lodash.prototype[methodName] = function() {
    var value = this.__wrapped__,
        result = func.apply(value, arguments);

    if (this.__chain__) {
      result = new lodashWrapper(result);
      result.__chain__ = true;
    }
    return result;
  };
});

module.exports = lodash;
