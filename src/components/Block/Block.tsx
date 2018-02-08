/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { GutterSize } from '../FixedGrid/enums';
import { TextColor, TextSize } from '../Text/enums';
import './Block.css';

export { GutterSize, TextColor, TextSize };

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
export default class Block extends React.Component<BlockProps> {
  public render() {
    const { children } = this.props;

    return (
      <div className={this.getClasses()} style={this.getStyle()}>
        <div className={this.getInnerClasses()}>{children}</div>
      </div>
    );
  }

  private getClasses() {
    const { topSpacing, bottomSpacing, textSize, textColor, textAlign, className } = this.props;

    const classes: string[] = ['y-block'];
    if (topSpacing) {
      classes.push(`y-block__topSpacing-${topSpacing}`);
    }
    if (bottomSpacing) {
      classes.push(`y-block__bottomSpacing-${bottomSpacing}`);
    }
    if (textColor) {
      classes.push(`y-block__textColor-${textColor}`);
    }
    if (textSize) {
      classes.push(`y-textSize-${textSize}`);
    }
    if (textAlign === 'center' || textAlign === 'right') {
      classes.push(`y-block__textAlign-${textAlign}`);
    }
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }

  private getInnerClasses() {
    const { ellipsis, padding, horizontalPadding, verticalPadding } = this.props;

    const classes = ['y-block--inner'];
    if (ellipsis) {
      classes.push('y-block__ellipsis');
    }
    if (padding) {
      classes.push(`y-block--inner__padding-${padding}`);
    }
    if (horizontalPadding) {
      classes.push(`y-block--inner__horizontalPadding-${horizontalPadding}`);
    }
    if (verticalPadding) {
      classes.push(`y-block--inner__verticalPadding-${verticalPadding}`);
    }

    return classes.join(' ');
  }

  private getStyle() {
    const { push } = this.props;
    const styles: BlockStyles = {};

    if (!push) {
      return styles;
    }

    // If `push` is negative, set negative top margin to "pull" it up.
    // If positive, "push" it down with top padding (because margins can collapse).
    const rems = push / 10;
    const value = `${rems}rem`;
    if (rems < 0) {
      styles.marginTop = value;
    } else {
      styles.paddingTop = value;
    }

    return styles;
  }
}
