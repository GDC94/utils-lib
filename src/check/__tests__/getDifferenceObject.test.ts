import getDifferenceObject from '../getDifferenceObject'
import { describe, expect, it } from 'vitest'

describe('[TEST] Check getDifferenceObject method', () => {
  it('Should return an empty object if both inputs are empty objects', () => {
    const objectOne = {}
    const objectTwo = {}
    const result = getDifferenceObject(objectOne, objectTwo)
    expect(result).toEqual({})
  })
  it('Should return an empty object if both inputs are identical', () => {
    const objectOne = { a: 1, b: 'two', c: true }
    const objectTwo = { a: 1, b: 'two', c: true }
    const result = getDifferenceObject(objectOne, objectTwo)
    expect(result).toEqual({})
  })
  it('Should return the differences between two objects', () => {
    const objectOne = { a: 1, b: 'two', c: true }
    const objectTwo = { a: 1, b: 'three', d: false }
    const result = getDifferenceObject(objectOne, objectTwo)
    expect(result).toEqual({ b: 'three', d: false })
  })
  it('Should handle nested objects', () => {
    const objectOne = { a: 1, b: { nested: true }, c: true }
    const objectTwo = { a: 1, b: { nested: false }, d: false }
    const result = getDifferenceObject(objectOne, objectTwo)
    expect(result).toEqual({ b: { nested: false }, d: false })
  })
  it('Should handle null and undefined values', () => {
    const objectOne = { a: null, b: undefined, c: true }
    const objectTwo = { a: null, b: 2, c: false }
    const result = getDifferenceObject(objectOne, objectTwo)
    expect(result).toEqual({ b: 2, c: false })
  })
  it('Should handle deeply nested objects with differences', () => {
    const objectOne = { a: { b: { c: { d: 1 } } }, e: true }
    const objectTwo = { a: { b: { c: { d: 2 } } }, e: false }
    const result = getDifferenceObject(objectOne, objectTwo)
    expect(result).toEqual({ a: { b: { c: { d: 2 } } }, e: false })
  })
  it('Should handle properties with different types', () => {
    const objectOne = { a: 'string', b: 1, c: true }
    const objectTwo = { a: 1, b: 'string', c: false }
    const result = getDifferenceObject(objectOne, objectTwo)
    expect(result).toEqual({ a: 1, b: 'string', c: false })
  })
})