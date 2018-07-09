/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

export interface NavigationLinkStyleProps {
  block?: boolean;
  unstyled?: boolean;
}

export const getClassNames = memoizeFunction((styleProps: NavigationLinkStyleProps) => {
  const { unstyled, block } = styleProps;

  const overrides = unstyled
    ? {
        color: 'inherit',
        cursor: 'pointer',
        textDecoration: 'none',
      }
    : {};

  return mergeStyleSets({
    root: {
      display: block ? 'block' : undefined,
      ...overrides,
      selectors: {
        ':active': overrides,
        ':focus': overrides,
        ':hover': overrides,
      },
    },
  });
});
