# Fim

Test private method easy.


# Install

```bash
$ npm install fim --save-dev
```

# Usage

Imagine `foo.js` is a file to test.

```js
//foo.js

module.exports = foo;

// @public
function foo() {
  console.log('foo')
}

// @private
function bar() {
  console.log('bar')
}
```

To test private method `bar`:

```js
var fim = require('fim');
var foo = fim('./foo');

var bar = foo.__get__('bar');

```
