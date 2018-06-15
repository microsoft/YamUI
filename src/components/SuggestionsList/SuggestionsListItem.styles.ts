/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { getTheme } from '../../util/colors';

export interface SuggestionsListItemStyleProps {
  isSelected: boolean;
}

const getMemoizedClassNames = memoizeFunction((styleProps, theme) => {
  const { isSelected } = styleProps;

  return mergeStyleSets({
    root: {
      cursor: 'pointer',
      backgroundColor: isSelected ? theme.palette.neutralLight : undefined,
      selectors: {
        ':hover': {
          backgroundColor: theme.palette.neutralLighter,
        },
      },
    },
  });
});

export const getClassNames = (styleProps: SuggestionsListItemStyleProps) => {
  const theme = getTheme();
  return getMemoizedClassNames(styleProps, theme);
};
