'use strict';

/* eslint no-restricted-modules: [2, "os"] */
const _ = require('colors');

module.exports = opts => xmasTree(opts || {});

function xmasTree(opts) {
	const size = treeSize(opts);
	const hasColor = treeColor(opts);
	return Array(size).fill()
		.map((_, i) => treeLines(i, size, hasColor))
		.filter(i => i.length > 0)
		.concat(treeButton(size, hasColor))
		.join('\n')
		.replace(/^/, '\n')
		.replace(/^/gm, '    ');
}

function randomDeco(hasColor) {
	const candidates = '      *.-\'o+@';
	const i = random(0, candidates.length);
	const c = candidates[i];
	return hasColor ? c[randomColor()] : c;
}

function line(max, body) {
	const offset = Array((max - body.length) >> 1).fill(' ').join('');
	return offset + body;
}

function repeatChar(space, ch) {
	return Array(space).fill(ch || ' ').join('');
}

function random(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor() {
	const candidatess = [
		'red', 'green', 'yellow',
		'blue', 'magenta', 'cyan', 'white'
	];
	return candidatess[random(0, candidatess.length)];
}

function treeLine(i, size, hasColor) {
	const space = i - 2;
	if (space % 2 === 0) {
		return '';
	}
	const body = line(size, ['/', repeatChar(space, ' '), '\\'].join(''));
	return body
		.split('')
		.map((c, i) => {
			if (c === '/' || c === '\\') {
				return hasColor ? c.green : c;
			}
			if (c === ' ' && body.indexOf('/') < i) {
				return randomDeco(hasColor);
			}
			return c;
		})
		.join('');
}

function treeSize(opts) {
	const defaultSize = 15;
	if ('size' in opts) {
		if (typeof opts.size !== 'number') {
			opts.size = defaultSize;
		} else if (opts.size < defaultSize) {
			opts.size = defaultSize;
		}
	} else {
		opts.size = defaultSize;
	}
	return opts.size;
}

function treeColor(opts) {
	const defaultColor = false;
	if ('color' in opts) {
		if (typeof opts.color !== 'boolean') {
			opts.color = defaultColor;
		}
	} else {
		opts.color = defaultColor;
	}
	return opts.color;
}

function treeLines(i, size, hasColor) {
	let l;
	switch (i) {
		case 0:
			l = line(size, '*');
			return hasColor ? l.yellow : l;
		case 1:
			l = line(size, '_/ \\_');
			return hasColor ? l.yellow : l;
		case 2:
			l = line(size, '\\     /');
			return hasColor ? l.yellow : l;
		case 3:
			l = line(size, '/_\' \'_\\');
			return hasColor ? l.yellow : l;
		default:
			return treeLine(i, size, hasColor);
	}
}

function treeButton(size, hasColor) {
	const i = Math.floor(size / 25) + 1;
	const l = line(size, ['*', repeatChar(size - 2, '-'), '*'].join(''));
	return [
		hasColor ? l.green : l,
		line(size, ['[', repeatChar(7 * i, '_'), ']'].join('')),
		line(size, ['\\', repeatChar(5 * i, '_'), '/'].join('')),
		''
	];
}

