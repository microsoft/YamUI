/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import classNames = require('classnames');
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './fixed-grid.css';

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
}

interface ColumnStyles {
  width?: string;
}

export class FixedGridColumn extends React.PureComponent<FixedGridColumnProps, {}> {
  render() {
    const { children } = this.props;

    return (
      <div className={this.getClasses()} style={this.getStyle()}>
        {children}
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
