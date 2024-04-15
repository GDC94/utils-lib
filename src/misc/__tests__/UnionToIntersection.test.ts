import { type UnionToIntersection } from '../UnionToIntersection'
import { expect, it, describe } from 'vitest'

interface TypeA {
  a: number
}
interface TypeB {
  b: string
}
interface TypeC {
  c: boolean
}

describe('[TEST] the sumBy method', () => {
  it('Union of two types', () => {
    type UnionAB = TypeA | TypeB
    type ResultAB = UnionToIntersection<UnionAB>
    const result: ResultAB = { a: 1, b: 'test' }
    expect(result).toEqual({ a: 1, b: 'test' })
  })

  it('Union of three types', () => {
    type UnionABC = TypeA | TypeB | TypeC
    type ResultABC = UnionToIntersection<UnionABC>
    const result: ResultABC = { a: 1, b: 'test', c: true }
    expect(result).toEqual({ a: 1, b: 'test', c: true })
  })
})