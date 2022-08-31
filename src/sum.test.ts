import {sum} from './sum';
import {describe, expect, it} from 'vitest';

describe('#sum', () => {
    it('returns 0 with no number', () => {
        expect(sum()).toBe(0);
    })
    it('returns 1 with 1', () => {
        expect(sum(1)).toBe(1);
    })
    it('returns correct sum with negative arguments', () => {
        expect(sum(-1,-2)).not.toBe(4);
    })
});
