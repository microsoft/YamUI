/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { GutterSize } from '../FixedGrid/types';
import { TextColor, TextSize } from '../Text/Text.types';
import { IPalette } from 'office-ui-fabric-react/lib/Styling';

export { GutterSize, TextColor, TextSize };

export type BackgroundColor = keyof IPalette;

export interface BlockProps extends NestableBaseComponentProps {
  /**
   * Gutter spacing to be added above this block.
   */
  topSpacing?: GutterSize;

  /**
   * Gutter spacing to be added below this block.
   */
  bottomSpacing?: GutterSize;

  /**
   * Padding to be added uniformly within this block.
   */
  padding?: GutterSize;

  /**
   * Padding to be added to the left and right. Will override a "padding" value.
   */
  horizontalPadding?: GutterSize;

  /**
   * Padding to be added to the top and bottom. Will override a "padding" value.
   */
  verticalPadding?: GutterSize;

  /**
   * Number of pixels to finely adjust the gutter spacing above this block. Positive pushes the
   * component down, negative pulls it up. Only use this to adjust for vertical rhythm in text.
   */
  push?: number;

  /**
   * Text alignment within this block.
   */
  textAlign?: 'left' | 'right' | 'center';

  /**
   * Text color within this block.
   */
  textColor?: TextColor;

  /**
   * Text size (`font-size` and `line-height`) within this block.
   */
  textSize?: TextSize;

  /**
   * Background color of the block.
   */
  backgroundColor?: BackgroundColor;

  /**
   * Limits text content to a single line, hiding additional text with an ellipsis.
   */
  ellipsis?: boolean;
}
