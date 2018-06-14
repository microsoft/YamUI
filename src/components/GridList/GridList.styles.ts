/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { getGutterValue } from '../../util/styles/gutters';

// For IE11 support, use empty columns to fake the "grid-gap" gutter.
const getTemplateColumns = (columns: number) => {
  const cols: string[] = [];
  for (let i = 0; i < columns; i = i + 1) {
    cols.push('1fr');
  }
  return cols.join(' ');
};

export const getClassNames = memoizeFunction((columns: number, gutterUnits: number) => {
  return mergeStyleSets({
    root: {
      display: 'grid',
      gridTemplateColumns: getTemplateColumns(columns),
      gridGap: getGutterValue(gutterUnits),
    },
  });
});
