/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { TextSize, TextColor } from '../../components/Text/Text.types';
import { IRawStyle, IFontWeight, ITheme } from '@uifabric/styling';

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

export const textColors = (theme: ITheme): { [color in TextColor]: string } => ({
  primary: theme.semanticColors.bodyText,
  secondary: theme.palette.neutralPrimaryAlt,
  metadata: theme.semanticColors.bodySubtext,
  white: theme.palette.white,
  error: theme.palette.redDark,
  disabled: theme.semanticColors.disabledBodyText,
});

export const fontWeights: { [weight in 'normal' | 'bold']: IFontWeight } = {
  normal: '400',
  bold: '600',
};

export const ellipsisStyle: IRawStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};
