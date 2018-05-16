/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { palette, semanticColors } from '../../util/colors';
import { TextProps, TextSize, TextColor } from './Text';
import { ellipsisStyle, fontWeightBold } from '../../util/styles';
import { IRawStyle } from '@uifabric/styling';
import { CSSProperties } from 'react';

export type Sizes = { [size in TextSize]: string };

export const textColors: { [color in TextColor]: string | undefined } = {
  primary: semanticColors.bodyText,
  secondary: palette.neutralPrimaryAlt,
  metadata: palette.neutralSecondary,
  white: palette.white,
  error: semanticColors.errorText,
  disabled: semanticColors.disabledBodyText,
};

export const lineHeights: Sizes = {
  xSmall: '1.6rem',
  small: '1.6rem',
  mediumSub: '2.0rem',
  medium: '2.0rem',
  large: '2.4rem',
  xLarge: '2.8rem',
  xxLarge: '2.8rem',
};

export const fontSizes: Sizes = {
  xSmall: '1.0rem',
  small: '1.2rem',
  mediumSub: '1.4rem',
  medium: '1.5rem',
  large: '1.8rem',
  xLarge: '2.2rem',
  xxLarge: '2.4rem',
};

const getHeight = (size?: TextSize) => {
  const heights: Sizes = {
    xSmall: '1.6rem',
    small: '1.6rem',
    mediumSub: '2rem',
    medium: '2rem',
    large: '2.4rem',
    xLarge: '2.8rem',
    xxLarge: '2.8rem',
  };
  return size ? heights[size] : undefined;
};

const getVerticalAlign = (size?: TextSize) => {
  const verticalAligns: Sizes = {
    xSmall: '-0.4rem',
    small: '-0.3rem',
    mediumSub: '-0.5rem',
    medium: '-0.4rem',
    large: '-0.5rem',
    xLarge: '-0.5rem',
    xxLarge: '-0.4rem',
  };
  return size ? verticalAligns[size] : undefined;
};

export const getStyles = (props: TextProps): IRawStyle => {
  const { size, maxWidth, bold, uppercase, color } = props;

  return {
    ...(maxWidth ? ellipsisStyle : {}),
    ...(bold ? fontWeightBold : {}),
    display: 'inline-block',
    textTransform: uppercase ? 'uppercase' : undefined,
    fontSize: size ? fontSizes[size] : undefined,
    lineHeight: size ? lineHeights[size] : undefined,
    color: color ? textColors[color] : undefined,
    maxWidth: maxWidth || undefined,
    verticalAlign: maxWidth ? '-0.4rem' : undefined,
  };
};

/**
 * Inline-block elements shift vertical-align from baseline to bottom when we set
 * overflow:hidden for ellipsis. These rules ensure ellipsis Text, at each size and nested
 * under each Block's textSize, maintains correct vertical alignment. Increased specificity
 * to handle the nested block case :(
 */
export const getInlineStyles = (props: TextProps): CSSProperties => {
  const { size, maxWidth } = props;

  return {
    verticalAlign: maxWidth ? getVerticalAlign(size) : undefined,
    height: maxWidth ? getHeight(size) : undefined,
  };
};
