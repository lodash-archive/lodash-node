/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Used to match HTML entities and HTML characters */
var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g;

/** Used to convert HTML entities to characters */
var htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&#96;': '`'
};

/**
 * Used by `unescape` to convert HTML entities to characters.
 *
 * @private
 * @param {string} match The matched character to unescape.
 * @returns {string} Returns the unescaped character.
 */
function unescapeHtmlChar(match) {
  return htmlUnescapes[match];
}

/**
 * The inverse of `_.escape`; this method converts the HTML entities
 * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to
 * their corresponding characters.
 *
 * Note: No other HTML entities are unescaped. To unescape additional HTML
 * entities use a third-party library like [_he_](http://mths.be/he).
 *
 * @static
 * @memberOf _
 * @category Strings
 * @param {string} string The string to unescape.
 * @returns {string} Returns the unescaped string.
 * @example
 *
 * _.unescape('fred, barney &amp; pebbles');
 * // => 'fred, barney & pebbles'
 */
function unescape(string) {
  if (string == null) {
    return '';
  }
  string = String(string);
  return string.indexOf(';') < 0 ? string : string.replace(reEscapedHtml, unescapeHtmlChar);
}

module.exports = unescape;
