/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var isNative = require('./internals/isNative');

/** Used to detect functions containing a `this` reference */
var reThis = /\bthis\b/;

/** Used for native method references */
var objectProto = Object.prototype;

/** Used to detect DOM support */
var document = (document = global.window) && document.document;

/** Native method shortcuts */
var hasOwnProperty = objectProto.hasOwnProperty,
    propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * An object used to flag environments features.
 *
 * @static
 * @memberOf _
 * @type Object
 */
var support = {};

(function(x) {

  for (var argsKey in arguments) { }

  /**
   * Detect if functions can be decompiled by `Function#toString`
   * (all but PS3 and older Opera mobile browsers; forced `false` for Windows 8 apps).
   *
   * @memberOf _.support
   * @type boolean
   */
  support.funcDecomp = !isNative(global.WinRTError) && reThis.test(function() { return this; });

  /**
   * Detect if `Function#name` is supported (all but IE).
   *
   * @memberOf _.support
   * @type boolean
   */
  support.funcNames = typeof Function.name == 'string';

  /**
   * Detect if the DOM is supported.
   *
   * @memberOf _.support
   * @type boolean
   */
  try {
    support.dom = document.createDocumentFragment().nodeType === 11;
  } catch(e) {
    support.dom = false;
  }

  /**
   * Detect if `arguments` object indexes are non-enumerable.
   *
   * In Firefox < 4, IE < 9, PhantomJS, and Safari < 5.1 `arguments` object
   * indexes are non-enumerable. Chrome < 25 and Node.js < 0.11.0 treat
   * `arguments` object indexes as non-enumerable and fail `hasOwnProperty`
   * checks for indexes that exceed their function's formal parameters with
   * associated values of `0`.
   *
   * @memberOf _.support
   * @type boolean
   */
  try {
    support.nonEnumArgs = !(argsKey == '1' && hasOwnProperty.call(arguments, argsKey) &&
      propertyIsEnumerable.call(arguments, argsKey));
  } catch(e) {
    support.nonEnumArgs = true;
  }
}(0, 0));

module.exports = support;
