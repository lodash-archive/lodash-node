/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseFunctions = require('../internal/baseFunctions'),
    isFunction = require('../object/isFunction'),
    isObject = require('../object/isObject'),
    keys = require('../object/keys');

/** Used for native method references */
var arrayProto = Array.prototype;

/** Native method shortcuts */
var push = arrayProto.push;

/**
 * Adds all own enumerable function properties of a source object to the
 * destination object. If `object` is a function then methods are added to
 * its prototype as well.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {Function|Object} [object=this] object The destination object.
 * @param {Object} source The object of functions to add.
 * @param {Object} [options] The options object.
 * @param {boolean} [options.chain=true] Specify whether the functions added
 *  are chainable.
 * @returns {Function|Object} Returns `object`.
 * @example
 *
 * function vowels(string) {
 *   return _.filter(string, function(v) {
 *     return /[aeiou]/i.test(v);
 *   });
 * }
 *
 * _.mixin({ 'vowels': vowels });
 * _.vowels('fred');
 * // => ['e']
 *
 * _('fred').vowels().value();
 * // => ['e']
 *
 * _.mixin({ 'vowels': vowels }, { 'chain': false });
 * _('fred').vowels();
 * // => ['e']
 */
function mixin(object, source, options) {
  var chain = true,
      methodNames = source && baseFunctions(source, keys);

  if (options === false) {
    chain = false;
  } else if (isObject(options) && 'chain' in options) {
    chain = options.chain;
  }
  var index = -1,
      isFunc = isFunction(object),
      length = methodNames ? methodNames.length : 0;

  while (++index < length) {
    var methodName = methodNames[index],
        func = object[methodName] = source[methodName];

    if (isFunc) {
      object.prototype[methodName] = (function(func) {
        return function() {
          var chainAll = this.__chain__,
              value = this.__wrapped__,
              args = [value];

          push.apply(args, arguments);
          var result = func.apply(object, args);
          if (chain || chainAll) {
            if (value === result && isObject(result)) {
              return this;
            }
            result = new object(result);
            result.__chain__ = chainAll;
          }
          return result;
        };
      }(func));
    }
  }
  return object;
}

module.exports = mixin;
