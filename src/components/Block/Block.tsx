/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { TextColor, TextSize } from '../Text/enums';
import { getClassNames } from './Block.classNames';
import { getStyles } from './Block.styles';

export { TextColor, TextSize };

/**
 * An integer scalar which represents a number of grid units. 1 grid unit is 4px.
 */
export type GutterValue = number;

export interface BlockProps extends NestableBaseComponentProps {
  /**
   * Gutter spacing to be added above this block.
   */
  topSpacing?: GutterValue;

  /**
   * Gutter spacing to be added below this block.
   */
  bottomSpacing?: GutterValue;

  /**
   * Padding to be added uniformly within this block.
   */
  padding?: GutterValue;

  /**
   * Padding to be added to the left and right. Will override a "padding" value.
   */
  horizontalPadding?: GutterValue;

  /**
   * Padding to be added to the top and bottom. Will override a "padding" value.
   */
  verticalPadding?: GutterValue;

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
   * Limits text content to a single line, hiding additional text with an ellipsis.
   */
  ellipsis?: boolean;
}

interface BlockStyles {
  marginTop?: string;
  paddingTop?: string;
}

/**
 * A `Block` is a layout component to build consistent padding and vertical spacing between
 * components. It allows you to `push` a chunk of UI up or down by individual pixels to keep text in
 * the `4px` vertical rhythm. It's also the primary place you should set `textSize` in your UIs,
 * providing enumerated options for the supported `font-size`/`line-height` combinations.
 */
export default class Block extends React.Component<BlockProps, {}> {
  render() {
    const {
      children,
      className,
      topSpacing,
      bottomSpacing,
      padding,
      horizontalPadding,
      verticalPadding,
      push,
      textAlign,
      textColor,
      textSize,
      ellipsis,
    } = this.props;
    const classNames = getClassNames(
      getStyles(
        topSpacing,
        bottomSpacing,
        padding,
        horizontalPadding,
        verticalPadding,
        push,
        textAlign,
        textColor,
        textSize,
        ellipsis,
      ),
      className,
    );

    return (
      <div className={classNames.root}>
        <div className={classNames.inner}>{children}</div>
      </div>
    );
  }
}
