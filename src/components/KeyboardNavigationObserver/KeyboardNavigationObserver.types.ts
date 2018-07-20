/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { NavigationMode, NavigationModeCallback } from '../../util/accessibility/keyboardNavigation';
export { NavigationMode, NavigationModeCallback };

export interface KeyboardNavigationObserverProps extends BaseComponentProps {
  /**
   * A callback which will be triggered when the user begins navigating via keyboard.
   */
  onEnterKeyboardMode?: (() => void);

  /**
   * A callback which will be triggered when the user begins navigating via mouse.
   */
  onEnterMouseMode?: (() => void);

  /**
   * Render prop to return child content when user is navigating via keyboard.
   */
  renderInKeyboardMode?: (() => React.ReactNode);

  /**
   * Render prop to return child content when user is navigating via mouse.
   */
  renderInMouseMode?: (() => React.ReactNode);
}

export interface KeyboardNavigationObserverState {
  mode: NavigationMode;
}
