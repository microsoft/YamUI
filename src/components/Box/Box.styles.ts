/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';

export interface BoxClassNameProps {
  hasOnClick: boolean;
  theme: ITheme;
}

export const getClassNames = memoizeFunction((styleProps: BoxClassNameProps) => {
  const { hasOnClick, theme } = styleProps;

  return mergeStyleSets({
    root: {
      borderRadius: '1px',
      border: `1px solid ${theme.semanticColors.bodyDivider}`,
      cursor: hasOnClick ? 'pointer' : undefined,
    },
    inner: {
      margin: '-1px',
      position: 'relative',
    },
  });
});
