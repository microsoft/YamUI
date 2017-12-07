/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { MessageBarType } from './enums';
import Block, { TextSize } from '../Block';
import { FixedGridRow, FixedGridColumn, GutterSize } from '../FixedGrid';
import './MessageBar.css';

export { MessageBarType };

export interface MessageBarProps extends NestableBaseComponentProps {

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
    const { actions, children } = this.props;

    return (
      <Block textSize={TextSize.SMALL} className={this.getClasses()}>
        <FixedGridRow gutterSize={GutterSize.XXLARGE}>
          <FixedGridColumn>{children}</FixedGridColumn>
          {actions && <FixedGridColumn fixed={true}><span className='y-message-bar__nowrap'>{actions}</span></FixedGridColumn>}
        </FixedGridRow>
      </Block>
    );
  }

  private getClasses() {
    const { className, type } = this.props;
    const classes = ['y-message-bar', `y-message-bar__type-${type}`];

    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }
}
