/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import './theme';

describe('Fabric Theme', () => {
  it('gets set on the window object', () => {
    expect((window as any).FabricConfig.theme).toBeTruthy();
  });
});
