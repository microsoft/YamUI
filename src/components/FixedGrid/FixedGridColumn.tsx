/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { getClassNames } from './FixedGridColumn.styles';

export interface FixedGridColumnProps extends NestableBaseComponentProps {
  /**
   * Set to true if this column should have a fixed width. If true, and `width` is not provided,
   * this column will shrink to fit its content.
   */
  fixed?: boolean;

  /**
   * The number of pixels wide this column should be. Ignored if `fixed` is not set to true.
   */
  width?: number;

  /**
   * The vertical alignment of the column's content.
   * @default 'top'
   */
  verticalAlign?: 'top' | 'middle' | 'bottom';
}
/**
 * A `FixedGridColumn` represents each column inside a `FixedGrid`. It should be wrapped in a
 * `FixedGridRow`.
 */
export default class FixedGridColumn extends React.Component<FixedGridColumnProps> {
  public render() {
    const { children, verticalAlign = 'top', className, fixed, width } = this.props;
    const classNames = getClassNames({ fixed, width, verticalAlign });

    return (
      <div className={join(['y-fixedGridColumn', className, classNames.root])}>
        {/* NOTE: We achieve vertical-align with flexbox. The extra inner div prevents direct children
           from receiving flex-child styling and getting wonky vertical alignment. */
        verticalAlign && verticalAlign !== 'top' ? (
          <div className={classNames.inner}>
            <div>{children}</div>
          </div>
        ) : (
          children
        )}
      </div>
    );
  }
}
