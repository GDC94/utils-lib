import { describe, expect, test } from 'vitest'
import { isFunction } from '../isFunction'

describe('[TEST] Check isFunction', () => {
  test.each([
    ['Should return true when value is a function', () => { }, true],
    ['Should return false when value is not a function', 'not a function', false],
    ['Should return false when value is null', null, false],
    ['Should return false when value is undefined', undefined, false],
    ['Should return false when value is an object', {}, false],
    ['Should return false when value is a number', 42, false]
  ])('Should %p', (_expected, value, expectedResult) => {
    expect(isFunction(value)).toBe(expectedResult)
  })
})