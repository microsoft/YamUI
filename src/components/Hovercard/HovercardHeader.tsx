/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { NestableBaseComponentProps as HovercardHeaderProps } from '../../util/BaseComponent/props';
import Block, { GutterSize } from '../Block';
import { getClassNames } from './Hovercard.styles';

export { HovercardHeaderProps };

/**
 * Header of a `Hovercard` component. Used to maintain a consistent layout.
 */
export default class HovercardHeader extends React.Component<HovercardHeaderProps> {
  public render() {
    const { className, children } = this.props;
    const classNames = getClassNames();

    return (
      <div className={join(['y-hovercard--header', className, classNames.header])}>
        <Block padding={GutterSize.XLARGE}>{children}</Block>
      </div>
    );
  }
}
