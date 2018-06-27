/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { palette } from '../../util/colors';
import { fontSizes, lineHeights } from '../../util/styles/fonts';
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';

export const getClassNames = memoizeFunction(() =>
  mergeStyleSets({
    modalContainer: {
      width: '340px',
      fontSize: fontSizes.medium,
      lineHeight: lineHeights.medium,
    },
    header: {
      borderBottom: `2px solid ${palette.neutralLighter}`,
    },
  }),
);
