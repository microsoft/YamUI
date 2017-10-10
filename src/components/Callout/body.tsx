/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import classNames = require('classnames');
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import Block, { GutterSize } from '../Block';

export interface CalloutBodyProps extends NestableBaseComponentProps {}

export const CalloutBody: React.StatelessComponent<CalloutBodyProps> = props => (
  <div className={classNames('y-callout--body', props.className)}>
    <Block padding={GutterSize.XLARGE}>{props.children}</Block>
  </div>
);
