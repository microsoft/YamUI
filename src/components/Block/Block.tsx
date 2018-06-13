/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { ClickableContext } from '../Clickable';
import { GutterSize } from '../FixedGrid/types';
import { TextColor, TextSize } from '../Text/types';
import { getStyles, getInnerStyles } from './Block.styles';
import { mergeStyles } from '@uifabric/styling';

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

export interface TextSizeContext {
  textSize?: TextSize;
}

const defaultContext: TextSizeContext = {};

export const TextSizeContext = React.createContext(defaultContext);

/**
 * A `Block` is a layout component to build consistent padding and vertical spacing between
 * components. It allows you to `push` a chunk of UI up or down by individual pixels to keep text in
 * the `4px` vertical rhythm. It's also the primary place you should set `textSize` in your UIs,
 * providing enumerated options for the supported `font-size`/`line-height` combinations.
 */
export default class Block extends React.Component<BlockProps> {
  public render() {
    const { children, textSize } = this.props;

    return (
      <TextSizeContext.Consumer>
        {textSizeContext => (
          <ClickableContext.Consumer>
            {clickableContext => (
              <TextSizeContext.Provider value={{ textSize: textSize || textSizeContext.textSize }}>
                <div className={this.getClasses(clickableContext.withinClickable)}>
                  <div className={`y-block--inner ${mergeStyles(getInnerStyles(this.props))}`}>{children}</div>
                </div>
              </TextSizeContext.Provider>
            )}
          </ClickableContext.Consumer>
        )}
      </TextSizeContext.Consumer>
    );
  }

  private getClasses(withinClickable: boolean) {
    const { className, textSize } = this.props;
    return join([
      'y-block',
      textSize ? `y-textSize-${textSize}` : '',
      className,
      mergeStyles(getStyles({ ...this.props, withinClickable })),
    ]);
  }
}
