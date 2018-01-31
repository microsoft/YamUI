/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import Observer from 'react-intersection-observer';
import { BaseComponentProps } from '../../util/BaseComponent/props';

export interface VisibleRenderProps extends BaseComponentProps {
  /**
   * A callback which will be triggered when the component is scrolled into view.
   */
  onEnter?: () => void;

  /**
   * A callback which will be triggered when the component is scrolled out of view.
   */
  onLeave?: () => void;

  /**
   * Render prop to return child content when the component is visible.
   */
  whenInView?: () => React.ReactNode;

  /**
   * Render prop to return child content when the component is visible.
   */
  whenOutOfView?: () => React.ReactNode;

  /**
   * Wrapper element tag name.
   * @default 'div'
   */
  tag?: string;

  /**
   * A CSS margin string which pushes the intersection boundary further in or out of the viewport.
   * A positive value will expand the viewport threshold so your component is considered "in view" while it's
   * still offscreen, for example you could set thresholdOffset="200px" you want an image to start loading before
   * it scrolls into view. A negative value will move the boundary into the viewport, triggering "in view" after
   * it's already becoming visible.
   * "200px", "200px 0 50px 0", "-50px" are all valid values.
   */
  rootMargin?: string;
}

/**
 * VisibleRender allows for conditional child rendering and callbacks when scrolled in or out of view.
 */
export default class VisibleRenderer extends React.Component<VisibleRenderProps> {
  public render() {
    const { rootMargin, tag } = this.props;

    return (
      <Observer
        tag={tag || 'div'}
        rootMargin={rootMargin}
        onChange={this.onVisibilityChange}
        render={this.getObserverChildren}
      />
    );
  }

  private getObserverChildren = (isVisible: boolean) => {
    const { whenInView, whenOutOfView } = this.props;
    if (isVisible && whenInView) {
      return whenInView();
    }

    if (!isVisible && whenOutOfView) {
      return whenOutOfView();
    }

    return null;
  };

  private onVisibilityChange = (isVisible: boolean) => {
    if (isVisible) {
      this.props.onEnter && this.props.onEnter();
    } else {
      this.props.onLeave && this.props.onLeave();
    }
  };
}
