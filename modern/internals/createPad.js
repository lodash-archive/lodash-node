/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var repeat = require('../strings/repeat');

/** Native method shortcuts */
var ceil = Math.ceil;

/**
 * Creates the pad required for `string` based on the given padding length.
 * The `chars` string may be truncated if the number of padding characters
 * exceeds the padding length.
 *
 * @private
 * @param {string} string The string to create padding for.
 * @param {number} [length=0] The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the pad for `string`.
 */
function createPad(string, length, chars) {
  var strLength = string.length;
  length |= 0;

  if (strLength >= length) {
    return '';
  }
  var padLength = length - strLength;
  chars = chars == null ? ' ' : String(chars);
  return repeat(chars, ceil(padLength / chars.length)).slice(0, padLength);
}

module.exports = createPad;
