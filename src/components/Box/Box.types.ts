/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { PaletteColor } from '../../util/colors';

export interface BoxProps extends NestableBaseComponentProps {
  /**
   * Called when box is clicked.
   */
  onClick?: (() => void);

  /**
   * Background color of the box.
   */
  backgroundColor?: PaletteColor;

  /**
   * Color of the border.
   */
  borderColor?: PaletteColor;
}
