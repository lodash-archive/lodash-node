/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var createWrapper = require('../internal/createWrapper'),
    slice = require('../array/slice');

/** Used to compose bitmasks for wrapper metadata */
var PARTIAL_RIGHT_FLAG = 32;

/** Used as the semantic version number */
var version = '3.0.0-pre';

/** Used as the property name for wrapper metadata */
var expando = '__lodash@' + version + '__';

/**
 * This method is like `_.partial` except that partially applied arguments
 * are appended to those provided to the new function.
 *
 * Note: This method does not set the `length` property of partially applied
 * functions.
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} [args] The arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 * @example
 *
 * var greet = function(greeting, name) { return greeting + ' ' + name; };
 * var greetFred = _.partialRight(greet, 'fred');
 * greetFred('hello');
 * // => 'hello fred'
 *
 * // create a deep `_.defaults`
 * var defaultsDeep = _.partialRight(_.merge, function deep(value, other) {
 *   return _.merge(value, other, deep);
 * });
 *
 * var object = { 'a': { 'b': { 'c': 1 } } },
 *     source = { 'a': { 'b': { 'c': 2, 'd': 2 } } };
 *
 * defaultsDeep(object, source);
 * // => { 'a': { 'b': { 'c': 1, 'd': 2 } } }
 */
function partialRight(func) {
  if (func) {
    var arity = func[expando] ? func[expando][2] : func.length,
        partialRightArgs = slice(arguments, 1);

    arity -= partialRightArgs.length;
  }
  return createWrapper(func, PARTIAL_RIGHT_FLAG, arity, null, null, partialRightArgs);
}

module.exports = partialRight;
