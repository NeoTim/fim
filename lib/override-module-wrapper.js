'use strict';

var Module = require('module');
var __get__ = require('./__get__');

module.exports = function() {
  var str = 'Object.defineProperty(module.exports, \'__get__\',' +
    '{' +
    ' enumerable: true, value: ' +
    __get__.toString() +
    ', ' +
    'writable: true' + '}); ';
  Module.wrapper[1] = str + Module.wrapper[1];
};
