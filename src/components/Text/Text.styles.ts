/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { TextProps } from './Text';
import { TextSize } from './types';
import { memoizeFunction } from '@uifabric/utilities';
import { mergeStyleSets } from '@uifabric/styling';
import { ellipsisStyle, fontWeights, textColors, verticalAligns } from '../../util/styles/fonts';
import { getTheme } from '../../util/colors';

const getVerticalAlignForMaxWidth = (size?: TextSize) => {
  return size ? verticalAligns[size] : '-0.4rem';
};

const iconSizeForSize = {
  [TextSize.XXLARGE]: '2.4rem',
  [TextSize.XLARGE]: '2.2rem',
  [TextSize.LARGE]: '1.5rem',
  [TextSize.MEDIUM]: '1.4rem',
  [TextSize.MEDIUM_SUB]: '1.4rem',
  [TextSize.SMALL]: '1.2rem',
  [TextSize.XSMALL]: '1.0rem',
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
      selectors: {
        '&.y-text .y-icon': {
          top: size === TextSize.XSMALL || size === TextSize.SMALL ? '0.1rem' : undefined,
        },
        '.y-icon': {
          height: size ? iconSizeForSize[size] : undefined,
          width: size ? iconSizeForSize[size] : undefined,
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
