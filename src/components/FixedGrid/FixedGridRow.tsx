/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { GutterSize } from './types';
import { getClassNames } from './FixedGridRow.styles';
import { FixedGridColumn, FixedGridColumnProps } from './';

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
    const { children, className, bottomSpacing, gutterSize = GutterSize.SMALL } = this.props;
    const classNames = getClassNames({ bottomSpacing, gutterSize });
    return (
      <div className={join(['y-fixedGridRow', className, classNames.root])}>
        {this.childrenWithClassName(children, classNames.column)}
      </div>
    );
  }

  private childrenWithClassName = (children: React.ReactNode, className: string) => {
    return React.Children.map(children, child => {
      if (React.isValidElement(child) && child.type === FixedGridColumn) {
        return React.cloneElement(child as React.ReactElement<FixedGridColumnProps>, {
          className: `${(child.props as FixedGridColumnProps).className} ${className}`,
        });
      }
      return child;
    });
  };
}
