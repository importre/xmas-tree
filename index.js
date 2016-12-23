'use strict';

/* eslint no-restricted-modules: [2, "os"] */
const _ = require('colors');

module.exports = opts => xmasTree(opts || {});

const DEFAULT_COLOR = false;
const DEFAULT_SIZE = 15;
const DECO_CANDIDATES = '      *.-\'o+@';
const COLOR_CANDIDATES = [
	'blue',
	'cyan',
	'green',
	'magenta',
	'red',
	'white',
	'yellow'
];

function xmasTree(opts) {
	try {
		if (opts.version) {
			return require('./package.json').version;
		}

		const size = getSizeOpt(opts);
		const hasColor = getColorOpt(opts);
		return Array(size).fill()
			.map((_, i) => makeTree(i, size, hasColor))
			.filter(i => i.length > 0)
			.concat(makePot(size, hasColor))
			.join('\n')
			.replace(/^/, '\n')
			.replace(/^/gm, '    ');
	} catch (err) {
		return err;
	}
}

function getSizeOpt(opts) {
	if ('size' in opts) {
		if (typeof opts.size !== 'number') {
			opts.size = DEFAULT_SIZE;
		} else if (opts.size < DEFAULT_SIZE) {
			opts.size = DEFAULT_SIZE;
		}
	} else {
		opts.size = DEFAULT_SIZE;
	}
	return opts.size;
}

function getColorOpt(opts) {
	if ('color' in opts) {
		if (typeof opts.color !== 'boolean') {
			opts.color = DEFAULT_COLOR;
		}
	} else {
		opts.color = DEFAULT_COLOR;
	}
	return opts.color;
}

function makeTree(i, size, hasColor) {
	let line;
	switch (i) {
		case 0:
			line = makeLine(size, '*');
			return hasColor ? line.yellow : line;
		case 1:
			line = makeLine(size, '_/ \\_');
			return hasColor ? line.yellow : line;
		case 2:
			line = makeLine(size, '\\     /');
			return hasColor ? line.yellow : line;
		case 3:
			line = makeLine(size, '/_\' \'_\\');
			return hasColor ? line.yellow : line;
		default:
			return makeNthLine(i, size, hasColor);
	}
}

function makePot(size, hasColor) {
	const i = Math.floor(size / 25) + 1;
	const line = makeLine(size, ['*', repeat(size - 2, '-'), '*']);
	return [
		hasColor ? line.green : line,
		makeLine(size, ['[', repeat(7 * i, '_'), ']']),
		makeLine(size, ['\\', repeat(5 * i, '_'), '/']),
		''
	];
}

function makeLine(max, body) {
	if (typeof body.join === 'function') {
		body = body.join('');
	}
	const offset = Array((max - body.length) >> 1).fill(' ').join('');
	return offset + body;
}

function makeNthLine(i, size, hasColor) {
	const space = i - 2;
	if (space % 2 === 0) {
		return '';
	}

	const line = makeLine(size, ['/', repeat(space, ' '), '\\']);
	return line.split('')
		.map((c, i) => {
			if (c === '/' || c === '\\') {
				return hasColor ? c.green : c;
			} else if (c === ' ' && line.indexOf('/') < i) {
				return randomDeco(hasColor);
			}
			return c;
		})
		.join('');
}

function randomDeco(hasColor) {
	const i = random(DECO_CANDIDATES.length);
	const c = DECO_CANDIDATES[i];
	return hasColor ? c[randomColor()] : c;
}

function repeat(size, c) {
	return Array(size).fill(c || ' ').join('');
}

function random(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function randomColor() {
	return COLOR_CANDIDATES[random(COLOR_CANDIDATES.length)];
}

