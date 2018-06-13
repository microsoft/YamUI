/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { IconSize } from './';

export interface IconStyleProps {
  block?: boolean;
  color?: string;
  size?: IconSize;
}

export const getClassNames = memoizeFunction((styleProps: IconStyleProps) => {
  const { block, size, color } = styleProps;

  return mergeStyleSets({
    root: {
      display: block ? 'block' : 'inline',
      position: 'relative',
      verticalAlign: '0',
      fill: 'currentColor',
      top: '0.2rem',
      color,
      /* IE/Edge do not bubble click events up from SVG elements, so allow clicks to pass through */
      pointerEvents: 'none',
      selectors: {
        /* need extra specificity here */
        '&.y-icon': {
          height: size ? `${size}px` : undefined,
          width: size ? `${size}px` : undefined,
        },
      },
    },
  });
});
