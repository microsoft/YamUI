/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { TextColor, TextSize } from './enums';
import ScreenReaderText from '../ScreenreaderText';
import './Text.css';

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
export default class Text extends React.Component<TextProps, {}> {
  render() {
    const { children, screenreaderText } = this.props;

    const content =
      screenreaderText === undefined ? (
        children
      ) : (
        <span>
          <span aria-hidden={true}>{children}</span>
          <ScreenReaderText>{screenreaderText}</ScreenReaderText>
        </span>
      );

    return (
      <span className={this.getClasses()} style={this.getStyles()}>
        {content}
      </span>
    );
  }

  private getClasses() {
    const { bold, className, color, maxWidth, size, uppercase } = this.props;

    const classes = ['y-text'];
    if (bold) {
      classes.push('y-text__bold');
    }
    if (color) {
      classes.push(`y-text__color-${color}`);
    }
    if (uppercase) {
      classes.push('y-text__uppercase');
    }
    if (maxWidth) {
      classes.push('y-text__ellipsis');
    }
    if (size) {
      classes.push(`y-textSize-${size}`);
    }
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }

  private getStyles() {
    const { maxWidth } = this.props;
    return maxWidth ? { maxWidth } : {};
  }
}
