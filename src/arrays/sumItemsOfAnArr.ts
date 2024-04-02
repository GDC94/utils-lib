/**
 * Calculates the sum of numbers in an array.
 * 
 * @param {number[]} data - The array of numbers to sum.
 * @returns {number} - The sum of numbers in the array.
 * @throws {Error} - Throws an error if the argument passed to the function is not an array of numbers.
 * 
 * @example
 * // Example usage:
 * const result = sum([1, 2, 3, 4]); // Returns: 10
 * 
 */

export function sumItemsOfAnArr(data: number[]): number {
    const isArr = Array.isArray(data);
    if (!isArr) {
        throw new Error('The argument passed to the sum function is not an array of numbers');
    }
    const totalSum = data.reduce((prev: number, current: number) => prev + current, 0);
    return totalSum;
}
