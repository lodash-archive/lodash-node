/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var assign = require('../objects/assign'),
    slice = require('../arrays/slice');

/**
 * Creates a function that assigns own enumerable properties of source
 * object(s) to the destination object executing the callback to produce
 * the assigned values. The callback is invoked with five arguments;
 * (objectValue, sourceValue, key, object, source).
 *
 * @private
 * @param {Function} [callback] The function to customize assigning values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(callback) {
  return function(object) {
    if (!object) {
      return object;
    }
    var args = slice(arguments);
    args.push(callback);
    return assign.apply(null, args);
  };
}

module.exports = createAssigner;
