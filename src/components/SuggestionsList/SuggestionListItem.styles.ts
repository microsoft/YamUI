/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { getTheme } from '../../util/colors';
import { fontWeights } from '../../util/styles/fonts';

export interface SuggestionsListItemStyleProps {
  isSelected: boolean;
}

const getMemoizedClassNames = memoizeFunction((styleProps, theme) => {
  const { isSelected } = styleProps;

  return mergeStyleSets({
    root: {
      cursor: 'pointer',
      padding: '0.4rem 1.2rem 0.8rem 1.2rem',
      backgroundColor: isSelected ? theme.palette.neutralLight : undefined,
      selectors: {
        ':hover': {
          backgroundColor: theme.palette.neutralLighter,
        },
      },
    },
    highlight: {
      fontWeight: fontWeights.bold,
    },
  });
});

export const getClassNames = (styleProps: SuggestionsListItemStyleProps) => {
  const theme = getTheme();
  return getMemoizedClassNames(styleProps, theme);
};
