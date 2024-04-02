/**
 * Calculates the sum of values obtained by applying an accessor function to each element in an array.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} dataSource - The array of elements.
 * @param {(item: T) => number} accessor - The accessor function to apply to each element to get the value to sum.
 * @returns {number} - The sum of values obtained by applying the accessor function to each element.
 * @throws {Error} - Throws an error if the dataSource argument is not an array.
 *
 * @example
 * // Example usage:
 * const data = [{ value: 1 }, { value: 2 }, { value: 3 }];
 * const result = sumBy(data, (item) => item.value); // Returns: 6
 *
 */

export function sumBy<T> (dataSource: T[], accesor: (item: T) => number): number {
  const isArr = Array.isArray(dataSource)
  if (!isArr) {
    throw new Error('The argument passed is not an array of numbers')
  }
  return dataSource.reduce(
    (sum: number, item: T) => sum + accesor(item), 0
  )
}