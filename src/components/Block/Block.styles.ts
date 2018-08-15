/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { TextSize, TextColor } from './Block.types';
import { GutterSize } from '../FixedGrid';
import { textColors, ellipsisStyle, verticalAligns } from '../../util/styles/fonts';
import { gutterSizes } from '../../util/styles/gutters';
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
import { PaletteColor } from '../../util/colors';

const getMarginTop = (topSpacing?: GutterSize, push?: number) => {
  if (push) {
    // For negative push, use top margin to "pull" it up
    return push < 0 ? `${push / 10}rem` : undefined;
  }
  if (topSpacing) {
    return gutterSizes[topSpacing];
  }
};
export interface BlockClassNameProps {
  theme: ITheme;
  topSpacing?: GutterSize;
  bottomSpacing?: GutterSize;
  padding?: GutterSize;
  horizontalPadding?: GutterSize;
  verticalPadding?: GutterSize;
  push?: number;
  textAlign?: 'left' | 'right' | 'center';
  textColor?: TextColor;
  backgroundColor?: PaletteColor;
  textSize?: TextSize;
  divider?: boolean;
  ellipsis?: boolean;
}

export const getClassNames = memoizeFunction((props: BlockClassNameProps) => {
  const {
    push,
    textSize,
    topSpacing,
    bottomSpacing,
    textAlign,
    textColor,
    backgroundColor,
    theme,
    divider,
    ellipsis,
    padding,
    horizontalPadding,
    verticalPadding,
  } = props;
  const font = textSize ? theme.fonts[textSize === TextSize.MEDIUM_SUB ? 'smallPlus' : textSize] : undefined;

  return mergeStyleSets({
    root: {
      textAlign,
      backgroundColor: backgroundColor ? theme.palette[backgroundColor] : undefined,
      color: textColor ? textColors(theme)[textColor] : undefined,
      fontSize: font ? font.fontSize : undefined,
      lineHeight: font ? font.lineHeight : undefined,
      marginTop: getMarginTop(topSpacing, push),
      marginBottom: bottomSpacing ? gutterSizes[bottomSpacing] : undefined,
      borderBottom: divider ? `1px solid ${theme.semanticColors.bodyDivider}` : undefined,
      // For positive push, "push" it down with top padding (because margins can collapse).
      paddingTop: push && push > 0 ? `${push / 10}rem` : undefined,
      selectors: {
        '&.y-block .y-icon': {
          top: textSize === TextSize.XSMALL || textSize === TextSize.SMALL ? '0.1rem' : undefined,
        },
        '.y-icon': {
          height: font ? font.fontSize : undefined,
          width: font ? font.fontSize : undefined,
        },
        '.y-text__ellipsis': {
          verticalAlign: textSize ? verticalAligns[textSize] : undefined,
        },
      },
    },
    inner: {
      ...(ellipsis ? ellipsisStyle : {}),
      padding: padding ? gutterSizes[padding] : undefined,
      ...(horizontalPadding
        ? {
            paddingLeft: gutterSizes[horizontalPadding],
            paddingRight: gutterSizes[horizontalPadding],
          }
        : {}),
      ...(verticalPadding
        ? {
            paddingTop: gutterSizes[verticalPadding],
            paddingBottom: gutterSizes[verticalPadding],
          }
        : {}),
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
    },
  });
});
