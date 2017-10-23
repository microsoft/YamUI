/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { IconSize } from './enums';
import icons from './icons';
import './icon.css';

export { IconSize, icons };
export type IconName = keyof typeof icons;

export interface IconProps extends BaseComponentProps {
  /**
   * Icon classname.
   */
  icon: IconName;

  /**
   * Optional pre-determined size. Defaults to medium.
   */
  size?: IconSize;

  /**
   * Override inherited color. Can be any valid CSS color.
   */
  color?: string;

  /**
   * Sets icon style to `display: block`.
   */
  block?: boolean;
}

interface IconStyles {
  color?: string;
  height: string;
  width: string;
}

export default class Icon extends React.PureComponent<IconProps, {}> {
  static defaultProps = {
    size: IconSize.MEDIUM,
  };

  public render() {
    const CurrentIcon = icons[this.props.icon];
    return (
      <CurrentIcon
        className={this.getClasses()}
        style={this.getInlineStyles()}
        data-icon={this.props.icon}
      />
    );
  }

  private getClasses() {
    const classes = ['y-icon'];
    if (this.props.block) {
      classes.push('y-icon__isBlock');
    }
    if (this.props.className) {
      classes.push(this.props.className);
    }
    return classes.join(' ');
  }

  private getInlineStyles() {
    const length = this.props.size + 'px';
    const styles: IconStyles = {
      height: length,
      width: length,
    };
    if (this.props.color) {
      styles.color = this.props.color;
    }
    return styles;
  }
}
