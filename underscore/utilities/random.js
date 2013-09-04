/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** Native method shortcuts */
var floor = Math.floor;

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeMin = Math.min,
    nativeRandom = Math.random;

/**
 * Produces a random number between `min` and `max` (inclusive). If only one
 * argument is provided a number between `0` and the given number will be
 * returned.
 *
 * @static
 * @memberOf _
 * @category Utilities
 * @param {number} [min=0] The minimum possible value.
 * @param {number} [max=1] The maximum possible value.
 * @returns {number} Returns a random number.
 * @example
 *
 * _.random(0, 5);
 * // => a number between 0 and 5
 *
 * _.random(5);
 * // => also a number between 0 and 5
 */
function random(min, max) {
  if (min == null && max == null) {
    max = 1;
  }
  min = +min || 0;
  if (max == null) {
    max = min;
    min = 0;
  } else {
    max = +max || 0;
  }
  var rand = nativeRandom();
  return (min % 1 || max % 1)
    ? min + nativeMin(rand * (max - min + parseFloat('1e-' + ((rand +'').length - 1))), max)
    : min + floor(rand * (max - min + 1));
}

module.exports = random;
