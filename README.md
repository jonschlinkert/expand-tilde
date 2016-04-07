# expand-tilde [![NPM version](https://img.shields.io/npm/v/expand-tilde.svg?style=flat)](https://www.npmjs.com/package/expand-tilde) [![NPM downloads](https://img.shields.io/npm/dm/expand-tilde.svg?style=flat)](https://npmjs.org/package/expand-tilde) [![Build Status](https://img.shields.io/travis/jonschlinkert/expand-tilde.svg?style=flat)](https://travis-ci.org/jonschlinkert/expand-tilde)

> Bash-like tilde expansion for node.js. Expands a leading tilde in a file path to the user home directory, or `~+` to the cwd.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install expand-tilde --save
```

## Usage

See the [Bash documentation for Tilde Expansion](https://www.gnu.org/software/bash/manual/html_node/Tilde-Expansion.html).

```js
var expandTilde = require('expand-tilde');

expandTilde('~')
//=> '/Users/jonschlinkert'

expandTilde('~+')
//=> process.cwd()
```

## Run tests

Install dev dependencies:

```bash
npm i -d && npm test
```

## Related projects

You might also be interested in these projects:

* [braces](https://www.npmjs.com/package/braces): Fastest brace expansion for node.js, with the most complete support for the Bash 4.3 braces… [more](https://www.npmjs.com/package/braces) | [homepage](https://github.com/jonschlinkert/braces)
* [expand-brackets](https://www.npmjs.com/package/expand-brackets): Expand POSIX bracket expressions (character classes) in glob patterns. | [homepage](https://github.com/jonschlinkert/expand-brackets)
* [is-glob](https://www.npmjs.com/package/is-glob): Returns `true` if the given string looks like a glob pattern or an extglob pattern.… [more](https://www.npmjs.com/package/is-glob) | [homepage](https://github.com/jonschlinkert/is-glob)
* [micromatch](https://www.npmjs.com/package/micromatch): Glob matching for javascript/node.js. A drop-in replacement and faster alternative to minimatch and multimatch. Just… [more](https://www.npmjs.com/package/micromatch) | [homepage](https://github.com/jonschlinkert/micromatch)

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/expand-tilde/issues/new).

## Building docs

Generate readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install verb && npm run docs
```

Or, if [verb](https://github.com/verbose/verb) is installed globally:

```sh
$ verb
```

## Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/jonschlinkert/expand-tilde/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on April 07, 2016._