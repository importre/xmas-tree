import test from 'ava';
import fn from './';

test('size', t => {
	t.true(fn().length > 0);
});

