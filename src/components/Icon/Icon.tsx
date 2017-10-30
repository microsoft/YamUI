/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { IconSize } from './enums';
import icons from './icons';
import './Icon.css';

export { IconSize, icons };
export type IconName = keyof typeof icons;

export interface IconProps extends BaseComponentProps {
  /**
   * Specific icon graphic to render.
   */
  icon: IconName;

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
   * Icon size, which also accounts for `font-size` and `line-height`.
   * @default IconSize.MEDIUM
   */
  size?: IconSize;
}

interface IconStyles {
  height: string;
  width: string;
  color?: string;
}

/**
 * An `Icon` renders an SVG icon.
 */
export default class Icon extends React.PureComponent<IconProps, {}> {
  static defaultProps = {
    size: IconSize.MEDIUM,
  };

  public render() {
    const { icon } = this.props;
    const CurrentIcon = icons[icon];

    return (
      <CurrentIcon
        className={this.getClasses()}
        data-icon={icon}
        style={this.getInlineStyles()}
      />
    );
  }

  private getClasses() {
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

  private getInlineStyles() {
    const { color, size } = this.props;
    const length = size + 'px';
    const styles: IconStyles = {
      height: length,
      width: length,
    };

    if (color) {
      styles.color = color;
    }

    return styles;
  }
}
