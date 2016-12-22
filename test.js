import test from 'ava';
import fn from './';

test('default', t => {
	t.true(fn().length > 0);
});

test('with size', t => {
	t.true(fn({
		size: 10
	}).length > 0);

	t.true(fn({
		size: 100
	}).length > 0);

	t.true(fn({
		size: -10
	}).length > 0);
});

test('with color', t => {
	t.true(fn({
		color: true
	}).length > 0);

	t.true(fn({
		color: false
	}).length > 0);
});

test('with size & color', t => {
	t.true(fn({
		color: true,
		size: 100
	}).length > 0);
});

