/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { getFirstFocusable } from 'office-ui-fabric-react/lib/Utilities';

describe('getFirstFocusable', () => {
  it('checks if import is a function', () => {
    expect(getFirstFocusable).toEqual(expect.any(Function));
  });
});
