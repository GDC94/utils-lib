import { typeOf } from '../misc'

type GenericObject = Record<string | number, unknown>

export function isSpecificObject (value: unknown): value is GenericObject {
  return (
    !(value instanceof Date) &&
        !(value instanceof RegExp) &&
          !Array.isArray(value) &&
        typeOf(value) === 'object'
  )
}