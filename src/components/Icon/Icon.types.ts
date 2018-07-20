/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { BaseComponentProps } from '../../util/BaseComponent/props';

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

export enum IconSize {
  XXLARGE = '32',
  XLARGE = '24',
  LARGE = '20',
  MEDIUM = '16',
  SMALL = '14',
  XSMALL = '12',
}
