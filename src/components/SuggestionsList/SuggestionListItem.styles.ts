/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { getTheme } from '../../util/colors';
import { fontWeights } from '../../util/styles/fonts';
import { getGutterValue } from '../../util/styles/gutters';

export interface SuggestionsListItemStyleProps {
  isSelected: boolean;
}

const getMemoizedClassNames = memoizeFunction((styleProps, theme) => {
  const { isSelected } = styleProps;

  return mergeStyleSets({
    root: {
      cursor: 'pointer',
      padding: `${getGutterValue(1)} ${getGutterValue(3)} ${getGutterValue(2)}`,
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
