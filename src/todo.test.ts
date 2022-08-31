import { describe, expect, test } from 'vitest'

const truthyString = 'abc';

describe.todo('unimplemented suite');

describe('random test', () => {
  test('truthy string', () => {
    expect(truthyString).toBeTruthy();
  })  
})