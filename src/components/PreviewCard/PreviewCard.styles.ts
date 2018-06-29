/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';

export interface PreviewCardClassNameProps {
  allowOnClick: boolean;
  theme: ITheme;
}

export const getClassNames = memoizeFunction((styleProps: PreviewCardClassNameProps) => {
  const { allowOnClick, theme } = styleProps;

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
