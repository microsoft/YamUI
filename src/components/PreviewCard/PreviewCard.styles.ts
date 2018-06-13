/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { getTheme } from '../../util/colors';
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';

export interface PreviewCardStyleProps {
  allowOnClick: boolean;
}

const getMemoizedClassNames = memoizeFunction((styleProps, theme) => {
  const { allowOnClick } = styleProps;

  return mergeStyleSets({
    root: {
      selectors: {
        ':hover': {
          backgroundColor: allowOnClick ? theme.palette.neutralLighter : undefined,
        },
      },
    },
    media: {
      paddingBottom: '2px',
    },
    remove: {
      color: theme.palette.neutralSecondary,
      position: 'absolute',
      top: '4px',
      right: '2px',
    },
    progress: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
  });
});

export const getClassNames = (styleProps: PreviewCardStyleProps) => {
  const theme = getTheme();
  return getMemoizedClassNames(styleProps, theme);
};
