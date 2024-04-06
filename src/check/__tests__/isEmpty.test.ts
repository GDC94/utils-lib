import { isEmpty } from '../isEmpty'
import { describe, expect, it } from 'vitest'

describe('[TEST] Check isEmpty method', () => {
  it('Should return true for an empty object', () => {
    const obj = {}
    expect(isEmpty(obj)).toBe(true)
  })
  it('Should return true for an empty array', () => {
    const arr: any[] = []
    expect(isEmpty(arr)).toBe(true)
  })
  it('Should return false for a non-empty object', () => {
    const obj = { key: 'value' }
    expect(isEmpty(obj)).toBe(false)
  })
  it('Should return false for a non-empty array', () => {
    const arr = [1, 2, 3]
    expect(isEmpty(arr)).toBe(false)
  })
  it('Should return true for a non-countable value', () => {
    const value = 42
    expect(isEmpty(value)).toBe(true)
  })
  it('Should return true for a null value', () => {
    const value = null
    expect(isEmpty(value)).toBe(true)
  })
  it('Should return true for an undefined value', () => {
    const value = undefined
    expect(isEmpty(value)).toBe(true)
  })
  it('Should return true for an empty but non-countable array', () => {
    const arr = Object.create(Array.prototype)
    expect(isEmpty(arr)).toBe(true)
  })
  it('Should return true for an empty but non-countable object', () => {
    const obj = Object.create(null)
    expect(isEmpty(obj)).toBe(true)
  })
  it('Should return false for a non-empty array with non-enumerable elements', () => {
    const arr = [1, 2]
    Object.defineProperty(arr, 'length', { value: 3, enumerable: false })
    expect(isEmpty(arr)).toBe(false)
  })

  it('Should return false for a non-empty object with non-enumerable properties', () => {
    const obj = {}
    expect(isEmpty(obj)).toBe(true)
    Object.defineProperty(obj, 'prop', { value: 42, enumerable: false })
    expect(isEmpty(obj)).toBe(true)
  })

  it('Should return false for an object with a "length" property', () => {
    const obj = { length: 0 }
    expect(isEmpty(obj)).toBe(false)
  })
  it('Should return false for an array with undefined elements', () => {
    const arr = [undefined]
    expect(isEmpty(arr)).toBe(false)
  })
})