/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { IconSize } from '../../util/enums/iconSize';
import paths from './paths';
import './icon.css';


export { IconSize };
export type IconName = keyof typeof paths;

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

const getClasses = (props: IconProps) => {
  const classes = [
    'y-icon',
    `y-icon__${props.icon}`,
  ];
  if (props.block) {
    classes.push('y-icon__isBlock');
  }
  if (props.className) {
    classes.push(props.className);
  }
  return classes.join(' ');
};

const getInlineStyles = (props: IconProps) => {
  const length = `${props.size}px`;
  const styles: IconStyles = {
    height: length,
    width: length,
  };
  if (props.color) {
    styles.color = props.color;
  }
  return styles;
};

const Icon: React.StatelessComponent<IconProps> = (props) => {
  const { size, icon } = props;
  const path = paths[icon];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="320"
      height="320"
      viewBox="0 0 320 320"
      aria-hidden="true"
      className={getClasses(props)}
      style={getInlineStyles(props)}
    >
      <path fillRule="evenodd" d={path}/>
    </svg>
  );

};

Icon.defaultProps = {
  size: IconSize.MEDIUM,
};

export default Icon;
