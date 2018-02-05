/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import KeyboardNavigationEventListener, {
  NavigationMode,
  NavigationModeCallback,
} from './KeyboardNavigationEventListener';

export { NavigationMode, NavigationModeCallback };

let navListener: KeyboardNavigationEventListener;
document.addEventListener('DOMContentLoaded', () => {
  navListener = new KeyboardNavigationEventListener(document.body);
});

export const getMode = (): NavigationMode => {
  return navListener.getMode();
};

export const subscribe = (callback: NavigationModeCallback): void => {
  navListener.subscribe(callback);
};

export const unsubscribe = (callback: NavigationModeCallback): void => {
  navListener.unsubscribe(callback);
};
