/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeMax = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} partialArg An array of arguments to prepend to those provided.
 * @param {Array} partialHolders An array of `partialArgs` placeholder indexes.
 * @param {Array|Object} args The provided arguments.
 * @returns {Array} Returns a new array of composed arguments.
 */
function composeArgs(partialArgs, partialHolders, args) {
  var index = -1,
      length = partialHolders.length,
      leftIndex = -1,
      leftLength = partialArgs.length,
      argsLength = nativeMax(args.length - length, 0),
      result = Array(argsLength + leftLength);

  while (++leftIndex < leftLength) {
    result[leftIndex] = partialArgs[leftIndex];
  }
  while (++index < length) {
    result[partialHolders[index]] = args[index];
  }
  while (length < argsLength) {
    result[leftIndex++] = args[length++];
  }
  return result;
}

module.exports = composeArgs;
