import { isObject } from '../isObject';
import { describe, expect, it } from 'vitest'

describe('[TEST] Check isObject method', () => {
    it('Should return true for objects', () => {
        expect(isObject({})).toBe(true);
        expect(isObject({ key: 'value' })).toBe(true);
        expect(isObject([])).toBe(true);
        expect(isObject(new Date())).toBe(true);
    });
    it('Should return false for non-objects', () => {
        expect(isObject(null)).toBe(false);
        expect(isObject(undefined)).toBe(false);
        expect(isObject(42)).toBe(false);
        expect(isObject('string')).toBe(false);
        expect(isObject(true)).toBe(false);
    });
    it('should return true for objects with non-enumerable properties', () => {
        const obj = Object.defineProperty({}, 'key', { value: 'value', enumerable: false });
        expect(isObject(obj)).toBe(true);
    });
    it('should return true for objects wrapping primitive values', () => {
        expect(isObject(new String('string'))).toBe(true);
        expect(isObject(new Number(42))).toBe(true);
        expect(isObject(new Boolean(true))).toBe(true);
    });
});
