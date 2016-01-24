# lodash-node v3.10.2

The compatibility & modern builds of [lodash](https://lodash.com/) exported as [Node.js](https://nodejs.org/) modules.

## Discontinued

This package has been discontinued in favor of [lodash@npm](https://github.com/lodash/lodash/tree/npm).

## Installation

Using npm:

```bash
$ {sudo -H} npm i -g npm
$ npm i --save lodash-node
```

In Node.js:

```js
// load the modern build
var _ = require('lodash-node');
// or the compatibility build
var _ = require('lodash-node/compat');
// or a method category
var array = require('lodash-node/modern/array');
// or a method
var chunk = require('lodash-node/compat/array/chunk');
```

See the [package source](https://github.com/lodash/lodash-node/tree/3.10.2) for more details.
