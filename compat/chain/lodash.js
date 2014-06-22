/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isArray = require('../object/isArray'),
    lodashWrapper = require('../internal/lodashWrapper');

/** Used for native method references */
var objectProto = Object.prototype;

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
 * `after`, `assign`, `at`, `bind`, `bindAll`, `bindKey`, `callback`, `chain`,
 * `chunk`, `compact`, `compose`, `concat`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defer`, `delay`, `difference`, `drop`,
 * `dropRight`, `dropRightWhile`, `dropWhile`, `filter`, `flatten`, `forEach`,
 * `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `functions`,
 * `groupBy`, `indexBy`, `initial`, `intersection`, `invert`, `invoke`, `keys`,
 * `keysIn`, `map`, `mapValues`, `matches`, `memoize`, `merge`, `mixin`,
 * `negate`, `noop`, `omit`, `once`, `pairs`, `partial`, `partialRight`,
 * `partition`, `pick`, `pluck`, `property`, `pull`, `pullAt`, `push`, `range`,
 * `reject`, `remove`, `rest`, `reverse`, `shuffle`, `slice`, `sort`, `sortBy`,
 * `splice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `tap`,
 * `throttle`, `times`, `toArray`, `transform`, `union`, `uniq`, `unshift`,
 * `unzip`, `values`, `valuesIn`, `where`, `without`, `wrap`, `xor`, `zip`,
 * and `zipObject`
 *
 * The non-chainable wrapper functions are:
 * `camelCase`, `capitalize`, `clone`, `cloneDeep`, `contains`, `endsWith`,
 * `escape`, `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`,
 * `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`, `has`,
 * `identity`, `indexOf`, `isArguments`, `isArray`, `isBoolean`, `isDate`,
 * `isElement`, `isEmpty`, `isEqual`, `isError`, `isFinite`, `isFunction`,
 * `isNaN`, `isNull`, `isNumber`, `isObject`, `isPlainObject`, `isRegExp`,
 * `isString`, `isUndefined`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `max`, `min`, `noConflict`, `now`, `pad`, `padLeft`, `padRight`, `parseInt`,
 * `pop`, `random`, `reduce`, `reduceRight`, `repeat`, `result`, `runInContext`,
 * `shift`, `size`, `snakeCase`, `some`, `sortedIndex`, `startsWith`, `template`,
 * `trim`, `trimLeft`, `trimRight`, `trunc`, `unescape`, `uniqueId`, and `value`
 *
 * The wrapper function `sample` will return a wrapped value when `n` is
 * provided, otherwise it will return an unwrapped value.
 *
 * Explicit chaining can be enabled by using the `_.chain` method.
 *
 * @name _
 * @constructor
 * @category Chain
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
  if (value && typeof value == 'object') {
    if (value instanceof lodashWrapper) {
      return value;
    }
    if (!isArray(value) && hasOwnProperty.call(value, '__wrapped__')) {
      value = value.__wrapped__;
    }
  }
  return new lodashWrapper(value);
}

// ensure `new lodashWrapper` is an instance of `lodash`
lodashWrapper.prototype = lodash.prototype;

module.exports = lodash;
