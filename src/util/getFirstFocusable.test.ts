/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
jest.mock('@uifabric/utilities/lib/focus', () => ({
  getFirstFocusable: jest.fn(),
}));

import { getFirstFocusable } from '@uifabric/utilities/lib/focus';

describe('getFirstFocusable', () => {
  it('checks if import is a function', () => {
    expect(typeof getFirstFocusable).toBe('function');
  });
});
