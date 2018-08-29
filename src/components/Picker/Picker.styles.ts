/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
export interface PickerClassNameProps {
  theme: ITheme;
}

export const getClassNames = memoizeFunction((classNameProps: PickerClassNameProps) => {
  const { theme } = classNameProps;
  return mergeStyleSets({
    root: {
      selectors: {
        '.ms-BasePicker-text[class*="pickerText"][class*="inputFocused"]': {
          borderColor: theme.palette.themePrimary,
        },
        '.ms-BasePicker-text[class*="pickerText"]': {
          borderColor: theme.palette.neutralTertiary,
        },
      },
    },
    selectedItem: {
      backgroundColor: theme.semanticColors.menuItemBackgroundHovered,
      borderRadius: '2px',
      border: `solid 1px ${theme.semanticColors.bodyDivider}`,
      margin: '2px',
      padding: '2px 4px',
      height: '26px',
      color: theme.semanticColors.bodyText,
      cursor: 'default',
      display: 'inline-flex',
    },
    selectedItemCloseButton: {
      cursor: 'pointer',
      display: 'inline-block',
    },
    suggestionItem: {
      width: '100%',
    },
    suggestionsBox: {
      selectors: {
        '.ms-Suggestions-title': {
          color: theme.palette.themePrimary,
          borderBottomColor: theme.palette.neutralLight,
        },
        '.ms-Suggestions-container': {
          borderBottomColor: theme.palette.neutralLight,
        },
      },
    },
    suggestionsList: {
      selectors: {
        '.ms-Suggestions-item': {
          selectors: {
            ':hover': {
              backgroundColor: theme.palette.neutralLighter,
            },
          },
        },
        '[aria-selected="true"]>.ms-Suggestions-item': {
          backgroundColor: theme.palette.neutralLight,
          selectors: {
            ':hover': {
              backgroundColor: theme.palette.neutralTertiaryAlt,
            },
          },
        },
      },
    },
  });
});
