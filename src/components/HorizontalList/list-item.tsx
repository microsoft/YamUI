/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './horizontal-list.css';

export { NestableBaseComponentProps };


const getClasses = (props: NestableBaseComponentProps) => {
  const classes: string[] = [
    'y-horizontalList--item',
  ];
  if (props.className) {
    classes.push(props.className);
  }
  return classes.join(' ');
};

export const ListItem: React.StatelessComponent<NestableBaseComponentProps> = (props) =>
  <li className={getClasses(props)}>{props.children}</li>;
