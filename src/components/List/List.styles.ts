/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { getGutterValue } from '../../util/styles/gutters';
import { TextSize } from './';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

export interface ListStyleProps {
  type: 'ordered' | 'unordered';
  textSize?: TextSize;
}

const getMarginBottom = (textSize?: TextSize) => {
  if (textSize === TextSize.XSMALL || textSize === TextSize.SMALL || textSize === TextSize.MEDIUM_SUB) {
    return getGutterValue(3, true);
  }
  return getGutterValue(5, true);
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
          padding: `0 0 ${getGutterValue(1, true)} 0`,
          paddingLeft: isOrdered ? '0.7rem' : undefined,
        },
      },
    },
  });
});
