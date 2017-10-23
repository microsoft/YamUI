/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './clickable.css';

export interface ClickableProps extends NestableBaseComponentProps {
  block?: boolean;
  ariaLabel?: string;
  title?: string;
  onClick?: (event: any) => void;
}

const getClasses = (props: ClickableProps) => {
  const classes: string[] = ['y-clickable'];
  if (props.block) {
    classes.push('y-clickable__block');
  }
  if (props.className) {
    classes.push(props.className);
  }
  return classes.join(' ');
};

const Clickable: React.StatelessComponent<ClickableProps> = props => (
  <button
    className={getClasses(props)}
    onClick={props.onClick}
    aria-label={props.ariaLabel}
    title={props.title}
  >
    {props.children}
  </button>
);

export default Clickable;
