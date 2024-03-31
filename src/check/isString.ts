// We provide more information to the compiler. If it returns true it is because it is a string yes or yes
export function isString (value: unknown): value is string {
  return typeof value === 'string'
}