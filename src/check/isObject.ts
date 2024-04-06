import { typeOf } from '@/misc'

/**
 * Checks if a value is an object.
 * 
 * @param value The value to check.
 * @returns The result.
 */


export function isObject (value: unknown): boolean {
  return typeOf(value) === 'object'
}