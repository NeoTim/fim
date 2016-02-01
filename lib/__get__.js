'use strict';

function __get__(item) {
  if (typeof item !== 'string') {
    throw new Error('shoul pass a string');
  }

  return eval(item);
}

module.exports = __get__;
