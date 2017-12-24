#!/usr/bin/env node

'use strict';
const meow = require('meow');
const xmasTree = require('./');

const cli = meow(`
	Usage
	  $ xmas-tree

	Options
	  --size number
	  --color
	  --loop

	Examples
	  $ xmas-tree
	  $ xmas-tree --size 30
	  $ xmas-tree --color
	  $ xmas-tree --color --loop
	  $ xmas-tree --version
`);

function main() {
	process.stdout.write('\x1Bc');
	console.log(xmasTree(cli.flags));
}

if (cli.flags.loop) {
	setInterval(main, 200);
} else {
	main();
}

