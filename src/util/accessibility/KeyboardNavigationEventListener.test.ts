/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */

import KeyboardNavigationEventListener from './KeyboardNavigationEventListener';

describe('KeyboardNavigationEventListener', () => {
  let listener: KeyboardNavigationEventListener;
  let callback1: jest.Mock;
  let callback2: jest.Mock;

  beforeEach(() => {
    listener = new KeyboardNavigationEventListener(document.body);
    callback1 = jest.fn();
    callback2 = jest.fn();
    listener.subscribe(callback1);
    listener.subscribe(callback2);
  });

  afterEach(() => {
    listener.destroy();
    jest.resetAllMocks();
  });

  it('is in mouse mode by default', () => {
    expect(listener.getMode()).toBe('mouse');
  });

  /**
   * NOTE: Jest/JSDom are not allowing any events to be created on DOM elements outside of ReactTestUtils :(
   */
});
