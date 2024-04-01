type GenericObject = Record<string | number, unknown>

function returnShortArray (arr1: string[], arr2: string[]): string[] {
  return arr1.length > arr2.length ? arr1 : arr2
}

/**
 * The function `getDifferenceObject` compares two objects and returns a new object containing the
 * differences between them.
 * @param {object1} - The first object to compare. It should be of type `Record<string, any>`, which
 * means it can have any number of properties of any type.
 * @param {object2} - The `object2` parameter is a record (object) containing key-value pairs.
 * @returns a record object that represents the difference between `object1` and `object2`.
 */

export default function getDifferenceObject (
  object1: GenericObject,
  object2: GenericObject
): Record<string, unknown> {
  const differenceObj: Record<string, unknown> = {}
  //    Get the keys of the object
  const obj1Keys = Object.keys(object1)
  const obj2Keys = Object.keys(object2)

  returnShortArray(obj1Keys, obj2Keys).forEach((key) => {
    if (
      object1[key] !== object2[key] &&
            typeof object1[key] === 'object' &&
            typeof object2[key] === 'object'
    ) {
      const diff = getDifferenceObject(
        object1[key] as GenericObject,
        object2[key] as GenericObject
      )
      if (Object.keys(diff).length > 0) {
        differenceObj[key] = diff
      }
      return
    }
    if (object1[key] !== object2[key]) {
      differenceObj[key] = object2[key]
    }
  })
  return differenceObj
}