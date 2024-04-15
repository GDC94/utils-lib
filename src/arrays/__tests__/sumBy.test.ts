import { describe, expect, it } from 'vitest'
import { sumBy } from '../sumBy'

interface dataObjTestType { value: number }

describe('[TEST] the sumBy method', () => {
  it('should return 5', () => {
    const dataObj: dataObjTestType[] = [
      { value: 2 },
      { value: 3 }
    ]
    const actualIsFive = sumBy(dataObj, (item) => item.value)
    expect(actualIsFive).toBe(5)
  })
  it('should return 0 if the data object is empty', () => {
    const actualIsZero = sumBy([], ({ item }: {
      item: { value: number }
    }) => item.value)
    expect(actualIsZero).toBe(0)
  })
  it('Should return the sum of negative values', () => {
    const dataObj = [
      { value: -2 },
      { value: -3 }
    ]
    const actual = sumBy(dataObj, (item) => item.value)
    expect(actual).toBe(-5)
  })
  it('Should return the sum of mixed values', () => {
    const dataObj = [
      { value: 2 },
      { value: -3 }
    ]
    const actual = sumBy(dataObj, (item) => item.value)
    expect(actual).toBe(-1)
  })
  it('Should return a new throw error if dataSource is not an array', () => {
    expect(() => sumBy('not an array' as never, ({ item }: { item: dataObjTestType }) => item.value)).toThrow('The argument passed is not an array of numbers')
  })
  it('Should a new throw error if accessor does not return a number', () => {
    const dataObj = [{ value: 2 }, { value: 3 }]
    expect(() => sumBy(dataObj, (_item) => null as never)).toThrow('The accessor function must return a number')
  })
  it('Should return the sum of decimal values', () => {
    const dataObj = [
      { value: 2.5 },
      { value: 3.7 }
    ]
    const actual = sumBy(dataObj, (item) => item.value)
    expect(actual).toBeCloseTo(6.2)
  })
  it('should return the correct sum with a large dataset', () => {
    const dataObj = Array.from({ length: 100 }, (_, index) => ({ value: index + 1 }))
    const actual = sumBy(dataObj, (item) => item.value)
    expect(actual).toBe(5050)
  })
  it('should return the correct sum when values are null or undefined', () => {
    const dataObj = [
      { value: null },
      { value: undefined },
      { value: 5 },
      { value: 10 }
    ]
    const actual = sumBy(dataObj, (item) => item.value ?? 0)
    expect(actual).toBe(15)
  })
})