/*!
 * expand-tilde <https://github.com/jonschlinkert/expand-tilde>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

require('mocha');
var isWindows = require('is-windows');
var assert = require('assert');
var path = require('path');
path.sep = '/';

var expandTilde = require('./');

if (isWindows() !== true) {
  it('should expand a tilde to the user home directory', function() {
    assert.equal(expandTilde('~'), '/Users/jonschlinkert');
  });

  it('should expand `~+` to process.cwd, per bash spec', function() {
    assert.equal(expandTilde('~+'), process.cwd());
    assert.equal(expandTilde('~+/foo/bar'), path.join(process.cwd(), 'foo/bar'));
  });
}
