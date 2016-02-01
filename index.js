'use strict';

var kuire = require('./lib/index');
var demo = kuire('./demo');

console.log(demo);
demo.__get__('world')();
