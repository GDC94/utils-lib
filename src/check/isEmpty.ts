export function isEmpty<T> (object: T): boolean {
  const safeObject = object
  const isCountable = safeObject instanceof Object || Array.isArray(safeObject)
  if (!isCountable) return true
  return Object.entries(safeObject).length === 0
}