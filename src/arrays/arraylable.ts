
/**
 * This function takes an array or null value and returns either the same array or an empty array.
 * 
 * @template T - The type of elements in the array.
 * @param {T[] | null} value - The input array or null.
 * @returns {T[] | []} - If the input value is an array, returns the same array. Otherwise, returns an empty array.
 * 
 * @example
 * // Example usage:
 * const result1 = arrayable([1, 2, 3]); // Returns: [1, 2, 3]
 * const result2 = arrayable(null); // Returns: []
 * const result3 = arrayable("not an array"); // Returns: []
 * 
 * @note This function can be useful when you need to ensure that the input value is an array or provide a default empty array.
 */

export function arrayable<T>(value: T[] | null): T[] | [] {
    return Array.isArray(value) ? value : []
}