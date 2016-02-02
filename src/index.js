'use strict';

let Module = require('module');

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
  let moduleId = Module._resolveFilename(id, parentModule);
  let mod = new Module(moduleId, parentModule);

  mod.load(mod.id);

  return mod.exports;
}

/**
 * To override the default module wrapper
 * @return null
 * @private
 */
function overrideModuleWrapper() {
  let str = `
    Object.defineProperty(module.exports, '__get__', {
      enumerable: true,
      writable: true,
      value: function(item) {
        if (typeof item !== 'string') {
          throw new Error('shoul pass a string');
        }
        return eval(item);
      }
    });
  `;

  Module.wrapper[1] = str + Module.wrapper[1];
}
