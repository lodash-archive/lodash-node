/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var reNative = require('./internals/reNative');

/** Used for native method references */
var objectProto = Object.prototype;

/** Native method shortcuts */
var toString = objectProto.toString;

/* Native method shortcuts for methods with the same name as other `lodash` methods */
var nativeBind = reNative.test(nativeBind = toString.bind) && nativeBind;

/** Detect various environments */
var isIeOpera = reNative.test(global.attachEvent),
    isV8 = nativeBind && !/\n|true/.test(nativeBind + isIeOpera);

/**
 * An object used to flag environments features.
 *
 * @static
 * @memberOf _
 * @type Object
 */
var support = {};

/**
 * Detect if `Function#bind` exists and is inferred to be fast (all but V8).
 *
 * @memberOf _.support
 * @type boolean
 */
support.fastBind = nativeBind && !isV8;

/**
 * Detect if `Function#name` is supported (all but IE).
 *
 * @memberOf _.support
 * @type boolean
 */
support.funcNames = typeof Function.name == 'string';

module.exports = support;
