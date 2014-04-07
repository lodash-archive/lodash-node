/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeMax = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} partialRightArgs An array of arguments to append to those provided.
 * @param {Array} partialHolders An array of `partialRightArgs` placeholder indexes.
 * @param {Array|Object} args The provided arguments.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(partialRightArgs, partialRightHolders, args) {
  var holdersIndex = -1,
      holdersLength = partialRightHolders.length,
      argsIndex = -1,
      argsLength = nativeMax(args.length - holdersLength, 0),
      rightIndex = -1,
      rightLength = partialRightArgs.length,
      result = Array(argsLength + rightLength);

  while (++argsIndex < argsLength) {
    result[argsIndex] = args[argsIndex];
  }
  var pad = argsIndex;
  while (++rightIndex < rightLength) {
    result[pad + rightIndex] = partialRightArgs[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    result[pad + partialRightHolders[holdersIndex]] = args[argsIndex++];
  }
  return result;
}

module.exports = composeArgsRight;
