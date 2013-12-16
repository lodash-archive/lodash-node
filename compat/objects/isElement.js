/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isNode = require('../internals/isNode'),
    isPlainObject = require('./isPlainObject'),
    support = require('../support'),
    toString = require('../internals/toString');

/**
 * Checks if `value` is a DOM element.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if the `value` is a DOM element, else `false`.
 * @example
 *
 * _.isElement(document.body);
 * // => true
 */
function isElement(value) {
  return value && typeof value == 'object' && value.nodeType === 1 &&
    (support.nodeClass ? toString.call(value).indexOf('Element') > -1 : isNode(value)) || false;
}
// fallback for environments without DOM support
if (!support.dom) {
  isElement = function(value) {
    return value && typeof value == 'object' && value.nodeType === 1 &&
      !isPlainObject(value) || false;
  };
}

module.exports = isElement;
