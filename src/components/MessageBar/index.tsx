/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import classNames = require('classnames');
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { MessageBarType } from './enums';
import './message-bar.css';

export { MessageBarType };

export interface MessageBarProps extends NestableBaseComponentProps {
  ariaLabel: string;
  type?: MessageBarType;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

const getActions = (props: MessageBarProps) => {
  if (!props.actions) {
    return null;
  }
  return <div className="y-message-bar--actions">{props.actions}</div>;
};

const MessageBar: React.StatelessComponent<MessageBarProps> = (props) => {
  const actions = getActions(props);
  const classes = classNames(`y-message-bar y-message-bar__type-${props.type}`, props.className);
  return (
    <div className={classes} aria-label={props.ariaLabel}>
      <div className="y-message-bar--message">{props.children}</div>
      {actions}
    </div>
  );
};

export default MessageBar;

MessageBar.defaultProps = {
  type: MessageBarType.INFO,
};
