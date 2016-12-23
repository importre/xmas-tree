import test from 'ava';
import fn from './';

test('default', t => {
	t.is(typeof fn(), 'string');
});

test('with size', t => {
	t.is(typeof fn({
		size: 10
	}), 'string');

	t.is(typeof fn({
		size: 100
	}), 'string');

	t.is(typeof fn({
		size: -10
	}), 'string');
});

test('with color', t => {
	t.is(typeof fn({
		color: true
	}), 'string');

	t.is(typeof fn({
		color: false
	}), 'string');
});

test('with size & color', t => {
	t.is(typeof fn({
		color: true,
		size: 100
	}), 'string');
});

test('version', t => {
	const ver = require('./package.json').version;
	t.is(fn({
		version: true
	}), ver);
});

