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
  height: string;
  width: string;
}

export default class Icon extends React.Component<IconProps, {}> {
  static defaultProps = {
    size: IconSize.MEDIUM,
  };

  public render () {
    const { size, icon } = this.props;

    return (
      <svg className={this.getClasses()} style={this.getInlineStyles()} aria-hidden="true">
        <use xlinkHref={`#${icon}`} />
      </svg>
    );
  }

  private getClasses () {
    const classes = [
      'y-icon',
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
