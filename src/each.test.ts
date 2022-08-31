import {describe, expect, it} from 'vitest';

describe.each([
    { a: 1, b: 1, expected: 2 },
    { a: 1, b: 2, expected: 3 },
    { a: 2, b: 1, expected: 3 },
])('describe object add($a, $b)', ({ a, b, expected }) => {
    it(`returns ${expected}`, () => {
        expect(a + b).toBe(expected)
    })

    it(`returned value not be greater than ${expected}`, () => {
        expect(a + b).not.toBeGreaterThan(expected)
    })

    it(`returned value not be less than ${expected}`, () => {
        expect(a + b).not.toBeLessThan(expected)
    })
})

describe('#test with each()', () => {
    it.each([
        [1, 1, 2],
        [1, 2, 3],
        [2, 1, 3],
    ])('add(%i, %i) -> %i', (a, b, expected) => {
        expect(a + b).toBe(expected)
    })
});
