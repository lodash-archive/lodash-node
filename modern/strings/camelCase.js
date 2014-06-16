/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var createCompounder = require('../internals/createCompounder');

/** Used to detect words composed of all capital letters */
var reAllCaps = /^[A-Z]+$/;

/**
 * Converts `string` to camel case.
 * See [Wikipedia](http://en.wikipedia.org/wiki/CamelCase) for more details.
 *
 * @static
 * @memberOf _
 * @category Strings
 * @param {string} [string=''] The string to camel case.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Hello world');
 * // => 'helloWorld'
 *
 * _.camelCase('--hello-world');
 * // => 'helloWorld'
 *
 * _.camelCase('__hello_world__');
 * // => 'helloWorld'
 */
var camelCase = createCompounder(function(result, word, index) {
  if (!index && reAllCaps.test(word)) {
    return result + word.toLowerCase();
  }
  return result + (word.charAt(0)[index ? 'toUpperCase' : 'toLowerCase']() + word.slice(1));
});

module.exports = camelCase;
