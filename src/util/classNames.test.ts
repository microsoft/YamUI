/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { join } from './classNames';

describe('classNames', () => {
  const emptyArray: string[] = [];
  const oneStringItem = ['one'];
  const twoStringItems = ['one', 'two'];
  const threeStringItems = ['one', 'two', 'three'];
  const arrayWithEmptyItems = ['one', undefined, 'three'];

  describe('join()', () => {
    it('returns empty string for empty array', () => {
      expect(join(emptyArray)).toBe('');
    });

    it('handles one item', () => {
      expect(join(oneStringItem)).toBe('one');
    });

    it('handles two items', () => {
      expect(join(twoStringItems)).toBe('one two');
    });

    it('handles three items', () => {
      expect(join(threeStringItems)).toBe('one two three');
    });

    it('handles empty items', () => {
      expect(join(arrayWithEmptyItems)).toBe('one three');
    });
  });
});
