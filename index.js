/*!
 * expand-tilde <https://github.com/jonschlinkert/expand-tilde>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

var userhome = require('user-home');

module.exports = function expandTilde(fp) {
  if (fp.charCodeAt(0) === 126 /* ~ */) {
    if (fp.charCodeAt(1) === 43 /* + */) {
      return process.cwd() + '/' + fp.slice(2);
    }
    return userhome ? (userhome + '/' + fp.slice(1)) : fp;
  }
  return fp;
};
