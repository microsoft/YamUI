/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';
import { join } from '../../util/classNames';
import ScreenReaderText from '../ScreenreaderText';
import { getClassNames } from './Text.styles';
import { TextProps } from './Text.types';

/**
 * A `Text` component simply renders a `span`. It offers size and color props so UI features don't
 * need to own this CSS. This is both a convenience for engineers and a way to enforce consistency
 * of supported text colors and `font-size`/`line-height` combinations.
 */
export class Text extends React.Component<TextProps & CustomizableComponentProps> {
  public render() {
    const { children, screenreaderText } = this.props;
    const classes = this.getClasses();

    if (screenreaderText !== undefined) {
      return (
        <span className={classes}>
          <span aria-hidden={true}>{children}</span>
          <ScreenReaderText>{screenreaderText}</ScreenReaderText>
        </span>
      );
    }
    return <span className={classes}>{children}</span>;
  }

  private getClasses() {
    const { className, size, maxWidth, bold, uppercase, color, backgroundColor, theme = defaultTheme } = this.props;
    return join([
      'y-text',
      size ? `y-textSize-${size}` : '',
      maxWidth ? 'y-text__ellipsis' : '',
      className,
      getClassNames({ size, maxWidth, bold, uppercase, color, backgroundColor, theme }).root,
    ]);
  }
}

@customizable('Text', ['theme'])
export default class CustomizableText extends Text {}
