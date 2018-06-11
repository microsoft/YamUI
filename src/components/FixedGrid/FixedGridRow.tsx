/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { GutterSize } from './types';
import { getClassNames } from './FixedGridRow.styles';

export interface FixedGridRowProps extends NestableBaseComponentProps {
  /**
   * Margin added below the row.
   */
  bottomSpacing?: GutterSize;

  /**
   * Horizontal gutter space between each column.
   * @default GutterSize.SMALL
   */
  gutterSize?: GutterSize;
}

export { GutterSize };

/**
 * A `FixedGridRow` represents each row inside a `FixedGrid`. It should wrap `FixedGridColumn`s.
 */
export default class FixedGridRow extends React.Component<FixedGridRowProps> {
  public render() {
    const { className, bottomSpacing, children, gutterSize = GutterSize.SMALL } = this.props;
    const classNames = getClassNames({ bottomSpacing, gutterSize });
    return <div className={join(['y-fixedGridRow', className, classNames.root])}>{children}</div>;
  }
}
