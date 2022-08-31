import {multiply} from './multiply';
import {describe, expect, it} from 'vitest';

describe.shuffle('#multiply', () => {
    it('returns 0 with 0', () => {
        expect(multiply(0)).toBe(0);
    });
    it.skip('returns 1 with 1', () => {
        const testData = 1;
        expect(multiply(testData)).toBe(1);
    });
    it('returns 5 with 3 arguments', () => {
        expect(multiply(1,2,2)).toBe(5);
    })
    it.each([
        [1, 1, 2],
        [1, 2, 3],
        [2, 1, 3],
    ])('add(%i, %i) -> %i', (a, b, expected) => {
        expect(a + b).toBe(expected)
    })
});
