import { z } from 'zod';

// Definir el esquema para validar el tipo de valor
const nullOrUndefinedSchema = z.union([z.null(), z.undefined()]);
type NullOrUndefined = z.infer<typeof nullOrUndefinedSchema>;
/**
 * Checks if a value is null or undefined.
 * 
 * @param {unknown} value - The value to check.
 * @returns {value is NullOrUndefined} - True if the value is null or undefined, false otherwise.
 * 
 * @example
 * // Example usage:
 * const value1 = null;
 * const value2 = undefined;
 * const value3 = 42;
 * isNullOrUndefined(value1); // Returns: true
 * isNullOrUndefined(value2); // Returns: true
 * isNullOrUndefined(value3); // Returns: false
 */
export function isNullOrUndefined(value: unknown): value is NullOrUndefined {
  return nullOrUndefinedSchema.safeParse(value).success;
}
