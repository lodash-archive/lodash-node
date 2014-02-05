/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var createWrapper = require('../internals/createWrapper'),
    slice = require('../arrays/slice');

/** Used to compose bitmasks for wrapper metadata */
var BIND_FLAG = 1,
    PARTIAL_FLAG = 16;

/** Used as the semantic version number */
var version = '2.4.1';

/** Used as the property name for wrapper metadata */
var expando = '__lodash@' + version + '__';

/**
 * Creates a function that, when called, invokes `func` with the `this`
 * binding of `thisArg` and prepends any additional `bind` arguments to those
 * provided to the bound function.
 *
 * Note: Unlike native `Function#bind` this method does not set the `length`
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} func The function to bind.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {...*} [args] Arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * var func = function(greeting) {
 *   return greeting + ' ' + this.name;
 * };
 *
 * func = _.bind(func, { 'name': 'fred' }, 'hi');
 * func();
 * // => 'hi fred'
 */
function bind(func, thisArg) {
  if (arguments.length < 3) {
    return createWrapper(func, BIND_FLAG, null, thisArg);
  }
  if (func) {
    var arity = func[expando] ? func[expando][2] : func.length,
        partialArgs = slice(arguments, 2);

    arity -= partialArgs.length;
  }
  return createWrapper(func, BIND_FLAG | PARTIAL_FLAG, arity, thisArg, partialArgs);
}

module.exports = bind;
