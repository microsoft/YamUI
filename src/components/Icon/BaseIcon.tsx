/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { IconSize } from './enums';
import './Icon.css';


export { IconSize };

export interface IconProps extends BaseComponentProps {
  /**
   * Sets icon style to `display: block`. This is helpful if the inline icon's `line-height` is
   * taller than the current line's `line-height`, and is creating extra vertical space.
   */
  block?: boolean;

  /**
   * Manual color override (by default the icon inherits its parent's color). Can be any valid CSS
   * color.
   */
  color?: string;

  /**
   * Icon size, which also accounts for `font-size` and `line-height`. If not set, size will
   * match the nearest <Block> or <Text> parent with textSize specified.
   */
  size?: IconSize;
}

export interface IconStyles {
  height?: string;
  width?: string;
  color?: string;
}

/**
 * An `Icon` renders an SVG icon.
 */
export default class BaseIcon extends React.Component<IconProps, {}> {
  protected getClassName() {
    const { block, className } = this.props;
  
    const classes = ['y-icon'];
    if (block) {
      classes.push('y-icon__isBlock');
    }
    if (className) {
      classes.push(className);
    }
  
    return classes.join(' ');
  }
  
  protected getStyle() {
    const { color, size } = this.props;
  
    const styles: IconStyles = {};
  
    if (size) {
      const length = size + 'px';
      styles.height = length;
      styles.width = length;
    }
    if (color) {
      styles.color = color;
    }
  
    return styles;
  }
}
