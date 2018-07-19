/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
import { getGutterValue } from '../../util/styles/gutters';
import { addAlpha } from '../../util/colors';

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
  const boxShadowOpacity = theme.isInverted ? 40 : 20;

  return mergeStyleSets({
    root: {
      boxShadow: `0 0 12px ${addAlpha(theme.palette.black, boxShadowOpacity)}`,
      border: 'none',
      borderRadius: '1px',
      borderWidth: 0,
      width: '280px',
      backgroundColor: theme.palette.white,
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
