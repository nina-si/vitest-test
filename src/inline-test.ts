import {describe} from "vitest";

export function add(...args: number[]) {
    return args.reduce((a, b) => a + b, 0)
}

// in-source test suites
if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest;
    describe('#addFn', () => {
    it('add without parameters', () => {
        expect(add()).toBe(0);
        expect(add(1)).toBe(2)
    }),
    it('add 3 numbers', () => {
        expect(add(1, 2, 3)).toBe(6)
    })
})}