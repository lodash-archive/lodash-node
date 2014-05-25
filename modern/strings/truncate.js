/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isObject = require('../objects/isObject'),
    isRegExp = require('../objects/isRegExp');

/** Used to match `RegExp` flags from their coerced string values */
var reFlags = /\w*$/;

/**
 * Truncates `string` if it is longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the omission
 * string which defaults to "...".
 *
 * @static
 * @memberOf _
 * @category Strings
 * @param {string} [string=''] The string to truncate.
 * @param {Object|number} [options] The options object or maximum string length.
 * @param {number} [options.length=30] The maximum string length.
 * @param {string} [options.omission='...'] The string used to indicate text is omitted.
 * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
 * @returns {string} Returns the truncated string.
 * @example
 *
 * _.truncate('hi-diddly-ho there, neighborino');
 * // => 'hi-diddly-ho there, neighbo...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', 24);
 * // => 'hi-diddly-ho there, n...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', { 'length': 24, 'separator': ' ' });
 * // => 'hi-diddly-ho there,...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', { 'length': 24, 'separator': /,? +/ });
 * //=> 'hi-diddly-ho there...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', { 'omission': ' [...]' });
 * // => 'hi-diddly-ho there, neig [...]'
 */
function truncate(string, options) {
  var length = 30,
      omission = '...';

  if (options && isObject(options)) {
    var separator = 'separator' in options ? options.separator : separator;
    length = 'length' in options ? +options.length || 0 : length;
    omission = 'omission' in options ? String(options.omission) : omission;
  }
  else if (options != null) {
    length = +options || 0;
  }
  string = string == null ? '' : String(string);
  if (length >= string.length) {
    return string;
  }
  var end = length - omission.length;
  if (end < 1) {
    return omission;
  }
  var result = string.slice(0, end);
  if (separator == null) {
    return result + omission;
  }
  if (isRegExp(separator)) {
    if (string.slice(end).search(separator)) {
      var match,
          newEnd,
          substring = string.slice(0, end);

      if (!separator.global) {
        separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
      }
      separator.lastIndex = 0;
      while ((match = separator.exec(substring))) {
        newEnd = match.index;
      }
      result = result.slice(0, newEnd == null ? end : newEnd);
    }
  } else if (string.indexOf(separator, end) != end) {
    var index = result.lastIndexOf(separator);
    if (index > -1) {
      result = result.slice(0, index);
    }
  }
  return result + omission;
}

module.exports = truncate;
