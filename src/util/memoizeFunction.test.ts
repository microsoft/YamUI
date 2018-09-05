/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

describe('memoizeFunction', () => {
  it('checks if import is a function', () => {
    expect(memoizeFunction).toEqual(expect.any(Function));
  });
});
