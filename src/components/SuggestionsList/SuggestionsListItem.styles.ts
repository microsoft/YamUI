/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

export interface SuggestionsListItemStyleProps {
  isSelected: boolean;
  theme: ITheme;
}

export const getClassNames = memoizeFunction(classNameProps => {
  const { isSelected, theme } = classNameProps;

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
