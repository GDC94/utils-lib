import { describe, expect, it } from 'vitest'
import { arrayable } from '../arraylable'

describe('[TEST] the arrayable method', () => {
  it('Should return the same array when input is not null', () => {
    const input = [1, 2, 3]
    const result = arrayable(input)
    expect(result).toEqual(input)
  })
  it('Should return an empty array when input is null', () => {
    const result = arrayable(null)
    expect(result).toEqual([])
  })
  it('Should return an empty array when input is not an array', () => {
    const result = arrayable('not an array' as never)
    expect(result).toEqual([])
  })
  it('Should return an empty array when input is not an array and not null', () => {
    const result = arrayable(123 as never)
    expect(result).toEqual([])
  })
  it('Should return the same array of objects when input is an array of objects', () => {
    const input = [{ id: 1, name: 'Kent' }, { id: 2, name: 'Dodds' }]
    const result = arrayable(input)
    expect(result).toEqual(input)
  })
  it('Should return the same array of strings when input is an array of strings', () => {
    const input = ['apple', 'banana', 'cherry']
    const result = arrayable(input)
    expect(result).toEqual(input)
  })
  it('Should return an empty array when input is undefined', () => {
    const result = arrayable(undefined as never)
    expect(result).toEqual([])
  })
  it('Should return an empty array when input is null', () => {
    const result = arrayable(null)
    expect(result).toEqual([])
  })
  it('Should return an empty array when input is a boolean value', () => {
    const result = arrayable(true as never)
    expect(result).toEqual([])
  })
})