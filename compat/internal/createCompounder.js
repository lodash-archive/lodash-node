/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="node" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var deburrLetter = require('./deburrLetter');

/** Used to match latin-1 supplement letters */
var reLatin1 = /[\xC0-\xFF]/g;

/** Used to match words to create compound words */
var reWords = /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g;

/**
 * Creates a function that produces compound words out of the words in a
 * given string.
 *
 * @private
 * @param {Function} callback The function called to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    var index = -1,
        words = string != null && String(string).replace(reLatin1, deburrLetter).match(reWords),
        length = words ? words.length : 0,
        result = '';

    while (++index < length) {
      result = callback(result, words[index], index, words);
    }
    return result;
  };
}

module.exports = createCompounder;
