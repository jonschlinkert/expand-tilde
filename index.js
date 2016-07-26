/*!
 * expand-tilde <https://github.com/jonschlinkert/expand-tilde>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

var os = require('os');
var path = require('path');

module.exports = function expandTilde(filepath) {
  var home = os.homedir();

  if (filepath.charCodeAt(0) === 126 /* ~ */) {
    if (filepath.charCodeAt(1) === 43 /* + */) {
      return path.join(process.cwd(), filepath.slice(2));
    }
    return home ? path.join(home, filepath.slice(1)) : filepath;
  }

  return filepath;
};
