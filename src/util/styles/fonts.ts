/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { palette, semanticColors } from '../../util/colors';
import { TextSize, TextColor } from '../../components/Text/enums';
import { IRawStyle, IFontWeight } from '@uifabric/styling';

export type Sizes = { [size in TextSize]: string };

export const fontSizes: Sizes = {
  xSmall: '1.0rem',
  small: '1.2rem',
  mediumSub: '1.4rem',
  medium: '1.5rem',
  large: '1.8rem',
  xLarge: '2.2rem',
  xxLarge: '2.4rem',
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

export const verticalAligns: Sizes = {
  xSmall: '-0.4rem',
  small: '-0.3rem',
  mediumSub: '-0.5rem',
  medium: '-0.4rem',
  large: '-0.5rem',
  xLarge: '-0.5rem',
  xxLarge: '-0.4rem',
};

export const textColors: { [color in TextColor]: string | undefined } = {
  primary: semanticColors.bodyText,
  secondary: palette.neutralPrimaryAlt,
  metadata: palette.neutralSecondary,
  white: palette.white,
  error: palette.redDark,
  disabled: semanticColors.disabledBodyText,
};

export const fontWeights: { [weight in 'normal' | 'bold']: IFontWeight } = {
  normal: '400',
  bold: '600',
};

export const ellipsisStyle: IRawStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};
