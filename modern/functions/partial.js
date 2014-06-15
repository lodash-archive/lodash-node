/**
 * Lo-Dash 2.5.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var createWrapper = require('../internals/createWrapper'),
    slice = require('../arrays/slice');

/** Used to compose bitmasks for wrapper metadata */
var PARTIAL_FLAG = 16;

/** Used as the semantic version number */
var version = '2.5.0-pre';

/** Used as the property name for wrapper metadata */
var expando = '__lodash@' + version + '__';

/**
 * Creates a function that invokes `func` with any additional `partial` arguments
 * prepended to those provided to the new function. This method is similar to
 * `_.bind` except it does **not** alter the `this` binding.
 *
 * Note: This method does not set the `length` property of partially applied
 * functions.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} [args] The arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 * @example
 *
 * var greet = function(greeting, name) { return greeting + ' ' + name; };
 * var sayHelloTo = _.partial(greet, 'hello');
 * sayHelloTo('fred');
 * // => 'hello fred'
 */
function partial(func) {
  if (func) {
    var arity = func[expando] ? func[expando][2] : func.length,
        partialArgs = slice(arguments, 1);

    arity -= partialArgs.length;
  }
  return createWrapper(func, PARTIAL_FLAG, arity, null, partialArgs);
}

module.exports = partial;
