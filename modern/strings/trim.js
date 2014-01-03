/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isNative = require('../internals/isNative'),
    trimmedLeftIndex = require('../internals/trimmedLeftIndex'),
    trimmedRightIndex = require('../internals/trimmedRightIndex');

/** Used to detect and test whitespace (unicode 6.3.0) */
var whitespace = (
  // whitespace
  ' \t\x0B\f\xA0\ufeff' +

  // line terminators
  '\n\r\u2028\u2029' +

  // unicode category "Zs" space separators
  '\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000'
);

/** Used for native method references */
var stringProto = String.prototype;

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeTrim = isNative(nativeTrim = stringProto.trim) && nativeTrim;

/**
 * Removes leading and trailing whitespace from a given string.
 *
 * @static
 * @memberOf _
 * @category Strings
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 * @example
 *
 * _.trim('  fred  ');
 * // => 'fred'
 */
function trim(string) {
  return string == null ? '' : nativeTrim.call(string);
}
// fallback for environments without a proper `String#trim`
if (!nativeTrim || nativeTrim.call(whitespace)) {
  trim = function(string) {
    string = string == null ? '' : String(string);
    return string
      ? string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1)
      : string;
  };
}

module.exports = trim;
