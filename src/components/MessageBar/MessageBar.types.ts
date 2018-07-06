/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';

export enum MessageBarType {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}

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
