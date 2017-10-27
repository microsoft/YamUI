/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { TextColor, TextSize } from './enums';
import './text.css';

export { TextColor, TextSize };

export interface TextProps extends NestableBaseComponentProps {
  color?: TextColor;
  size?: TextSize;
}

export default class Text extends React.PureComponent<TextProps, {}> {
  render() {
    const { children } = this.props;

    return <span className={this.getClasses()}>{children}</span>;
  }

  private getClasses() {
    const { className, color, size } = this.props;

    const classes: string[] = ['y-text'];
    if (size) {
      classes.push(`y-text__size-${size}`);
    }
    if (color) {
      classes.push(`y-text__color-${color}`);
    }
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }
}
