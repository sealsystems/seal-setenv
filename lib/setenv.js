'use strict';

/* eslint-disable no-process-env */
const setenv = function (key, value) {
  if (!key) {
    throw new Error('Key is missing.');
  }
  if (!value) {
    throw new Error('Value is missing');
  }

  switch (typeof value) {
    case 'string':
      process.env[key] = value;
      break;
    case 'object':
      process.env[key] = JSON.stringify(value);
      break;
    case 'boolean':
      process.env[key] = value.toString();
      break;
    case 'number':
      process.env[key] = value.toString();
      break;
    default:
      return false;
  }
  return true;
};
/* eslint-enable no-process-env */

module.exports = setenv;
