import getDifferenceObject from '../getDifferenceObject'
import { describe, expect, it } from 'vitest'

describe('[TEST] Check getDifferenceObject method', () => {
  it('Should return an empty object if both inputs are empty objects', () => {
    const obj1 = {}
    const obj2 = {}
    const result = getDifferenceObject(obj1, obj2)
    expect(result).toEqual({})
  })
  it('Should return an empty object if both inputs are identical', () => {
    const obj1 = { a: 1, b: 'two', c: true }
    const obj2 = { a: 1, b: 'two', c: true }
    const result = getDifferenceObject(obj1, obj2)
    expect(result).toEqual({})
  })

  it('Should return the differences between two objects', () => {
    const obj1 = { a: 1, b: 'two', c: true }
    const obj2 = { a: 1, b: 'three', d: false }
    const result = getDifferenceObject(obj1, obj2)
    expect(result).toEqual({ b: 'three', d: false })
  })
  it('Should handle nested objects', () => {
    const obj1 = { a: 1, b: { nested: true }, c: true }
    const obj2 = { a: 1, b: { nested: false }, d: false }
    const result = getDifferenceObject(obj1, obj2)
    expect(result).toEqual({ b: { nested: false }, d: false })
  })
  it('Should handle null and undefined values', () => {
    const obj1 = { a: null, b: undefined, c: true }
    const obj2 = { a: null, b: 2, c: false }
    const result = getDifferenceObject(obj1, obj2)
    expect(result).toEqual({ b: 2, c: false })
  })
  it('Should handle deeply nested objects with differences', () => {
    const obj1 = { a: { b: { c: { d: 1 } } }, e: true }
    const obj2 = { a: { b: { c: { d: 2 } } }, e: false }
    const result = getDifferenceObject(obj1, obj2)
    expect(result).toEqual({ a: { b: { c: { d: 2 } } }, e: false })
  })
  it('Should handle properties with different types', () => {
    const obj1 = { a: 'string', b: 1, c: true }
    const obj2 = { a: 1, b: 'string', c: false }
    const result = getDifferenceObject(obj1, obj2)
    expect(result).toEqual({ a: 1, b: 'string', c: false })
  })
})