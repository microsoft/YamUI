/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { TextProps, TextSize } from './Text';
import { ellipsisStyle, fontWeightBold, fontSizes, lineHeights, textColors, Sizes } from '../../util/styles/fonts';
import { IRawStyle } from '@uifabric/styling';
import { CSSProperties } from 'react';

export const getStyles = (props: TextProps): IRawStyle => {
  const { size, maxWidth, bold, uppercase, color } = props;

  return {
    ...(maxWidth ? ellipsisStyle : {}),
    fontWeight: bold ? fontWeightBold : undefined,
    display: 'inline-block',
    textTransform: uppercase ? 'uppercase' : undefined,
    fontSize: size ? fontSizes[size] : undefined,
    lineHeight: size ? lineHeights[size] : undefined,
    color: color ? textColors[color] : undefined,
    maxWidth: maxWidth || undefined,
    verticalAlign: maxWidth ? '-0.4rem' : undefined,
  };
};

const heights: Sizes = {
  xSmall: '1.6rem',
  small: '1.6rem',
  mediumSub: '2rem',
  medium: '2rem',
  large: '2.4rem',
  xLarge: '2.8rem',
  xxLarge: '2.8rem',
};

const getHeight = (size?: TextSize) => {
  return size ? heights[size] : undefined;
};

const verticalAligns: Sizes = {
  xSmall: '-0.4rem',
  small: '-0.3rem',
  mediumSub: '-0.5rem',
  medium: '-0.4rem',
  large: '-0.5rem',
  xLarge: '-0.5rem',
  xxLarge: '-0.4rem',
};

const getVerticalAlign = (size?: TextSize) => {
  return size ? verticalAligns[size] : undefined;
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
