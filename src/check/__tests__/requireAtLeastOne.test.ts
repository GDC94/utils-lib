import { describe, it, expect } from 'vitest'
import { type RequireAtLeastOne } from '../RequireAtLeastOne'
import { z } from 'zod'

// Definimos el esquema de validación para el tipo MyInterface
const MyInterfaceSchema = z.object({
  prop1: z.number().optional(),
  prop2: z.string().optional(),
  prop3: z.boolean().optional()
})

interface MyInterface {
  prop1?: number
  prop2?: string
  prop3?: boolean
}

describe('[Test] RequireAtLeastOne', () => {
  it('should require at least one property from the specified keys', () => {
    // Objeto que contiene solo prop1
    const obj1: RequireAtLeastOne<MyInterface, 'prop1' | 'prop2'> = {
      prop1: 123
    }
    // Validamos el objeto utilizando el esquema de Zod
    const validatedObj1 = MyInterfaceSchema.parse(obj1)
    // Afirmamos que el objeto validado tenga el tipo esperado
    expect(typeof validatedObj1.prop1).toBe('number')

    // Objeto que contiene solo prop2
    const obj2: RequireAtLeastOne<MyInterface, 'prop1' | 'prop2'> = {
      prop2: 'hello'
    }
    // Validamos el objeto utilizando el esquema de Zod
    const validatedObj2 = MyInterfaceSchema.parse(obj2)
    // Afirmamos que el objeto validado tenga el tipo esperado
    expect(typeof validatedObj2.prop2).toBe('string')

    // Objeto que contiene tanto prop1 como prop2
    const obj3: RequireAtLeastOne<MyInterface, 'prop1' | 'prop2'> = {
      prop1: 123,
      prop2: 'hello'
    }
    // Validamos el objeto utilizando el esquema de Zod
    const validatedObj3 = MyInterfaceSchema.parse(obj3)
    // Afirmamos que el objeto validado tenga el tipo esperado
    expect(typeof validatedObj3.prop1).toBe('number')
    expect(typeof validatedObj3.prop2).toBe('string')
  })
})