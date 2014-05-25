/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="node" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * Compiles a function from `source` using the `varNames` and `varValues`
 * pairs to import free variables into the compiled function. If `sourceURL`
 * is provided it is used as the sourceURL for the compiled function.
 *
 * @private
 * @param {string} source The source to compile.
 * @param {Array} varNames An array of free variable names.
 * @param {Array} varValues An array of free variable values.
 * @param {string} [sourceURL=''] The sourceURL of the source.
 * @returns {Function} Returns the compiled function.
 */
function compileFunction(source, varNames, varValues, sourceURL) {
  sourceURL = sourceURL ? ('\n/*\n//# sourceURL=' + sourceURL + '\n*/') : '';
  try {
    // provide the compiled function's source by its `toString` method or
    // the `source` property as a convenience for inlining compiled templates
    var result = Function(varNames, 'return ' + source + sourceURL).apply(undefined, varValues);
    result.source = source;
  } catch(e) {
    e.source = source;
    throw e;
  }
  return result;
}

module.exports = compileFunction;
