/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

export interface BoxClassNameProps {
  theme: ITheme;
}

export const getClassNames = memoizeFunction((styleProps: BoxClassNameProps) => {
  const { theme } = styleProps;

  return mergeStyleSets({
    root: {
      color: theme.semanticColors.link,
      textDecoration: 'none',
      selectors: {
        '&:hover': {
          textDecoration: 'underline',
          cursor: 'pointer',
        },
        '&:active, &:focus, &:hover': {
          color: theme.semanticColors.linkHovered,
        },
      },
    },
  });
});
