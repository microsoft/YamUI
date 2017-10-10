/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { Enum } from 'typescript-string-enums';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { TextSize } from '../../util/enums/textSize';
import './text.css';

export const TextColor = Enum({
  /**
   * Primary black text color
   */
  PRIMARY: 'primary',

  /**
   * Secondary dark gray text color
   */
  SECONDARY: 'secondary',

  /**
   * Tertiary color for metadata
   */
  METADATA: 'metadata',

  /**
   * For use on darker backgrounds
   */
  WHITE: 'white',
});
export type TextColor = Enum<typeof TextColor>;

export interface TextProps extends NestableBaseComponentProps {
  size?: TextSize;
  color?: TextColor;
}

export { TextSize };

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
