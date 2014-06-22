/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

module.exports = {
  'all': require('./collection/every'),
  'any': require('./collection/some'),
  'at': require('./collection/at'),
  'collect': require('./collection/map'),
  'contains': require('./collection/contains'),
  'countBy': require('./collection/countBy'),
  'detect': require('./collection/find'),
  'each': require('./collection/forEach'),
  'eachRight': require('./collection/forEachRight'),
  'every': require('./collection/every'),
  'filter': require('./collection/filter'),
  'find': require('./collection/find'),
  'findLast': require('./collection/findLast'),
  'findWhere': require('./collection/findWhere'),
  'foldl': require('./collection/reduce'),
  'foldr': require('./collection/reduceRight'),
  'forEach': require('./collection/forEach'),
  'forEachRight': require('./collection/forEachRight'),
  'groupBy': require('./collection/groupBy'),
  'include': require('./collection/contains'),
  'indexBy': require('./collection/indexBy'),
  'inject': require('./collection/reduce'),
  'invoke': require('./collection/invoke'),
  'map': require('./collection/map'),
  'max': require('./collection/max'),
  'min': require('./collection/min'),
  'partition': require('./collection/partition'),
  'pluck': require('./collection/pluck'),
  'reduce': require('./collection/reduce'),
  'reduceRight': require('./collection/reduceRight'),
  'reject': require('./collection/reject'),
  'sample': require('./collection/sample'),
  'select': require('./collection/filter'),
  'shuffle': require('./collection/shuffle'),
  'size': require('./collection/size'),
  'some': require('./collection/some'),
  'sortBy': require('./collection/sortBy'),
  'toArray': require('./collection/toArray'),
  'where': require('./collection/where')
};
