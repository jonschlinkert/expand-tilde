/*!
 * expand-tilde <https://github.com/jonschlinkert/expand-tilde>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var path = require('path');
path.sep = '/';

var assert = require('assert');
var expandTilde = require('./');

it('should equal', function () {
  assert.equal(expandTilde('~'), '/Users/jonschlinkert');
  assert.equal(expandTilde('~+'), process.cwd());
  assert.equal(expandTilde('~+/foo/bar'), path.join(process.cwd(), 'foo/bar'));
});
