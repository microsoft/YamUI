/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
import { GutterSize } from './FixedGrid.types';
import { gutterSizes } from '../../util/styles/gutters';

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
      selectors: {
        '> .y-fixedGridColumn': {
          marginLeft: gutterSizes[gutterSize],
          selectors: {
            ':first-child': {
              marginLeft: 0,
            },
          },
        },
      },
    },
  });
});
