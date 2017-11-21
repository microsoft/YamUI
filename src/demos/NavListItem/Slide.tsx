/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import autobind from 'core-decorators/lib/autobind';
import TimedTransition, { TransitionStyles } from './TimedTransition';

export interface SlideProps {
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
   * Animation end callback handler.
   */
  onAnimationEnd?: () => void;
}

const defaultStyles: React.CSSProperties = {
  position: 'absolute',
  right: '0',
  top: '0',
};

export default class Slide extends React.PureComponent<SlideProps, {}> {
  render() {
    return (
      <TimedTransition {...this.props} getStyle={this.getStyle}>
        <div>{this.props.children}</div>
      </TimedTransition>
    );
  }

  @autobind
  private getStyle(state: string) {
    const { showAfter, duration } = this.props;

    const transitionStyles: TransitionStyles = {
      entering: {
        transform: 'translateX(130%)',
      },
      entered: {
        transition: `transform ${duration}ms ${showAfter}ms`,
        transform: 'translateX(0%)',
      },
      exited: {
        transform: 'translateX(130%)',
        transition: `transform ${duration}ms ${showAfter}ms`,
      },
    };

    return {
      ...defaultStyles,
      ...transitionStyles[state],
    };
  }
}
