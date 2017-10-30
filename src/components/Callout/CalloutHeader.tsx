/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import classNames = require('classnames');
import { NestableBaseComponentProps as CalloutHeaderProps } from '../../util/BaseComponent/props';
import Block, { GutterSize } from '../Block';

export { CalloutHeaderProps };

/**
 * Header of a `Callout` component. Used to maintain a consistent layout.
 */
export default class CalloutHeader extends React.PureComponent<CalloutHeaderProps, {}> {
  render() {
    const { className, children } = this.props;

    return (
      <div className={classNames('y-callout--header', className)}>
        <Block padding={GutterSize.XLARGE}>{children}</Block>
      </div>
    );
  }
}
