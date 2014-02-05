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
var PARTIAL_RIGHT_FLAG = 32;

/** Used as the semantic version number */
var version = '2.4.1';

/** Used as the property name for wrapper metadata */
var expando = '__lodash@' + version + '__';

/**
 * This method is like `_.partial` except that `partial` arguments are
 * appended to those provided to the new function.
 *
 * Note: This method does not set the `length` property of partially applied
 * functions.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} [args] Arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 * @example
 *
 * var defaultsDeep = _.partialRight(_.merge, _.defaults);
 *
 * var options = {
 *   'variable': 'data',
 *   'imports': { 'jq': $ }
 * };
 *
 * defaultsDeep(options, _.templateSettings);
 *
 * options.variable
 * // => 'data'
 *
 * options.imports
 * // => { '_': _, 'jq': $ }
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
