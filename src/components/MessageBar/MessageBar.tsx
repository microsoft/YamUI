/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import classNames = require('classnames');
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { MessageBarType } from './enums';
import './MessageBar.css';

export { MessageBarType };

export interface MessageBarProps extends NestableBaseComponentProps {
  ariaLabel: string;
  type?: MessageBarType;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

export default class MessageBar extends React.PureComponent<MessageBarProps, {}> {
  static defaultProps = {
    type: MessageBarType.INFO,
  };

  render() {
    const { ariaLabel, children } = this.props;

    return (
      <div className={this.getClasses()} aria-label={ariaLabel}>
        <div className="y-message-bar--message">{children}</div>
        {this.getActions()}
      </div>
    );
  }

  private getClasses() {
    const { className, type } = this.props;

    const classes: string[] = ['y-message-bar', `y-message-bar__type-${type}`];
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }

  private getActions() {
    const { actions } = this.props;

    if (!actions) {
      return null;
    }

    return <div className="y-message-bar--actions">{actions}</div>;
  }
}
