/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { getTheme } from '../../util/colors';
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';

export const getClassNames = memoizeFunction(() => {
  const theme = getTheme();
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
