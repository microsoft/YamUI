/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { gutterSize as gutterSizes } from '../../util/styles/gutters';
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { GutterSize } from '../FixedGrid';

export interface LayoutListStyleProps {
  direction: 'horizontal' | 'vertical';
  gutterSize?: GutterSize;
  align?: 'left' | 'right';
}

export const getClassNames = memoizeFunction((styleProps: LayoutListStyleProps) => {
  const { direction, gutterSize, align } = styleProps;

  const isHorizontal = direction === 'horizontal';
  const defaultGutterSize = isHorizontal ? GutterSize.XSMALL : GutterSize.NONE;
  const gutterSizeRem = gutterSizes[gutterSize || defaultGutterSize];

  const horizontalChild = {
    padding: 0,
    margin: 0,
    marginRight: gutterSizeRem,
    selectors: { ':last-child': { marginRight: 0 } },
  };

  const verticalChild = {
    padding: 0,
    margin: 0,
    display: 'block',
    marginBottom: gutterSizeRem,
    selectors: { ':last-child': { marginBottom: 0 } },
  };

  return mergeStyleSets({
    root: {
      padding: 0,
      margin: 0,
      listStyle: 'none',
      display: isHorizontal ? 'flex' : 'block',
      flexFlow: isHorizontal ? 'row wrap' : undefined,
      justifyContent: align === 'right' ? 'flex-end' : undefined,
    },
    child: isHorizontal ? horizontalChild : verticalChild,
  });
});
