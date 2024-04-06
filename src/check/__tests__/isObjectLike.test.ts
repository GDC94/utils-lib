import { isObjectLike } from '../isObjectLike';
import { describe, expect, it } from 'vitest'

describe('[TEST] Check isObjectLike method', () => {
    it('should return false for values not similar to objects', () => {
        expect(isObjectLike(null)).toBe(false);
        expect(isObjectLike(undefined)).toBe(false);
        expect(isObjectLike(42)).toBe(false);
        expect(isObjectLike('string')).toBe(false);
        expect(isObjectLike(true)).toBe(false);
        expect(isObjectLike(new Date())).toBe(false);
        expect(isObjectLike(/regex/)).toBe(false);
    });
    it('should return true for objects wrapping primitive values', () => {
        expect(isObjectLike(new String('string'))).toBe(true);
        expect(isObjectLike(new Number(42))).toBe(true);
        expect(isObjectLike(new Boolean(true))).toBe(true);
    });
    it('should return true for objects with non-enumerable properties', () => {
        const obj = Object.defineProperty({}, 'key', { value: 'value', enumerable: false });
        expect(isObjectLike(obj)).toBe(true);
    });
});
