/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { TextSize, TextColor } from './Block.types';
import { GutterSize } from '../FixedGrid/types';
import { textColors, ellipsisStyle, verticalAligns } from '../../util/styles/fonts';
import { gutterSize } from '../../util/styles/gutters';
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

const getMarginTop = (topSpacing?: GutterSize, push?: number) => {
  if (push) {
    // For negative push, use top margin to "pull" it up
    return push < 0 ? `${push / 10}rem` : undefined;
  }
  if (topSpacing) {
    return gutterSize[topSpacing];
  }
};

const iconSizeForTextSize = {
  [TextSize.XXLARGE]: '2.4rem',
  [TextSize.XLARGE]: '2.2rem',
  [TextSize.LARGE]: '1.5rem',
  [TextSize.MEDIUM]: '1.4rem',
  [TextSize.MEDIUM_SUB]: '1.4rem',
  [TextSize.SMALL]: '1.2rem',
  [TextSize.XSMALL]: '1.0rem',
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
  textSize?: TextSize;
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
    theme,
    ellipsis,
    padding,
    horizontalPadding,
    verticalPadding,
  } = props;
  const font = textSize ? theme.fonts[textSize === TextSize.MEDIUM_SUB ? 'smallPlus' : textSize] : undefined;

  return mergeStyleSets({
    root: {
      textAlign,
      color: textColor ? textColors(theme)[textColor] : undefined,
      fontSize: font ? font.fontSize : undefined,
      lineHeight: font ? font.lineHeight : undefined,
      marginTop: getMarginTop(topSpacing, push),
      marginBottom: bottomSpacing ? gutterSize[bottomSpacing] : undefined,
      // For positive push, "push" it down with top padding (because margins can collapse).
      paddingTop: push && push > 0 ? `${push / 10}rem` : undefined,
      selectors: {
        '&.y-block .y-icon': {
          top: textSize === TextSize.XSMALL || textSize === TextSize.SMALL ? '0.1rem' : undefined,
        },
        '.y-icon': {
          height: textSize ? iconSizeForTextSize[textSize] : undefined,
          width: textSize ? iconSizeForTextSize[textSize] : undefined,
        },
        '.y-text__ellipsis': {
          verticalAlign: textSize ? verticalAligns[textSize] : undefined,
        },
      },
    },
    inner: {
      ...(ellipsis ? ellipsisStyle : {}),
      padding: padding ? gutterSize[padding] : undefined,
      ...(horizontalPadding
        ? {
            paddingLeft: gutterSize[horizontalPadding],
            paddingRight: gutterSize[horizontalPadding],
          }
        : {}),
      ...(verticalPadding
        ? {
            paddingTop: gutterSize[verticalPadding],
            paddingBottom: gutterSize[verticalPadding],
          }
        : {}),
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
    },
  });
});
