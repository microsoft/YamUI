/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import KeyboardNavigationEventListener, {
  NavigationMode,
  NavigationModeCallback,
} from './KeyboardNavigationEventListener';

export { NavigationMode, NavigationModeCallback };

let navListener: KeyboardNavigationEventListener;

const ensureInit = () => {
  if (!navListener) {
    navListener = new KeyboardNavigationEventListener(document.body);
  }
};

export const getMode = (): NavigationMode => {
  ensureInit();
  return navListener.getMode();
};

export const subscribe = (callback: NavigationModeCallback): void => {
  ensureInit();
  navListener.subscribe(callback);
};

export const unsubscribe = (callback: NavigationModeCallback): void => {
  ensureInit();
  navListener.unsubscribe(callback);
};
