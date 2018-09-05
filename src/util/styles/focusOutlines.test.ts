/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { getNormalFocusStyle } from './focusOutlines';

describe('focusOutlines', () => {
  describe('getNormalFocusStyle()', () => {
    it('matches snapshot', () => {
      expect(getNormalFocusStyle()).toMatchSnapshot();
    });
  });
});
