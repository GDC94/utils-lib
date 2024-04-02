import { z } from 'zod'

// Definir el esquema para validar el tipo de valor
const stringSchema = z.string()

/**
 * Checks if a value is a string.
 *
 * @param {unknown} value - The value to check.
 * @returns {value is string} - True if the value is a string, false otherwise.
 *
 * @example
 * // Example usage:
 * const value1 = 'hello';
 * const value2 = 42;
 * isString(value1); // Returns: true
 * isString(value2); // Returns: false
 *
 * @note value is string | something is a way of telling the compiler that the function acts as a guard type.
 */

export function isString (value: unknown): value is string {
  return stringSchema.safeParse(value).success
}