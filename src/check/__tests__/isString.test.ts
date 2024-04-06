import { describe, expect, test } from 'vitest'

import { isString } from '../isString'

describe('[TEST] Check isString method', () => {
  test.each([
    ['', true],
    ['Lets go Stryker!', true],
    [null, false],
    [undefined, false],
    [2, false],
    [{}, false],
    [[''], false],
    ['', true],
    [123, false],
    [true, false],
    [false, false]

  ])('isString(%j) should be %j', (arg, expected) => {
    expect(isString(arg)).toBe(expected)
  })
})