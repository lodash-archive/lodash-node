/**
 * Lo-Dash 2.5.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var baseAssign = require('../internals/baseAssign'),
    createAssigner = require('../internals/createAssigner');

/**
 * Assigns own enumerable properties of source object(s) to the destination
 * object. Subsequent sources overwrite property assignments of previous
 * sources. If a callback is provided it is executed to produce the assigned
 * values. The callback is bound to `thisArg` and invoked with five arguments;
 * (objectValue, sourceValue, key, object, source).
 *
 * @static
 * @memberOf _
 * @alias extend
 * @category Objects
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @param {Function} [callback] The function to customize assigning values.
 * @param {*} [thisArg] The `this` binding of `callback`.
 * @returns {Object} Returns the destination object.
 * @example
 *
 * _.assign({ 'name': 'fred' }, { 'age': 40 }, { 'employer': 'slate' });
 * // => { 'name': 'fred', 'age': 40, 'employer': 'slate' }
 *
 * var defaults = _.partialRight(_.assign, function(value, other) {
 *   return typeof value == 'undefined' ? other : value;
 * });
 *
 * defaults({ 'name': 'barney' }, { 'age': 36 }, { 'name': 'fred', 'employer': 'slate' });
 * // => { 'name': 'barney', 'age': 36, 'employer': 'slate' }
 */
var assign = createAssigner(baseAssign);

module.exports = assign;
