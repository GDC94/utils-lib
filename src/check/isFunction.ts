import { type anyFunction } from '@/types/helpers'
import { z } from 'zod'

const FunctionSchema = z.function()

/**
 * Check if the value is a function
 * @param value The value to check
 * @returns The result
 */

export function isFunction (value: unknown): value is anyFunction {
  try {
    FunctionSchema.parse(value)
    return true
  } catch (error) {
    return false
  }
}