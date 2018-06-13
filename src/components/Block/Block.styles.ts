/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { BlockProps } from './Block';
import { TextSize } from '../Text';
import { GutterSize } from '../FixedGrid/types';
import { getTheme } from '../../util/colors';
import { textColors, ellipsisStyle } from '../../util/styles/fonts';
import { gutterSize } from '../../util/styles/gutters';
import { IRawStyle } from '@uifabric/styling';

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

export const getStyles = (props: BlockProps & { withinClickable: boolean }): IRawStyle => {
  const { push, textSize, topSpacing, bottomSpacing, textAlign, textColor, withinClickable } = props;
  const theme = getTheme();
  const font = textSize ? theme.fonts[textSize === TextSize.MEDIUM_SUB ? 'smallPlus' : textSize] : undefined;

  return {
    textAlign,
    width: withinClickable ? '100%' : undefined,
    color: textColor ? textColors[textColor] : undefined,
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
    },
  };
};

export const getInnerStyles = (props: BlockProps): IRawStyle => {
  const { padding, horizontalPadding, verticalPadding, ellipsis } = props;

  return {
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
    wordWrap: 'break-word' as 'break-word',
    overflowWrap: 'break-word' as 'break-word',
  };
};
