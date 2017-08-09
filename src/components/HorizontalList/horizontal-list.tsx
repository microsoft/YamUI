/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './horizontal-list.css';


export interface HorizontalListProps extends NestableBaseComponentProps {
  align?: 'left' | 'right';
}

const getClasses = (props: HorizontalListProps) => {
  const classes: string[] = [
    'y-horizontalList',
  ];
  if (props.align === 'right') {
    classes.push('y-horizontalList__align-right');
  }
  if (props.className) {
    classes.push(props.className);
  }
  return classes.join(' ');
};

export const HorizontalList: React.StatelessComponent<HorizontalListProps> = (props) =>
  <ul className={getClasses(props)}>{props.children}</ul>;

HorizontalList.defaultProps = {
  align: 'left',
};
