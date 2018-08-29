/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';
import { join } from '../../util/classNames';
import Block, { TextSize } from '../Block';
import { FixedGridRow, FixedGridColumn, GutterSize } from '../FixedGrid';
import { getClassNames } from './MessageBar.styles';
import { MessageBarType, MessageBarProps } from './MessageBar.types';

export class MessageBar extends React.Component<MessageBarProps & CustomizableComponentProps> {
  public render() {
    const { actions, children, className, type = MessageBarType.INFO, theme = defaultTheme } = this.props;
    const classNames = getClassNames({ type, theme });

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

/**
 * A `MessageBar` displays relevant status information. You can use a `MessageBar` to tell the user
 * about a situation, and optionally provide actions for them to take.
 */
@customizable('MessageBar', ['theme'])
export default class CustomizableMessageBar extends MessageBar {}
