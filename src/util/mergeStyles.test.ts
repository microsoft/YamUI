/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';

describe('mergeStyles', () => {
  it('checks if import is a function', () => {
    expect(mergeStyles).toEqual(expect.any(Function));
  });
});
