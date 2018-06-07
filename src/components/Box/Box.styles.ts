/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { semanticColors } from '../../util/colors';
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';

export interface BoxStyleProps {
  hasOnClick: boolean;
}

export const getClassNames = memoizeFunction((styleProps: BoxStyleProps) => {
  const { hasOnClick } = styleProps;

  return mergeStyleSets({
    root: {
      borderRadius: '1px',
      border: `1px solid ${semanticColors.bodyDivider}`,
      cursor: hasOnClick ? 'pointer' : undefined,
    },
    inner: {
      margin: '-1px',
      position: 'relative',
    },
  });
});
