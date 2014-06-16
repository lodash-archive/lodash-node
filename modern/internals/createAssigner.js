/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCreateCallback = require('./baseCreateCallback');

/**
 * Creates a function that assigns properties of source object(s) to a given
 * destination object.
 *
 * @private
 * @param {Function} assigner The function to customize assigning values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return function(object) {
    var args = arguments,
        length = args.length;

    if (object == null || length < 2) {
      return object;
    }
    // enables use as a callback for functions like `_.reduce`
    var type = typeof args[2];
    if ((type == 'number' || type == 'string') && args[3] && args[3][args[2]] === args[1]) {
      length = 2;
    }
    // juggle arguments
    if (length > 3 && typeof args[length - 2] == 'function') {
      var callback = baseCreateCallback(args[--length - 1], args[length--], 5);
    } else if (length > 2 && typeof args[length - 1] == 'function') {
      callback = args[--length];
    }
    var index = 0;
    while (++index < length) {
      assigner(object, args[index], callback);
    }
    return object;
  };
}

module.exports = createAssigner;
