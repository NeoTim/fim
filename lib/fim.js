'use strict';

var Module = require('module');
var overrideModuleWrapper = require('./override-module-wrapper');

module.exports = function kuire(parentModule, id) {
  var moduleId = Module._resolveFilename(id, parentModule);
  var newModule = new Module(moduleId, parentModule);

  overrideModuleWrapper();
  newModule.load(newModule.id);

  return newModule.exports;
};
