/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { GutterSize } from './types';
import { gutterSize as gutterSizes } from '../../util/styles/gutters';

export interface BoxStyleProps {
  bottomSpacing?: GutterSize;
  gutterSize: GutterSize;
}

export const getClassNames = memoizeFunction((styleProps: BoxStyleProps) => {
  const { bottomSpacing, gutterSize } = styleProps;

  return mergeStyleSets({
    root: {
      display: 'flex',
      marginBottom: bottomSpacing ? gutterSizes[bottomSpacing] : undefined,
    },
    column: {
      marginLeft: gutterSizes[gutterSize],
      selectors: {
        ':first-child': {
          marginLeft: 0,
        },
      },
    },
  });
});
