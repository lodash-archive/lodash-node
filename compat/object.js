/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

module.exports = {
  'assign': require('./object/assign'),
  'clone': require('./object/clone'),
  'cloneDeep': require('./object/cloneDeep'),
  'create': require('./object/create'),
  'defaults': require('./object/defaults'),
  'extend': require('./object/assign'),
  'findKey': require('./object/findKey'),
  'findLastKey': require('./object/findLastKey'),
  'forIn': require('./object/forIn'),
  'forInRight': require('./object/forInRight'),
  'forOwn': require('./object/forOwn'),
  'forOwnRight': require('./object/forOwnRight'),
  'functions': require('./object/functions'),
  'has': require('./object/has'),
  'invert': require('./object/invert'),
  'isArguments': require('./object/isArguments'),
  'isArray': require('./object/isArray'),
  'isBoolean': require('./object/isBoolean'),
  'isDate': require('./object/isDate'),
  'isElement': require('./object/isElement'),
  'isEmpty': require('./object/isEmpty'),
  'isEqual': require('./object/isEqual'),
  'isError': require('./object/isError'),
  'isFinite': require('./object/isFinite'),
  'isFunction': require('./object/isFunction'),
  'isNaN': require('./object/isNaN'),
  'isNull': require('./object/isNull'),
  'isNumber': require('./object/isNumber'),
  'isObject': require('./object/isObject'),
  'isPlainObject': require('./object/isPlainObject'),
  'isRegExp': require('./object/isRegExp'),
  'isString': require('./object/isString'),
  'isUndefined': require('./object/isUndefined'),
  'keys': require('./object/keys'),
  'keysIn': require('./object/keysIn'),
  'mapValues': require('./object/mapValues'),
  'merge': require('./object/merge'),
  'methods': require('./object/functions'),
  'omit': require('./object/omit'),
  'pairs': require('./object/pairs'),
  'pick': require('./object/pick'),
  'transform': require('./object/transform'),
  'values': require('./object/values'),
  'valuesIn': require('./object/valuesIn')
};
