/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCreateCallback = require('./baseCreateCallback'),
    isArguments = require('../objects/isArguments'),
    iteratorTemplate = require('./iteratorTemplate'),
    objectTypes = require('./objectTypes');

/** Used to fix the JScript [[DontEnum]] bug */
var shadowedProps = [
  'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable',
  'toLocaleString', 'toString', 'valueOf'
];

/** `Object#toString` result shortcuts */
var arrayClass = '[object Array]',
    boolClass = '[object Boolean]',
    dateClass = '[object Date]',
    errorClass = '[object Error]',
    funcClass = '[object Function]',
    numberClass = '[object Number]',
    objectClass = '[object Object]',
    regexpClass = '[object RegExp]',
    stringClass = '[object String]';

/** Used for native method references */
var errorProto = Error.prototype,
    objectProto = Object.prototype,
    stringProto = String.prototype;

/** Used to resolve the internal [[Class]] of values */
var toString = objectProto.toString;

/** Native method shortcuts */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to avoid iterating non-enumerable properties in IE < 9 */
var nonEnumProps = {};
nonEnumProps[arrayClass] = nonEnumProps[dateClass] = nonEnumProps[numberClass] = { 'constructor': true, 'toLocaleString': true, 'toString': true, 'valueOf': true };
nonEnumProps[boolClass] = nonEnumProps[stringClass] = { 'constructor': true, 'toString': true, 'valueOf': true };
nonEnumProps[errorClass] = nonEnumProps[funcClass] = nonEnumProps[regexpClass] = { 'constructor': true, 'toString': true };
nonEnumProps[objectClass] = { 'constructor': true };

(function() {
  var length = shadowedProps.length;
  while (length--) {
    var key = shadowedProps[length];
    for (var className in nonEnumProps) {
      if (hasOwnProperty.call(nonEnumProps, className) && !hasOwnProperty.call(nonEnumProps[className], key)) {
        nonEnumProps[className][key] = false;
      }
    }
  }
}());

/**
 * Creates compiled iteration functions.
 *
 * @private
 * @param {Object} [options] The compile options object.
 * @param {string} [options.args] A comma separated string of iteration function arguments.
 * @param {string} [options.init] The string representation of the initial `result` value.
 * @param {string} [options.top] Code to execute before the iteration branches.
 * @param {string} [options.loop] Code to execute in the object loop.
 * @param {boolean} [options.useHas] Specify using `hasOwnProperty` checks in the object loop.
 * @returns {Function} Returns the compiled function.
 */
function createIterator(options) {
  options.shadowedProps = shadowedProps;

  // create the function factory
  var factory = Function(
      'baseCreateCallback, errorClass, errorProto, hasOwnProperty, isArguments, ' +
      'objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString',
    'return function(' + options.args + ') {\n' + iteratorTemplate(options) + '\n}'
  );

  // return the compiled function
  return factory(
    baseCreateCallback, errorClass, errorProto, hasOwnProperty, isArguments,
    objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString
  );
}

module.exports = createIterator;
