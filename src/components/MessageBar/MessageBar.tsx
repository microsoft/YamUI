/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { MessageBarType } from './enums';
import './MessageBar.css';

export { MessageBarType };

export interface MessageBarProps extends NestableBaseComponentProps {
  /**
   * Additional label that must be provided for screenreaders.
   */
  ariaLabel: string;

  /**
   * Type of message being displayed.
   * @default MessageBarType.INFO
   */
  type?: MessageBarType;

  /**
   * Elements to be displayed as actions for this message.
   */
  actions?: React.ReactNode;
}

/**
 * A `MessageBar` displays relevant status information. You can use a `MessageBar` to tell the user
 * about a situation, and optionally provide actions for them to take.
 */
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
