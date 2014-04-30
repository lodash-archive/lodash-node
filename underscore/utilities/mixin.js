/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="node" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var functions = require('../objects/functions'),
    isFunction = require('../objects/isFunction');

/** Used for native method references */
var arrayRef = Array.prototype;

/** Native method shortcuts */
var push = arrayRef.push;

/**
 * Adds function properties of a source object to the destination object.
 * If `object` is a function methods will be added to its prototype as well.
 *
 * @static
 * @memberOf _
 * @category Utilities
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
function mixin(object, source) {
  var index = -1,
      isFunc = isFunction(object),
      methodNames = functions(source),
      length = methodNames.length;

  while (++index < length) {
    var methodName = methodNames[index],
        func = object[methodName] = source[methodName];

    if (isFunc) {
      object.prototype[methodName] = (function(func) {
        return function() {
          var args = [this.__wrapped__];
          push.apply(args, arguments);

          var result = func.apply(object, args);
          if (this.__chain__) {
            result = new object(result);
            result.__chain__ = true;
          }
          return result;
        };
      }(func));
    }
  }
}

module.exports = mixin;
