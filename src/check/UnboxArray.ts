/**
 * UnboxArray is a utility type that takes an array type and returns the type of the elements contained in that array.
 * It is useful when you want to work with the type of elements in an array, rather than the array itself.
 *
 * @template T - This type parameter represents the type of array you want to unpack.
 *
 * @returns {UnboxArray<T>} - The return type is the type of the elements contained in the array `T`.
 * If `T` is not an array type, the return type will be `T` unchanged.
 *
 * @example
 * // For use with a specific array type:
 * type MyArrayType = number[];
 * type MyElementType = UnboxArray<MyArrayType>; // number.
 *
 * // If you use it with a non-array type, you will get the same type:
 * type MyNonArrayType = string;
 * type MyNonArrayElementType = UnboxArray<MyNonArrayType>; // string
 */
export type UnboxArray<T extends unknown[]> = T extends Array<infer U> ? U : T