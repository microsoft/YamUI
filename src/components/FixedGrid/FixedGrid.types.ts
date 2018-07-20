/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';

export interface FixedGridRowProps extends NestableBaseComponentProps {
  /**
   * Margin added below the row.
   */
  bottomSpacing?: GutterSize;

  /**
   * Horizontal gutter space between each column.
   * @default GutterSize.SMALL
   */
  gutterSize?: GutterSize;
}

export interface FixedGridColumnProps extends NestableBaseComponentProps {
  /**
   * Set to true if this column should have a fixed width. If true, and `width` is not provided,
   * this column will shrink to fit its content.
   */
  fixed?: boolean;

  /**
   * The number of pixels wide this column should be. Ignored if `fixed` is not set to true.
   */
  width?: number;

  /**
   * The vertical alignment of the column's content.
   * @default 'top'
   */
  verticalAlign?: 'top' | 'middle' | 'bottom';
}

export enum GutterSize {
  /**
   * 24px
   */
  XXLARGE = 'xxLarge',

  /**
   * 20px
   */
  XLARGE = 'xLarge',
  /**
   * 16px
   */
  LARGE = 'large',
  /**
   * 12px
   */
  MEDIUM = 'medium',
  /**
   * 8px
   */
  SMALL = 'small',
  /**
   * 4px
   */
  XSMALL = 'xSmall',
  /**
   * 0px
   */
  NONE = 'none',
}
