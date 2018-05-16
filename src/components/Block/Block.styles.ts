/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { BlockProps } from './Block';
import { ellipsisStyle } from '../../util/styles';
import { GutterSize } from '../FixedGrid/enums';
import { textColors, fontSizes, lineHeights } from '../Text/Text.styles';
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

export const gutterSize: { [size in GutterSize]: string } = {
  none: '0',
  xSmall: '0.4rem',
  small: '0.8rem',
  medium: '1.2rem',
  large: '1.6rem',
  xLarge: '2rem',
  xxLarge: '2.4rem',
};

export const getStyles = (props: BlockProps): IRawStyle => {
  const { push, textSize, topSpacing, bottomSpacing, textAlign, textColor } = props;

  return {
    textAlign,
    color: textColor ? textColors[textColor] : undefined,
    fontSize: textSize ? fontSizes[textSize] : undefined,
    lineHeight: textSize ? lineHeights[textSize] : undefined,
    marginTop: getMarginTop(topSpacing, push),
    marginBottom: bottomSpacing ? gutterSize[bottomSpacing] : undefined,
    // For positive push, "push" it down with top padding (because margins can collapse).
    paddingTop: push && push > 0 ? `${push / 10}rem` : undefined,
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
