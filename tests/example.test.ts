import { sum } from '../src';
import { describe, expect, test } from 'vitest';

describe('Example', () => {
	test('1 + 1 is 2', () => {
		expect(sum(1, 1)).toBe(2);
	});
});
