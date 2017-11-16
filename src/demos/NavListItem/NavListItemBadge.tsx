/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import TimedTransition, { TransitionStyles } from './TimedTransition';
import autobind from 'core-decorators/lib/autobind';
import Block, { TextSize } from '../../components/Block';
import './NavListItemBadge.css';

export interface NavListItemBadgeProps {
  value: number;
  previousValue?: number;
}

const slideDelay = 1300;
const slideDuration = 1300;

const transitionStyles: TransitionStyles = {
  entering: {
    bottom: '0',
    transition: `bottom ${slideDuration}ms ${slideDelay}ms`,
  },
  entered: {
    bottom: '-100%',
    transition: `bottom ${slideDuration}ms ${slideDelay}ms`,
  },
  exiting: {
    bottom: '0',
  },
  exited: {
    bottom: '0',
  },
};

export default class NavListItemBadge extends React.PureComponent<NavListItemBadgeProps, {}> {
  render() {
    const { value: currentValue, previousValue } = this.props;

    return (
      <div className="y-nav-list-item-badge">
        <div className="y-nav-list-item-badge__container">
          <TimedTransition
            className="y-nav-list-item-badge__values"
            showAfter={slideDelay}
            duration={slideDuration}
            getStyle={this.getStyle}
          >
            <Block className="y-nav-list-item-badge__value" textSize={TextSize.XSMALL}>
              {currentValue}
            </Block>
            <Block className="y-nav-list-item-badge__value" textSize={TextSize.XSMALL}>
              {previousValue}
            </Block>
          </TimedTransition>
        </div>
      </div>
    );
  }

  @autobind
  private getStyle(state: string) {
    return transitionStyles[state];
  }
}
