/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { TextProps, TextSize } from './Text';
import { memoizeFunction } from '@uifabric/utilities';
import { mergeStyleSets } from '@uifabric/styling';
import { ellipsisStyle, fontWeights, textColors, verticalAligns } from '../../util/styles/fonts';
import { getTheme } from '../../util/colors';

const getVerticalAlignForMaxWidth = (size?: TextSize) => {
  return size ? verticalAligns[size] : '-0.4rem';
};

const getMemoizedClassNames = memoizeFunction((styleProps: TextProps & { contextTextSize?: TextSize }, theme) => {
  const { size, maxWidth, bold, uppercase, color, contextTextSize } = styleProps;
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
      verticalAlign: maxWidth ? getVerticalAlignForMaxWidth(size || contextTextSize) : undefined,
    },
  });
});

export const getClassNames = (styleProps: TextProps & { contextTextSize?: TextSize }) => {
  const theme = getTheme();
  return getMemoizedClassNames(styleProps, theme);
};
