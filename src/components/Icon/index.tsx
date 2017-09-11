/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { IconSize } from '../../util/enums/iconSize';
import ICONS from './icons';
import './icon.css';

export { IconSize, ICONS };
export type IconName = keyof typeof ICONS;

export interface IconProps extends BaseComponentProps {
  /**
   * Icon classname, which matches the keys of ICONS
   */
  icon: IconName;

  /**
   * Optional pre-determined size. Defaults to IconSize.MEDIUM
   */
  size?: IconSize;

  /**
   * Override inherited color. Can be any valid CSS color.
   */
  color?: string;

  /**
   * Sets Icon style to display: block.
   */
  block?: boolean;
}

interface IconStyles {
  color?: string;
}

export default class Icon extends React.PureComponent<IconProps, {}> {
  static defaultProps = {
    size: IconSize.MEDIUM,
  };

  public render () {
    const length = this.props.size + 'px';
    const CurrentIcon = ICONS[this.props.icon];
    return <CurrentIcon
            className={this.getClasses()}
            style={this.getInlineStyles()}
            height={length}
            width={length}
            ariaHidden />;
  }

  private getClasses () {
    const classes = [
      'y-icon',
      `y-icon__${this.props.icon}`,
    ];
    if (this.props.block) {
      classes.push('y-icon__isBlock');
    }
    if (this.props.className) {
      classes.push(this.props.className);
    }
    return classes.join(' ');
  }

  private getInlineStyles () {
    const styles: IconStyles = {};
    if (this.props.color) {
      styles.color = this.props.color;
    }
    return styles;
  }
}
