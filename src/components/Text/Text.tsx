/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { TextSizeContext } from '../Block';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { TextColor, TextSize } from './types';
import ScreenReaderText from '../ScreenreaderText';
import { getClassNames } from './Text.styles';

export { TextColor, TextSize };

export interface TextProps extends NestableBaseComponentProps {
  /**
   * Text color
   */
  color?: TextColor;

  /**
   * A preset size which determines a font-size + line-height combination
   * supporting our vertical rhythm.
   */
  size?: TextSize;

  /**
   * Sets a max-width on the Text content, hiding the overflow with an ellipsis character.
   * You should generally use a px value, or 100%.
   */
  maxWidth?: string;

  /**
   * Sets font-weight: bold.
   */
  bold?: boolean;

  /**
   * Sets text to uppercase.
   */
  uppercase?: boolean;

  /**
   * If provided, will hide child content from screenreaders using aria-hidden while making
   * the given screenreaderText available to screenreaders.
   */
  screenreaderText?: string;
}

/**
 * A `Text` component simply renders a `span`. It offers size and color props so UI features don't
 * need to own this CSS. This is both a convenience for engineers and a way to enforce consistency
 * of supported text colors and `font-size`/`line-height` combinations.
 */
export default class Text extends React.Component<TextProps> {
  public render() {
    return (
      <TextSizeContext.Consumer>
        {textSizeContext => {
          const { children, screenreaderText, size, maxWidth, bold, uppercase, color, className } = this.props;
          const contextTextSize = textSizeContext.textSize;
          const classNames = getClassNames({
            maxWidth,
            bold,
            uppercase,
            color,
            size,
            contextTextSize,
          });
          return (
            <TextSizeContext.Provider value={{ textSize: size || contextTextSize }}>
              <span className={join(['y-text', className, classNames.root])}>
                {screenreaderText ? <span aria-hidden={true}>{children}</span> : children}
                {screenreaderText && <ScreenReaderText>{screenreaderText}</ScreenReaderText>}
              </span>
            </TextSizeContext.Provider>
          );
        }}
      </TextSizeContext.Consumer>
    );
  }
}
