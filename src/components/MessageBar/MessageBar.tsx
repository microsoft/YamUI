/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { MessageBarType } from './types';
import Block, { TextSize } from '../Block';
import { FixedGridRow, FixedGridColumn, GutterSize } from '../FixedGrid';
import { getClassNames } from './MessageBar.styles';

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
export default class MessageBar extends React.Component<MessageBarProps> {
  public render() {
    const { actions, children, className, type = MessageBarType.INFO } = this.props;
    const classNames = getClassNames({ type });

    return (
      <Block textSize={TextSize.SMALL} className={join(['y-message-bar', className, classNames.root])}>
        <FixedGridRow gutterSize={GutterSize.XXLARGE}>
          <FixedGridColumn>{children}</FixedGridColumn>
          {actions && (
            <FixedGridColumn fixed={true} className={classNames.actions}>
              {actions}
            </FixedGridColumn>
          )}
        </FixedGridRow>
      </Block>
    );
  }
}
