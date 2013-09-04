/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var keys = require('../objects/keys'),
    reEscapedHtml = require('../internals/reEscapedHtml'),
    unescapeHtmlChar = require('../internals/unescapeHtmlChar');

/**
 * The inverse of `_.escape` this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to their
 * corresponding characters.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @param {string} string The string to unescape.
 * @returns {string} Returns the unescaped string.
 * @example
 *
 * _.unescape('Moe, Larry &amp; Curly');
 * // => 'Moe, Larry & Curly'
 */
function unescape(string) {
  return string == null ? '' : String(string).replace(reEscapedHtml, unescapeHtmlChar);
}

module.exports = unescape;
