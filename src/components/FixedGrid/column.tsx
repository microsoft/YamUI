/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import classNames = require('classnames');
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './fixed-grid.css';


export interface FixedGridColumnProps extends NestableBaseComponentProps {
  fixed?: boolean;
  width?: number;
}

const getClasses = (props: FixedGridColumnProps) => {
  const classes: string[] = [
    'y-fixedGridColumn',
  ];
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


export const FixedGridColumn: React.StatelessComponent<FixedGridColumnProps> = (props) => {
  return (
    <div className={getClasses(props)} style={getStyle(props)}>
      {props.children}
    </div>
  );
};
