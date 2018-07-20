/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { getClassNames } from './Icon.styles';
import { IconProps } from './Icon.types';

/**
 * An `Icon` renders an SVG icon.
 */
export default abstract class BaseIcon extends React.Component<IconProps> {
  protected getClassName() {
    const { block, className, color } = this.props;
    const classNames = getClassNames({ block, color });

    return join(['y-icon', className, classNames.root]);
  }

  protected getStyle() {
    const { size } = this.props;
    return size ? { height: `${size}px`, width: `${size}px` } : {};
  }
}
