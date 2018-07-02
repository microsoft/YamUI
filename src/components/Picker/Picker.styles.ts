/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
export interface PickerClassNameProps {
  theme: ITheme;
}

export const getClassNames = memoizeFunction((classNameProps: PickerClassNameProps) => {
  const { theme } = classNameProps;
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
      display: 'inline-block',
    },
    suggestionItem: {
      width: '100%',
    },
  });
});
