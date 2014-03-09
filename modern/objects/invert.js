/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var keys = require('./keys');

/** Used for native method references */
var objectProto = Object.prototype;

/** Native method shortcuts */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of the inverted keys and values of the given
 * object. If the given object contains duplicate values, subsequent values
 * will overwrite property assignments of previous values unless `multiValue`
 * is `true`.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {Object} object The object to invert.
 * @param {boolean} [multiValue=false] Allow multiple values per key.
 * @returns {Object} Returns the new inverted object.
 * @example
 *
 * _.invert({ 'first': 'fred', 'second': 'barney' });
 * // => { 'fred': 'first', 'barney': 'second' }
 *
 * // without `multiValue`
 * _.invert({ 'first': 'fred', 'second': 'barney', 'third': 'fred' });
 * // => { 'fred': 'third', 'barney': 'second' }
 *
 * // with `multiValue`
 * _.invert({ 'first': 'fred', 'second': 'barney', 'third': 'fred' }, true);
 * // => { 'fred': ['first', 'third'], 'barney': ['second'] }
 */
function invert(object, multiValue) {
  var index = -1,
      props = keys(object),
      length = props.length,
      result = {};

  while (++index < length) {
    var key = props[index],
        value = object[key];

    if (multiValue) {
      if (hasOwnProperty.call(result, value)) {
        result[value].push(key);
      } else {
        result[value] = [key];
      }
    }
    else {
      result[value] = key;
    }
  }
  return result;
}

module.exports = invert;
