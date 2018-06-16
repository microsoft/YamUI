/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { getTheme } from '../../util/colors';

const getMemoizedClassNames = memoizeFunction((theme: ITheme) => {
  return mergeStyleSets({
    selectedItem: {
      backgroundColor: theme.semanticColors.menuItemBackgroundHovered,
      borderRadius: '2px',
      border: `solid 1px ${theme.semanticColors.bodyDivider}`,
      margin: '2px',
      padding: '2px 4px',
      height: '26px',
      color: theme.semanticColors.bodyText,
      cursor: 'default',
    },
    selectedItemCloseButton: {
      cursor: 'pointer',
      height: '100%',
    },
    suggestionItem: {
      width: '100%',
    },
  });
});

export const getClassNames = () => {
  return getMemoizedClassNames(getTheme());
};
