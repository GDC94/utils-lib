import { typeOf } from '@/misc'

type GenericObject = Record<string | number, unknown>

/**
 * Checks if a value is an object.
 *
 * @param value The value to check.
 * @returns The result.
 */

export function isObjectLike (value: unknown): value is GenericObject {
  return (
    !(value instanceof Date) &&
        !(value instanceof RegExp) &&
          !Array.isArray(value) &&
        typeOf(value) === 'object'
  )
}