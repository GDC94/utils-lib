import { describe, it, expect } from 'vitest'
import { type RequireAtLeastOne } from '../RequireAtLeastOne'
import { z } from 'zod'

const MyInterfaceSchemaForTest = z.object({
  propOne: z.number().optional(),
  propTwo: z.string().optional(),
  propTree: z.boolean().optional()
})

interface MyInterface {
  propOne?: number
  propTwo?: string
  propTree?: boolean
}

describe('[Test] RequireAtLeastOne', () => {
  it('should require at least one property from the specified keys', () => {
    const objectTestOne: RequireAtLeastOne<MyInterface, 'propOne' | 'propTwo'> = {
      propOne: 123
    }
    const validatedObj1 = MyInterfaceSchemaForTest.parse(objectTestOne)
    expect(typeof validatedObj1.propOne).toBe('number')

    const objectTwo: RequireAtLeastOne<MyInterface, 'propOne' | 'propTwo'> = {
      propTwo: 'hello'
    }
    const validatedObj2 = MyInterfaceSchemaForTest.parse(objectTwo)
    expect(typeof validatedObj2.propTwo).toBe('string')
    const objectTreeTest: RequireAtLeastOne<MyInterface, 'propOne' | 'propTwo'> = {
      propOne: 123,
      propTwo: 'hello'
    }
    const validatedObj3 = MyInterfaceSchemaForTest.parse(objectTreeTest)
    expect(typeof validatedObj3.propOne).toBe('number')
    expect(typeof validatedObj3.propTwo).toBe('string')
  })
})