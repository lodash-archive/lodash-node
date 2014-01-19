/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var support = require('../support');

/**
 * The template used to create iterator functions.
 *
 * @private
 * @param {Object} data The data object used to populate the text.
 * @returns {string} Returns the interpolated text.
 */
var iteratorTemplate = function(obj) {

  var __p = 'var result = ' +
  (obj.init) +
  ';\nif (!isObject(object)) {\n  return result;\n}';
   if (support.nonEnumArgs) {
  __p += '\nvar length = object.length;\nif (length && isArguments(object)) {\n  key = -1;\n  while (++key < length) {\n    key += \'\';\n    ' +
  (obj.loop) +
  ';\n  }\n  return result;\n}';
   }

   if (support.enumPrototypes) {
  __p += '\nvar skipProto = typeof object == \'function\';\n';
   }

   if (support.enumErrorProps) {
  __p += '\nvar skipErrorProps = object === errorProto || object instanceof Error;\n';
   }

  var conditions = [];
  if (support.enumPrototypes) { conditions.push('!(skipProto && key == \'prototype\')'); }
  if (support.enumErrorProps) { conditions.push('!(skipErrorProps && (key == \'message\' || key == \'name\'))'); }
  __p += '\nfor (var key in object) {\n';
    if (obj.useHas) { conditions.push('hasOwnProperty.call(object, key)'); }
    if (conditions.length) {
  __p += '  if (' +
  (conditions.join(' && ')) +
  ') {\n  ';
   }
  __p +=
  (obj.loop) +
  ';  ';
   if (conditions.length) {
  __p += '\n  }';
   }
  __p += '\n}\n';
   if (support.nonEnumShadows) {
  __p += '\nif (object !== objectProto) {\n  var ctor = object.constructor,\n      isProto = object === (ctor && ctor.prototype),\n      className = object === stringProto ? stringClass : object === errorProto ? errorClass : toString.call(object),\n      nonEnum = nonEnumProps[className];\n  ';
   for (var index = 0; index < 7; index++) {
  __p += '\n  key = \'' +
  (obj.shadowedProps[index]) +
  '\';\n  if ((!(isProto && nonEnum[key]) && hasOwnProperty.call(object, key))';
        if (!obj.useHas) {
  __p += ' || (!nonEnum[key] && object[key] !== objectProto[key])';
   }
  __p += ') {\n    ' +
  (obj.loop) +
  ';\n  }  ';
   }
  __p += '\n}';
   }
  __p += '\nreturn result;';

  return __p
};

module.exports = iteratorTemplate;
