/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';

export interface HovercardClassNameProps {
  theme: ITheme;
}

export const getClassNames = memoizeFunction((props: HovercardClassNameProps) => {
  const { theme } = props;

  return mergeStyleSets({
    modalContainer: {
      width: '340px',
      fontSize: theme.fonts.medium.fontSize,
      lineHeight: theme.fonts.medium.lineHeight,
    },
    header: {
      borderBottom: `2px solid ${theme.palette.neutralLighter}`,
    },
  });
});
