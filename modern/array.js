/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

module.exports = {
  'chunk': require('./array/chunk'),
  'compact': require('./array/compact'),
  'difference': require('./array/difference'),
  'drop': require('./array/drop'),
  'dropRight': require('./array/dropRight'),
  'dropRightWhile': require('./array/dropRightWhile'),
  'dropWhile': require('./array/dropWhile'),
  'findIndex': require('./array/findIndex'),
  'findLastIndex': require('./array/findLastIndex'),
  'first': require('./array/first'),
  'flatten': require('./array/flatten'),
  'head': require('./array/first'),
  'indexOf': require('./array/indexOf'),
  'initial': require('./array/initial'),
  'intersection': require('./array/intersection'),
  'last': require('./array/last'),
  'lastIndexOf': require('./array/lastIndexOf'),
  'object': require('./array/zipObject'),
  'pull': require('./array/pull'),
  'pullAt': require('./array/pullAt'),
  'remove': require('./array/remove'),
  'rest': require('./array/rest'),
  'slice': require('./array/slice'),
  'sortedIndex': require('./array/sortedIndex'),
  'tail': require('./array/rest'),
  'take': require('./array/take'),
  'takeRight': require('./array/takeRight'),
  'takeRightWhile': require('./array/takeRightWhile'),
  'takeWhile': require('./array/takeWhile'),
  'union': require('./array/union'),
  'uniq': require('./array/uniq'),
  'unique': require('./array/uniq'),
  'unzip': require('./array/zip'),
  'without': require('./array/without'),
  'xor': require('./array/xor'),
  'zip': require('./array/zip'),
  'zipObject': require('./array/zipObject')
};
