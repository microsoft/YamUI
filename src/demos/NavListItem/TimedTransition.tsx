/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { Transition } from 'react-transition-group';
import autobind from 'core-decorators/lib/autobind';

export type TransitionStyles = { [key: string]: React.CSSProperties };

export interface TimedTransitionProps {
  className?: string;

  /**
   * Time to wait before showing the children (in milliseconds).
   */
  showAfter?: number;

  /**
   * Duration of the animation (in milliseconds).
   */
  duration: number;

  /**
   * Time to wait before hiding the children (in milliseconds).
   */
  hideAfter?: number;

  /**
   * Function that returns the necessary styles for a certain animation state.
   */
  getStyle: (state: string) => TransitionStyles;

  /**
   * Animation end callback handler.
   */
  onAnimationEnd?: () => void;
}

export interface TimedTransitionState {
  /**
   * Whether to show the children.
   */
  show?: boolean;
}

export default class TimedTransition extends React.PureComponent<
  TimedTransitionProps,
  TimedTransitionState
> {
  private timeout: number;

  static defaultProps = {
    showAfter: 0,
  };

  constructor() {
    super();

    this.state = { show: true };
  }

  componentDidUpdate(prevProps: TimedTransitionProps) {
    if (prevProps === this.props) {
      return;
    }

    // If we've received new props, show the children.
    this.setState({ show: true });
  }

  componentWillUnmount() {
    window.clearTimeout(this.timeout);
  }

  render() {
    const { show } = this.state;

    return (
      <Transition timeout={0} in={show} appear={true} addEndListener={this.addEndListener}>
        {this.getChildren}
      </Transition>
    );
  }

  @autobind
  private addEndListener(node: HTMLElement, done: () => void) {
    node.addEventListener('transitionend', (evt) => {
      this.handleTransitionEnd(evt, done);
    });
  }

  @autobind
  private handleTransitionEnd(evt: Event, done: () => void) {
    // Make sure we stop propagation. Otherwise this event will bubble up and interfere with
    // animations above it.
    evt.stopPropagation();

    const { hideAfter, onAnimationEnd } = this.props;

    if (hideAfter == null) {
      return;
    }

    if (this.state.show) {
      window.clearTimeout(this.timeout);
      this.timeout = window.setTimeout(
        () => {
          this.setState({ show: false }, done);
        },
        hideAfter,
      );
    } else {
      onAnimationEnd && onAnimationEnd();
    }
  }

  @autobind
  private getChildren(state: string) {
    const { className, getStyle, children } = this.props;
    return (
      <div className={className} style={getStyle(state)}>
        {children}
      </div>
    );
  }
}
