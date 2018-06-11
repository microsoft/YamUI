/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { addAlpha } from './colors';

describe('colors', () => {
  describe('addAlpha()', () => {
    it('makes a color fully transparent', () => {
      expect(addAlpha('#fff', 0)).toBe('rgba(255, 255, 255, 0)');
    });

    it('makes a color partially transparent', () => {
      expect(addAlpha('white', 50)).toBe('rgba(255, 255, 255, 0.5)');
    });

    it('makes a color fully opaque', () => {
      expect(addAlpha('rgba(255, 255, 255)', 100)).toBe('#ffffff');
    });

    // Covering all lines of code
    it('handles Fabric method returning undefined', () => {
      expect(addAlpha('asdf', 100)).toBe(undefined);
    });
  });
});
