/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { gutterSize } from '../../util/styles/gutters';
import { TextSize } from './';
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';

export interface ListStyleProps {
  type: 'ordered' | 'unordered';
  textSize?: TextSize;
}

const getMarginBottom = (textSize?: TextSize) => {
  if (textSize === TextSize.XSMALL || textSize === TextSize.SMALL || textSize === TextSize.MEDIUM_SUB) {
    return gutterSize.medium;
  }
  return gutterSize.xLarge;
};

export const getClassNames = memoizeFunction((styleProps: ListStyleProps) => {
  const { type, textSize } = styleProps;
  const isOrdered = type === 'ordered';

  return mergeStyleSets({
    root: {
      margin: 0,
      marginBottom: getMarginBottom(textSize),
      padding: isOrdered ? '0 0 0 2.8rem' : '0 0 0 3.5rem',
      listStylePosition: 'outside',
      listStyleType: isOrdered ? 'decimal' : 'disc',
      selectors: {
        '> .y-list--item': {
          padding: `0 0 ${gutterSize.xSmall} 0`,
          paddingLeft: isOrdered ? '0.7rem' : undefined,
        },
      },
    },
  });
});
