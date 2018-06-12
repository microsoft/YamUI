/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { getGutterValue } from './gutters';

describe('gutters', () => {
  describe('getGutterValue()', () => {
    it('generates a positive pixel value', () => {
      expect(getGutterValue(3)).toBe('12px');
    });

    it('generates a positive rem value', () => {
      expect(getGutterValue(3, true)).toBe('1.2rem');
    });

    it('generates a negative pixel value', () => {
      expect(getGutterValue(-2)).toBe('-8px');
    });

    it('generates a negative rem value', () => {
      expect(getGutterValue(-2, true)).toBe('-0.8rem');
    });

    it('generates a zero pixel value', () => {
      expect(getGutterValue(0)).toBe('0px');
    });

    it('generates a zero rem value', () => {
      expect(getGutterValue(0, true)).toBe('0.0rem');
    });
  });
});
