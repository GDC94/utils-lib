/**
 * Returns the type of a value.
 *
 * @param value The value to check.
 * @returns The type of the value.
 */

export function typeOf (value: unknown): unknown {
  return value === null ? 'null' : typeof value
}