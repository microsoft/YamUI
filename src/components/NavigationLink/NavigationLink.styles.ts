/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

export interface NavigationLinkStyleProps {
  block?: boolean;
  unstyled?: boolean;
  theme: ITheme;
}

export const getClassNames = memoizeFunction((styleProps: NavigationLinkStyleProps) => {
  const { unstyled, block, theme } = styleProps;

  const overrides = unstyled
    ? {
        textDecoration: 'none',
        cursor: 'pointer',
        color: 'inherit',
      }
    : {
        textDecoration: 'underline',
        cursor: 'pointer',
        color: theme.semanticColors.linkHovered,
      };

  return mergeStyleSets({
    root: {
      display: block ? 'block' : undefined,
      cursor: 'pointer',
      color: unstyled ? 'inherit' : theme.semanticColors.link,
      textDecoration: 'none',
      selectors: {
        '&:active, &:focus, &:hover': overrides,
        '&:active .y-fakeLink, &:focus .y-fakeLink, &:hover .y-fakeLink': overrides,
      },
    },
  });
});
