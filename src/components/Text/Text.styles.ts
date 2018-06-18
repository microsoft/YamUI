/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { TextProps, TextSize } from './Text';
import {
  ellipsisStyle,
  fontWeights,
  fontSizes,
  lineHeights,
  textColors,
  verticalAligns,
} from '../../util/styles/fonts';
import { IRawStyle } from '@uifabric/styling';

const getHeight = (size?: TextSize) => {
  return size ? lineHeights[size] : undefined;
};

export const getStyles = (props: TextProps): IRawStyle => {
  const { size, maxWidth, bold, uppercase, color } = props;

  return {
    ...(maxWidth ? ellipsisStyle : {}),
    fontWeight: bold ? fontWeights.bold : undefined,
    display: 'inline-block',
    textTransform: uppercase ? 'uppercase' : undefined,
    fontSize: size ? fontSizes[size] : undefined,
    lineHeight: size ? lineHeights[size] : undefined,
    color: color ? textColors[color] : undefined,
    maxWidth: maxWidth || undefined,
    height: maxWidth ? getHeight(size) : undefined,
    verticalAlign: maxWidth ? '-0.4rem' : undefined,
    selectors: {
      /* increased specificity to override the block style */
      '&.y-text.y-text__ellipsis': {
        verticalAlign: maxWidth && size ? verticalAligns[size] : undefined,
      },
    },
  };
};
