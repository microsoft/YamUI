/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import classNames = require('classnames');
import { NestableBaseComponentProps as HovercardBodyProps } from '../../util/BaseComponent/props';
import Block, { GutterSize } from '../Block';

export { HovercardBodyProps };

/**
 * Body of a `Hovercard` component. Used to maintain a consistent layout.
 */
export default class HovercardBody extends React.Component<HovercardBodyProps, {}> {
  render() {
    const { className, children } = this.props;

    return (
      <div className={classNames('y-hovercard--body', className)}>
        <Block padding={GutterSize.XLARGE}>{children}</Block>
      </div>
    );
  }
}
