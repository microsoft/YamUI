/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { MessageBarType } from './MessageBar.types';

export interface MessageBarClassNameProps {
  type: MessageBarType;
  theme: ITheme;
}

const getBorderColors = (theme: ITheme) => ({
  [MessageBarType.WARNING]: theme.semanticColors.warningBackground,
  [MessageBarType.ERROR]: theme.semanticColors.errorBackground,
  [MessageBarType.INFO]: theme.palette.neutralTertiaryAlt,
});

export const getClassNames = memoizeFunction((classNameProps: MessageBarClassNameProps) => {
  const { type, theme } = classNameProps;
  const borderColors = getBorderColors(theme);

  return mergeStyleSets({
    root: {
      backgroundColor: theme.palette.neutralLighter,
      borderColor: borderColors[type],
      borderRadius: '1px',
      borderLeftStyle: 'solid',
      borderLeftWidth: '4px',
      padding: '7px 12px 8px',
    },
    actions: {
      whiteSpace: 'nowrap',
    },
  });
});
