import { z } from 'zod'

// Define a Zod schema for the input type
const ZodInputSchema = z.unknown()
/**
 * Checks if an object or array is empty.
 *
 * @template T - The type of the object or array.
 * @param {T} object - The object or array to check.
 * @returns {boolean} - Returns true if the object or array is empty, otherwise returns false.
 *
 * @example
 * Example usage:
 * const obj = {}; // An empty object
 * const arr = []; // An empty array
 * const result1 = isEmpty(obj); // Returns: true
 * const result2 = isEmpty(arr); // Returns: true
 *
 */
export function isEmpty<T> (object: T): boolean {
  const isValidInput = ZodInputSchema.safeParse(object)

  if (!isValidInput.success) {
    throw new Error(`Invalid input: ${isValidInput.error.message}`)
  }
  const safeObject = object
  const isCountable = safeObject instanceof Object || Array.isArray(safeObject)

  if (!isCountable) {
    return true
  }

  let count = 0
  for (const key in safeObject) {
    if (Object.prototype.hasOwnProperty.call(safeObject, key)) {
      count++
    }
  }

  return count === 0
}