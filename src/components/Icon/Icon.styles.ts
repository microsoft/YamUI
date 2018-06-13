/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { IconSize } from './';
import { TextSize } from '../Text';

export interface IconStyleProps {
  block?: boolean;
  color?: string;
  size?: IconSize;
  textSize?: TextSize;
}

const sizeForTextSize = {
  [TextSize.XXLARGE]: '2.4rem',
  [TextSize.XLARGE]: '2.2rem',
  [TextSize.LARGE]: '1.5rem',
  [TextSize.MEDIUM]: '1.4rem',
  [TextSize.MEDIUM_SUB]: '1.4rem',
  [TextSize.SMALL]: '1.2rem',
  [TextSize.XSMALL]: '1.0rem',
};

export const getClassNames = memoizeFunction((styleProps: IconStyleProps) => {
  const { block, size, color, textSize } = styleProps;

  return mergeStyleSets({
    root: {
      display: block ? 'block' : 'inline',
      position: 'relative',
      top: textSize === TextSize.XSMALL || textSize === TextSize.SMALL ? '0.1rem' : '0.2rem',
      verticalAlign: '0',
      fill: 'currentColor',
      height: size ? `${size}px` : textSize ? sizeForTextSize[textSize] : undefined,
      width: size ? `${size}px` : textSize ? sizeForTextSize[textSize] : undefined,
      color,

      /* IE/Edge do not bubble click events up from SVG elements, so allow clicks to pass through */
      pointerEvents: 'none',
    },
  });
});
