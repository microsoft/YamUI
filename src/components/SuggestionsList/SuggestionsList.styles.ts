/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { getTheme } from '../../util/colors';

export interface SuggestionsListStyleProps {
  isLoading?: boolean;
  hasResults: boolean;
}

const getMemoizedClassNames = memoizeFunction((styleProps, theme) => {
  const { isLoading, hasResults } = styleProps;

  return mergeStyleSets({
    root: {
      width: '280px',
      boxShadow: '0 0 12px rgba(0, 0, 0, 0.2) !important',
      border: 'none',
      borderRadius: '1px',
      borderWidth: '0 !important',

      selectors: {
        '> *:first-child': {
          paddingTop: hasResults ? '4px' : undefined,
        },
        '> *:last-child': {
          paddingBottom: isLoading || !hasResults ? undefined : '4px',
        },
      },
    },
    spinnerWrapper: {
      padding: '1.4rem 0 1.4rem',
    },
    resultList:
      isLoading || !hasResults
        ? {
            borderBottom: `0.1rem solid ${theme.palette.neutralLighter}`,
            marginBottom: '-1px',
          }
        : {},
  });
});

export const getClassNames = (styleProps: SuggestionsListStyleProps) => {
  const theme = getTheme();
  return getMemoizedClassNames(styleProps, theme);
};
