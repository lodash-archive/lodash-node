/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

module.exports = {
  'callback': require('./utility/callback'),
  'constant': require('./utility/constant'),
  'identity': require('./utility/identity'),
  'matches': require('./utility/matches'),
  'mixin': require('./utility/mixin'),
  'noConflict': require('./utility/noConflict'),
  'noop': require('./utility/noop'),
  'now': require('./utility/now'),
  'parseInt': require('./utility/parseInt'),
  'property': require('./utility/property'),
  'random': require('./utility/random'),
  'range': require('./utility/range'),
  'result': require('./utility/result'),
  'times': require('./utility/times'),
  'uniqueId': require('./utility/uniqueId')
};
