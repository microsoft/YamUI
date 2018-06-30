/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { palette, semanticColors } from '../../util/colors';
import { TextSize, TextColor } from '../../components/Text/Text.types';
import { IRawStyle, IFontWeight } from '@uifabric/styling';

export type Sizes = { [size in TextSize]: string };

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
