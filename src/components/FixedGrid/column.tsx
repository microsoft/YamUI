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

const getClasses = (props: FixedGridColumnProps) => {
  const classes: string[] = ['y-fixedGridColumn'];
  if (props.fixed) {
    classes.push('y-fixedGridColumn__isFixed');
  }
  if (props.width) {
    classes.push('y-fixedGridColumn__hasWidth');
  }
  if (props.className) {
    classes.push(props.className);
  }
  return classes.join(' ');
};

interface ColumnStyles {
  width?: string;
}
const getStyle = (props: FixedGridColumnProps) => {
  const styles: ColumnStyles = {};

  // Only set a width on a fixed column
  if (!props.fixed || !props.width) {
    return styles;
  }

  styles.width = `${props.width}px`;
  return styles;
};

export const FixedGridColumn: React.StatelessComponent<FixedGridColumnProps> = props => (
  <div className={getClasses(props)} style={getStyle(props)}>
    {props.children}
  </div>
);
