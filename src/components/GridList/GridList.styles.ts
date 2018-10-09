/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { getGutterValue } from '../../util/styles/gutters';

/**
 * Gets the width of each item as a percentage. Prevents any decimals from rounding up,
 * which would cause items to wrap to the next line in some browsers.
 */
const getItemWidthAsPercent = (columns: number) => {
  const percent = 100 / columns;
  const safePercent = (Math.floor(percent * 10000) / 10000).toFixed(4);
  return `${safePercent}%`;
};

export const getClassNames = memoizeFunction((columns: number, gutterUnits: number) => {
  const halfGutter = getGutterValue(gutterUnits / 2);

  return mergeStyleSets({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: `-${halfGutter}`,
      padding: 0,
      selectors: {
        '> .y-gridListItem': {
          width: getItemWidthAsPercent(columns),
          padding: halfGutter,
          margin: 0,
        },
      },
    },
  });
});
