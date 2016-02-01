'use strict';

var fim = require('./fim');

module.exports = function(id) {
  return fim(module.parent, id);
};
