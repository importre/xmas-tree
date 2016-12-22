#!/usr/bin/env node

'use strict';
const meow = require('meow');
const xmasTree = require('./');

const cli = meow(`
	Usage
	  $ xmas-tree

	Options
	  --size number
	  --color  # for CLI

	Examples
	  $ xmas-tree
	  $ xmas-tree --size 30
	  $ xmas-tree --color
`);

console.log(xmasTree(cli.flags));

