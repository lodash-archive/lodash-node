/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.1 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
var htmlUnescapes = require('./htmlUnescapes'),
    keys = require('../objects/keys');

/** Used to match HTML entities and HTML characters */
var reEscapedHtml = RegExp('(' + keys(htmlUnescapes).join('|') + ')', 'g');

module.exports = reEscapedHtml;
