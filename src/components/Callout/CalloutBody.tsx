/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import classNames = require('classnames');
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import Block, { GutterSize } from '../Block';

export interface CalloutBodyProps extends NestableBaseComponentProps {}

export default class CalloutBody extends React.PureComponent<CalloutBodyProps, {}> {
  render() {
    const { className, children } = this.props;

    return (
      <div className={classNames('y-callout--body', className)}>
        <Block padding={GutterSize.XLARGE}>{children}</Block>
      </div>
    );
  }
}
