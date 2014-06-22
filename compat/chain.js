/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

module.exports = {
  'chain': require('./chain/chain'),
  'lodash': require('./chain/lodash'),
  'tap': require('./chain/tap'),
  'toJSON': require('./chain/wrapperValueOf'),
  'value': require('./chain/wrapperValueOf'),
  'wrapperChain': require('./chain/wrapperChain'),
  'wrapperToString': require('./chain/wrapperToString'),
  'wrapperValueOf': require('./chain/wrapperValueOf')
};
