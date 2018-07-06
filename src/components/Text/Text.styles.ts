/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { TextSize, TextColor } from './Text.types';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { ellipsisStyle, fontWeights, textColors, verticalAligns } from '../../util/styles/fonts';

export interface TextClassNameProps {
  color?: TextColor;
  size?: TextSize;
  maxWidth?: string;
  bold?: boolean;
  uppercase?: boolean;
  theme: ITheme;
}

const iconSizeForSize = {
  [TextSize.XXLARGE]: '2.4rem',
  [TextSize.XLARGE]: '2.2rem',
  [TextSize.LARGE]: '1.5rem',
  [TextSize.MEDIUM]: '1.4rem',
  [TextSize.MEDIUM_SUB]: '1.4rem',
  [TextSize.SMALL]: '1.2rem',
  [TextSize.XSMALL]: '1.0rem',
};

export const getClassNames = memoizeFunction((classNameProps: TextClassNameProps) => {
  const { size, maxWidth, bold, uppercase, color, theme } = classNameProps;
  const font = size ? theme.fonts[size === TextSize.MEDIUM_SUB ? 'smallPlus' : size] : undefined;

  return mergeStyleSets({
    root: {
      ...(maxWidth ? ellipsisStyle : {}),
      fontWeight: bold ? fontWeights.bold : undefined,
      display: 'inline-block',
      textTransform: uppercase ? 'uppercase' : undefined,
      fontSize: font ? font.fontSize : undefined,
      lineHeight: font ? font.lineHeight : undefined,
      color: color ? textColors(theme)[color] : undefined,
      maxWidth: maxWidth || undefined,
      height: maxWidth && font ? font.lineHeight : undefined,
      verticalAlign: maxWidth ? '-0.4rem' : undefined,
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
