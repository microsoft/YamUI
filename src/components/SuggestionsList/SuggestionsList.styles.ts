/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { getGutterValue } from '../../util/styles/gutters';
import { borderStylePopOver } from '../../util/styles/borders';

export interface SuggestionsClassNameProps {
  isLoading?: boolean;
  hasResults: boolean;
  theme: ITheme;
}

export interface SuggestionsListClassNames {
  root: string;
  spinnerWrapper: string;
  noResultsWrapper: string;
}

export const getClassNames = memoizeFunction((classNameProps: SuggestionsClassNameProps) => {
  const { isLoading, hasResults, theme } = classNameProps;

  return mergeStyleSets({
    root: {
      ...borderStylePopOver,
      width: '280px',
      paddingTop: hasResults ? getGutterValue(1) : undefined,
      paddingBottom: hasResults && !isLoading ? getGutterValue(1) : undefined,
    },
    spinnerWrapper: {
      paddingBottom: '14px',
      paddingTop: hasResults ? '13px' : '14px',
      borderTop: hasResults ? `1px solid ${theme.palette.neutralLighter}` : undefined,
    },
    noResultsWrapper: {
      paddingTop: '15px',
      paddingBottom: '17px',
    },
  });
});
