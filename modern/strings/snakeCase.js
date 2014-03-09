/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var createCompounder = require('../internals/createCompounder');

/**
 * Converts `string` to snake case.
 * See [Wikipedia](http://en.wikipedia.org/wiki/Snake_case) for more details.
 *
 * @static
 * @memberOf _
 * @category Strings
 * @param {string} [string=''] The string to snake case.
 * @returns {string} Returns the snake cased string.
 * @example
 *
 * _.snakeCase('Hello world');
 * // => 'hello_world'
 *
 * _.snakeCase('hello-world');
 * // => 'hello_world'
 *
 * _.snakeCase('helloWorld');
 * // => 'hello_world'
 */
var snakeCase = createCompounder(function(result, word, index) {
  return result + (index ? '_' : '') + word.toLowerCase();
});

module.exports = snakeCase;
