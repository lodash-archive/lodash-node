/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var assignDefaultsOwn = require('./assignDefaultsOwn'),
    createAssigner = require('./createAssigner');

/**
 * This method is like `_.defaults` except that it ignores inherited
 * property values when checking if a property is `undefined`.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns the destination object.
 */
var defaultsOwn = createAssigner(assignDefaultsOwn);

module.exports = defaultsOwn;
