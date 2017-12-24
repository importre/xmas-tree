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
	process.stdout.write(`\u001b[10000A\u001b[2K\u001b[10000D`);
	console.log(xmasTree(cli.flags));
}

process.stdout.write(`\u001b[2J`);

if (cli.flags.loop) {
	setInterval(main, 200);
} else {
	main();
}

