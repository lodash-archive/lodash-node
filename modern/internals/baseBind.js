/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseCreate = require('./baseCreate'),
    composeArgs = require('./composeArgs'),
    isObject = require('../objects/isObject'),
    setData = require('./setData'),
    slice = require('../arrays/slice');

/**
 * The base implementation of `_.bind` that creates the bound function and
 * sets its meta data.
 *
 * @private
 * @param {Array} data The metadata array.
 * @returns {Function} Returns the new bound function.
 */
function baseBind(data) {
  var func = data[0],
      thisArg = data[3],
      partialArgs = data[4],
      partialHolders = data[6];

  function bound() {
    // `Function#bind` spec
    // http://es5.github.io/#x15.3.4.5
    if (partialArgs) {
      // avoid `arguments` object use disqualifying optimizations by
      // converting it to an array before passing it to `composeArgs`
      var index = -1,
           length = arguments.length,
           args = Array(length);

      while (++index < length) {
        args[index] = arguments[index];
      }
      args = composeArgs(partialArgs, partialHolders, args);
    }
    // mimic the constructor's `return` behavior
    // http://es5.github.io/#x13.2.2
    if (this instanceof bound) {
      // ensure `new bound` is an instance of `func`
      var thisBinding = baseCreate(func.prototype),
          result = func.apply(thisBinding, args || arguments);
      return isObject(result) ? result : thisBinding;
    }
    return func.apply(thisArg, args || arguments);
  }
  setData(bound, data);
  return bound;
}

module.exports = baseBind;
