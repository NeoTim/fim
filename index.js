'use strict';

var Module = require('module');

module.exports = fim;

/**
 * fim
 * @param  {String} id
 * @return {Object} module.exports
 */
function fim(id) {
  overrideModuleWrapper();
  return load(module.parent, id);
}

/**
 * load module by moduleId
 * @param  {Object} parentModule
 * @param  {String} id
 * @return {Object} something to exports
 * @private
 */
function load(parentModule, id) {
  var moduleId = Module._resolveFilename(id, parentModule);
  var mod = new Module(moduleId, parentModule);

  mod.load(mod.id);

  return mod.exports;
}

/**
 * To override the default module wrapper
 * @return null
 * @private
 */
function overrideModuleWrapper() {
  var str = '\n    Object.defineProperty(module.exports, \'__get__\', {\n      enumerable: true,\n      writable: true,\n      value: function(item) {\n        if (typeof item !== \'string\') {\n          throw new Error(\'shoul pass a string\');\n        }\n        return eval(item);\n      }\n    });\n  ';

  Module.wrapper[1] = str + Module.wrapper[1];
}