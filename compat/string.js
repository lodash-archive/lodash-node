/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

module.exports = {
  'camelCase': require('./string/camelCase'),
  'capitalize': require('./string/capitalize'),
  'endsWith': require('./string/endsWith'),
  'escape': require('./string/escape'),
  'escapeRegExp': require('./string/escapeRegExp'),
  'kebabCase': require('./string/kebabCase'),
  'pad': require('./string/pad'),
  'padLeft': require('./string/padLeft'),
  'padRight': require('./string/padRight'),
  'repeat': require('./string/repeat'),
  'snakeCase': require('./string/snakeCase'),
  'startsWith': require('./string/startsWith'),
  'template': require('./string/template'),
  'templateSettings': require('./string/templateSettings'),
  'trim': require('./string/trim'),
  'trimLeft': require('./string/trimLeft'),
  'trimRight': require('./string/trimRight'),
  'trunc': require('./string/trunc'),
  'unescape': require('./string/unescape')
};
