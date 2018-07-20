/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { TextSize, TextColor } from './Text.types';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { ellipsisStyle, fontWeights, textColors, verticalAligns } from '../../util/styles/fonts';
import { PaletteColor } from '../../util/colors';

export interface TextClassNameProps {
  color?: TextColor;
  size?: TextSize;
  maxWidth?: string;
  bold?: boolean;
  uppercase?: boolean;
  backgroundColor?: PaletteColor;
  theme: ITheme;
}
export const getClassNames = memoizeFunction((classNameProps: TextClassNameProps) => {
  const { size, maxWidth, bold, uppercase, color, backgroundColor, theme } = classNameProps;
  const font = size ? theme.fonts[size === TextSize.MEDIUM_SUB ? 'smallPlus' : size] : undefined;

  return mergeStyleSets({
    root: {
      ...(maxWidth ? ellipsisStyle : {}),
      backgroundColor: backgroundColor ? theme.palette[backgroundColor] : undefined,
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
