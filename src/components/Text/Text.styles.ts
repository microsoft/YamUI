/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { TextProps } from './Text';
import { TextSize } from './types';
import { memoizeFunction } from '@uifabric/utilities';
import { mergeStyleSets } from '@uifabric/styling';
import { ellipsisStyle, fontWeights, textColors, verticalAligns } from '../../util/styles/fonts';
import { getTheme } from '../../util/colors';

const getMemoizedClassNames = memoizeFunction((styleProps: TextProps, theme) => {
  const { size, maxWidth, bold, uppercase, color } = styleProps;
  const font = size ? theme.fonts[size === TextSize.MEDIUM_SUB ? 'smallPlus' : size] : undefined;

  return mergeStyleSets({
    root: {
      ...(maxWidth ? ellipsisStyle : {}),
      fontWeight: bold ? fontWeights.bold : undefined,
      display: 'inline-block',
      textTransform: uppercase ? 'uppercase' : undefined,
      fontSize: font ? font.fontSize : undefined,
      lineHeight: font ? font.lineHeight : undefined,
      color: color ? textColors[color] : undefined,
      maxWidth: maxWidth || undefined,
      height: maxWidth && font ? font.lineHeight : undefined,
      verticalAlign: maxWidth ? '-0.4rem' : undefined,
      selectors: {
        '&.y-text .y-icon': {
          top: size === TextSize.XSMALL || size === TextSize.SMALL ? '0.1rem' : undefined,
        },
        '.y-icon': {
          height: font ? font.fontSize : undefined,
          width: font ? font.fontSize : undefined,
        },
        /* increased specificity to override the block style */
        '&.y-text.y-text__ellipsis': {
          verticalAlign: maxWidth && size ? verticalAligns[size] : undefined,
        },
      },
    },
  });
});

export const getClassNames = (styleProps: TextProps & { contextTextSize?: TextSize }) => {
  const theme = getTheme();
  return getMemoizedClassNames(styleProps, theme);
};
