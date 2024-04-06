import { isNullOrUndefined } from '../isNullOrUndefined';
import { describe, expect, it } from 'vitest'

describe('[TEST] Check isNullOrUndefined method', () => {
  it('Should return true for null value', () => {
    const value = null;
    expect(isNullOrUndefined(value)).toBe(true);
  });
  it('Should return true for undefined value', () => {
    const value = undefined;
    expect(isNullOrUndefined(value)).toBe(true);
  });
  it('Should return false for a value that is not null or undefined', () => {
    const value = 42;
    expect(isNullOrUndefined(value)).toBe(false);
  });
  it('Should return false for a value that is a string', () => {
    const value = "Hello, World!";
    expect(isNullOrUndefined(value)).toBe(false);
  });
});
