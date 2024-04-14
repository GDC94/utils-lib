import { typeOf } from '../typeOf'
import { describe, expect, it } from 'vitest'

describe('[TEST] Check typeOf method', () => {
  it('Should return "undefined" for undefined value', () => {
    expect(typeOf(undefined)).toBe('undefined')
  })
  it('Should return "boolean" for boolean value', () => {
    expect(typeOf(true)).toBe('boolean')
  })
  it('Should return "symbol" for symbol value', () => {
    // eslint-disable-next-line symbol-description
    expect(typeOf(Symbol())).toBe('symbol')
  })
  it('Should return "object" for object value', () => {
    expect(typeOf({})).toBe('object')
  })
  it('Should return "function" for function value', () => {
    expect(typeOf(() => { })).toBe('function')
  })
  it('Should return "number" for infinity value', () => {
    expect(typeOf(Infinity)).toBe('number')
  })
  it('Should return "number" for NaN value', () => {
    expect(typeOf(NaN)).toBe('number')
  })
  it('Should return "string" for string values', () => {
    expect(typeOf('')).toBe('string')
  })
  it('Should return "null" for null values', () => {
    expect(typeOf(null)).toBe('null')
  })
})