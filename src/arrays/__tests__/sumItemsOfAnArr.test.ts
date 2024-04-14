import { sumItemsOfAnArr } from '../sumItemsOfAnArr'
import { describe, expect, it } from 'vitest'

describe('[TEST] the sumItemsOfAnArr method', () => {
  it('Should return the sum of positive numbers', () => {
    const data: number[] = [1, 2, 3, 4]
    const totalSumIsTen = sumItemsOfAnArr(data)
    expect(totalSumIsTen).toBe(10)
  })
  it('Should return the sum of negative numbers', () => {
    const data: number[] = [-1, -2, -3, -4]
    const totalSumIsLessTen = sumItemsOfAnArr(data)
    expect(totalSumIsLessTen).toBe(-10)
  })
  it('Should return the sum of mixed numbers', () => {
    const data: number[] = [-1, 2, -3, 4]
    const sumOfNegativesAndPositivesNumbers = sumItemsOfAnArr(data)
    expect(sumOfNegativesAndPositivesNumbers).toBe(2)
  })
  it('Should return the correct sum of decimal numbers', () => {
    const data = [1.5, 2.3, 3.7]
    const expected = 1.5 + 2.3 + 3.7
    const actual = sumItemsOfAnArr(data)
    expect(actual).toBe(expected)
  })
  it('Should return the same number when summing a single number', () => {
    const data: number[] = [5]
    const five = sumItemsOfAnArr(data)
    expect(five).toBe(5)
  })
  it('Should return zero when summing an empty array', () => {
    const data: number[] = []
    const emptyArrSumIsEqualToZero = sumItemsOfAnArr(data)
    expect(emptyArrSumIsEqualToZero).toBe(0)
  })
  it('Should return the correct sum with a large dataset', () => {
    const data = Array.from({ length: 100 }, (_, index) => index + 1)
    const sumOfTheFirst100Naturals = (100 * 101) / 2
    const actual = sumItemsOfAnArr(data)
    expect(actual).toBe(sumOfTheFirst100Naturals)
  })
  it('Should throw an error if the argument is not an array', () => {
    expect(() => sumItemsOfAnArr('not an array' as never)).toThrow('The argument passed to the sum function is not an array of numbers')
  })
  it('Should throw an error if the array contains non-numeric values', () => {
    const data = [1, 2, 'not a number']
    expect(() => sumItemsOfAnArr(data as never)).toThrow('The array contains non-numeric values')
  })
})