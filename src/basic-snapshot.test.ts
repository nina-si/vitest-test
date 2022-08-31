import {describe, expect, it} from 'vitest'

describe('#sum', () => {
    it('toUpperCase', () => {
        const result = 'foobar'.toUpperCase();
        expect(result).toMatchSnapshot();
    });
})