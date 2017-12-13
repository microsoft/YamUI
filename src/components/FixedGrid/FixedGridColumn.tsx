/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './FixedGrid.css';

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

interface ColumnStyles {
  width?: string;
}

/**
 * A `FixedGridColumn` represents each column inside a `FixedGrid`. It should be wrapped in a
 * `FixedGridRow`.
 */
export default class FixedGridColumn extends React.Component<FixedGridColumnProps, {}> {
  render() {
    const { children, verticalAlign } = this.props;

    const hasVerticalAlign = verticalAlign && verticalAlign !== 'top';
    // NOTE: We achieve vertical-align with flexbox. The extra inner div prevents direct children
    //       from receiving flex-child styling and getting wonky vertical alignment.
    const content = !hasVerticalAlign ? children : (
      <div className={`y-fixedGridColumn--inner__${verticalAlign}`}><div>{children}</div></div>
    );

    return (
      <div className={this.getClasses()} style={this.getStyle()}>
        {content}
      </div>
    );
  }

  private getClasses() {
    const { className, fixed, width } = this.props;

    const classes: string[] = ['y-fixedGridColumn'];
    if (fixed) {
      classes.push('y-fixedGridColumn__isFixed');
    }
    if (width) {
      classes.push('y-fixedGridColumn__hasWidth');
    }
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }

  private getStyle() {
    const { fixed, width } = this.props;
    const styles: ColumnStyles = {};

    // Only set a width on a fixed column
    if (!fixed || !width) {
      return styles;
    }

    styles.width = `${width}px`;
    return styles;
  }
}
