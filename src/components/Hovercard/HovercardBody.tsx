/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import Block, { GutterSize } from '../Block';
import { HovercardBodyProps } from './Hovercard.types';

/**
 * Body of a `Hovercard` component. Used to maintain a consistent layout.
 */
export default class HovercardBody extends React.Component<HovercardBodyProps> {
  public render() {
    const { className, children } = this.props;

    return (
      <div className={join(['y-hovercard--body', className])}>
        <Block padding={GutterSize.XLARGE}>{children}</Block>
      </div>
    );
  }
}
