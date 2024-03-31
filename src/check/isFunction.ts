import { type anyFunction } from '../types/helpers'

export function isFuction (value: unknown): value is anyFunction {
  return typeof value === 'function'
}