export type genericId = string | number | undefined | null

export interface identifiable {
  id: genericId
}
export type anyFunction = (...args: unknown[]) => unknown