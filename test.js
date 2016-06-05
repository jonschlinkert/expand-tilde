'use strict';

require('mocha');
var isWindows = require('is-windows');
var assert = require('assert');
var home = require('os-homedir');
var path = require('path');
path.sep = '/';

var expandTilde = require('./');

if (!isWindows()) {
  it('should expand a tilde to the user home directory', function() {
    assert.equal(expandTilde('~'), home());
  });

  it('should expand `~+` to process.cwd, per bash spec', function() {
    assert.equal(expandTilde('~+'), process.cwd());
    assert.equal(expandTilde('~+/foo/bar'), path.join(process.cwd(), 'foo/bar'));
  });
}
