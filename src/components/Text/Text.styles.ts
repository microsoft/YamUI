/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { TextProps, TextSize, PrivateTextProps } from './Text';
import { ellipsisStyle, fontWeightBold, fontSizes, lineHeights, textColors, Sizes } from '../../util/styles/fonts';
import { IRawStyle } from '@uifabric/styling';

export const getStyles = (props: TextProps & PrivateTextProps): IRawStyle => {
  const { size, maxWidth, bold, uppercase, color, blockTextSize } = props;

  return {
    ...(maxWidth ? ellipsisStyle : {}),
    fontWeight: bold ? fontWeightBold : undefined,
    display: 'inline-block',
    textTransform: uppercase ? 'uppercase' : undefined,
    fontSize: size ? fontSizes[size] : undefined,
    lineHeight: size ? lineHeights[size] : undefined,
    color: color ? textColors[color] : undefined,
    maxWidth: maxWidth || undefined,
    height: maxWidth ? getHeight(size) : undefined,
    verticalAlign: maxWidth ? getVerticalAlign(size || blockTextSize) : undefined,
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
  return size ? verticalAligns[size] : '-0.4rem';
};
