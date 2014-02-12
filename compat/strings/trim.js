/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var charsLeftIndex = require('../internals/charsLeftIndex'),
    charsRightIndex = require('../internals/charsRightIndex'),
    isNative = require('../internals/isNative'),
    trimmedLeftIndex = require('../internals/trimmedLeftIndex'),
    trimmedRightIndex = require('../internals/trimmedRightIndex');

/** Used to detect and test whitespace */
var whitespace = (
  // whitespace
  ' \t\x0B\f\xA0\ufeff' +

  // line terminators
  '\n\r\u2028\u2029' +

  // unicode category "Zs" space separators
  '\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000'
);

/**
 * A fallback implementation of `trim` to remove leading and trailing
 * whitespace or specified characters from `string`.
 *
 * @private
 * @param {string} string The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @returns {string} Returns the trimmed string.
 */
function shimTrim(string, chars) {
  string = string == null ? '' : String(string);
  if (!string) {
    return string;
  }
  if (chars == null) {
    return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
  }
  chars = String(chars);
  return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
}

/** Used for native method references */
var stringProto = String.prototype;

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeTrim = isNative(nativeTrim = stringProto.trim) && !nativeTrim.call(whitespace) && nativeTrim;

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @static
 * @memberOf _
 * @category Strings
 * @param {string} string The string to trim.
 * @param {string} [chars=whitespace] The characters to trim.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  fred  ');
 * // => 'fred'
 *
 * _.trim('-_-fred-_-', '_-');
 * // => 'fred'
 */
var trim = !nativeTrim ? shimTrim : function(string, chars) {
  if (string == null) {
    return '';
  }
  return chars == null ? nativeTrim.call(string) : shimTrim(string, chars);
};

module.exports = trim;
