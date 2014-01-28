/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseIsEqual = require('../internals/baseIsEqual'),
    isObject = require('../objects/isObject'),
    keys = require('../objects/keys');

/** Used for native method references */
var objectProto = Object.prototype;

/** Native method shortcuts */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a "_.where" style function, which performs a deep comparison
 * between a given object and the `props` object, returning `true` if the
 * given object has equivalent property values, else `false`.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @param {Object} props The object of property values to match.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var characters = [
 *   { 'name': 'fred',   'age': 40 },
 *   { 'name': 'barney', 'age': 36 }
 * ];
 *
 * var matchAge = _.match({ 'age': 36 });
 *
 * _.filter(characters, matchAge);
 * // => [{ 'name': 'barney', 'age': 36 }]
 *
 * _.find(characters, matchAge);
 * // => { 'name': 'barney', 'age': 36 }
 */
function match(source) {
  source || (source = {});

  var props = keys(source),
      key = props[0],
      a = source[key];

  // fast path the common case of providing an object with a single
  // property containing a primitive value
  if (props.length == 1 && a === a && !isObject(a)) {
    return function(object) {
      if (!hasOwnProperty.call(object, key)) {
        return false;
      }
      var b = object[key];
      return a === b && (a !== 0 || (1 / a == 1 / b));
    };
  }
  return function(object) {
    var length = props.length,
        result = false;

    while (length--) {
      var key = props[length];
      if (!(result = hasOwnProperty.call(object, key) &&
            baseIsEqual(object[key], source[key], null, true))) {
        break;
      }
    }
    return result;
  };
}

module.exports = match;
