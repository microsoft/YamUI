/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { TextColor, TextSize } from './enums';
import './text.css';

export { TextColor, TextSize };

export interface TextProps extends NestableBaseComponentProps {
  size?: TextSize;
  color?: TextColor;
}

// TODO: Create a helper to handle this across components
const getClasses = (props: TextProps) => {
  const classes: string[] = ['y-text'];
  if (props.size) {
    classes.push(`y-text__size-${props.size}`);
  }
  if (props.color) {
    classes.push(`y-text__color-${props.color}`);
  }
  if (props.className) {
    classes.push(props.className);
  }
  return classes.join(' ');
};

const Text: React.StatelessComponent<TextProps> = props => (
  <span className={getClasses(props)}>{props.children}</span>
);
export default Text;
