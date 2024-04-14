import omitKey from '../omitKey'
import { describe, expect, it } from 'vitest'

describe('[TEST] Check omitKey method', () => {
  it('Should remove the specified key from the object', () => {
    const input = { a: 1, b: 2, c: 3 }
    const result = omitKey(input, 'b')
    expect(result).toEqual({ a: 1, c: 3 })
  })
  it('Should not modify the original object', () => {
    const input = { a: 1, b: 2, c: 3 }
    omitKey(input, 'b')
    expect(input).toEqual({ a: 1, b: 2, c: 3 })
  })
  it('Should handle objects with different types', () => {
    const input = { a: 1, b: 'two', c: true }
    const result = omitKey(input, 'b')
    expect(result).toEqual({ a: 1, c: true })
  })
  it('Should handle objects with nested properties', () => {
    const input = { a: 1, b: { nested: true }, c: 3 }
    const result = omitKey(input, 'b')
    expect(result).toEqual({ a: 1, c: 3 })
  })
  it('Should handle objects with symbol keys', () => {
    const sym = Symbol('key')
    const input = { [sym]: 'symbol', a: 1, b: 2 }
    const result = omitKey(input, sym)
    expect(result).toEqual({ a: 1, b: 2 })
  })
})