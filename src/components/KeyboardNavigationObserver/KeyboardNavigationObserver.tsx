/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { getMode, subscribe, unsubscribe } from '../../util/accessibility/keyboardNavigation';
import {
  KeyboardNavigationObserverProps,
  KeyboardNavigationObserverState,
  NavigationMode,
} from './KeyboardNavigationObserver.types';

/**
 * KeyboardNavigationObserver allows for conditional child rendering and callbacks depending on whether the user
 * is currently navigating via mouse or keyboard. This is useful for features like infinite scroll, where
 * new pages should be loaded by button-click instead of scroll-based auto-loaded, ensuring keyboard navigation
 * users are able to navigate past the end of the content section and into footer or sidebar sections.
 */
export default class KeyboardNavigationObserver extends React.Component<
  KeyboardNavigationObserverProps,
  KeyboardNavigationObserverState
> {
  constructor(props: KeyboardNavigationObserverProps) {
    super(props);
    this.state = {
      mode: getMode(),
    };
  }

  public render() {
    const { renderInKeyboardMode, renderInMouseMode } = this.props;
    const { mode } = this.state;

    if (mode === 'keyboard' && renderInKeyboardMode) {
      return renderInKeyboardMode();
    }
    if (mode === 'mouse' && renderInMouseMode) {
      return renderInMouseMode();
    }

    return null;
  }

  public componentDidMount() {
    subscribe(this.onModeChange);
  }

  public componentWillUnmount() {
    unsubscribe(this.onModeChange);
  }

  private onModeChange = (mode: NavigationMode) => {
    const { onEnterKeyboardMode, onEnterMouseMode } = this.props;

    if (mode === 'keyboard' && onEnterKeyboardMode) {
      onEnterKeyboardMode();
    }
    if (mode === 'mouse' && onEnterMouseMode) {
      onEnterMouseMode();
    }

    this.setState({ mode });
  };
}
