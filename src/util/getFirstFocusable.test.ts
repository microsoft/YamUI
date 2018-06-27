/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { getFirstFocusable } from '@uifabric/utilities/lib/focus';

describe('getFirstFocusable', () => {
  it('checks if import is a function', () => {
    expect(getFirstFocusable).toEqual(expect.any(Function));
  });
});
