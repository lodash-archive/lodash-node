/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var createPad = require('../internals/createPad');

/**
 * Pads `string` on the left side if it is shorter then the given padding
 * length. The `chars` string may be truncated if the number of padding
 * characters exceeds the padding length.
 *
 * @static
 * @memberOf _
 * @category Strings
 * @param {string} [string=''] The string to pad.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padded string.
 * @example
 *
 * _.padLeft('abc', 6);
 * // => '   abc'
 *
 * _.padLeft('abc', 6, '_-');
 * // => '_-_abc'
 *
 * _.padLeft('abc', 3);
 * // => 'abc'
 */
function padLeft(string, length, chars) {
  string = string == null ? '' : String(string);
  return createPad(string, length, chars) + string;
}

module.exports = padLeft;
