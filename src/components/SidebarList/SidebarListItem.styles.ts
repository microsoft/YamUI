/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
import { getGutterValue } from '../../util/styles/gutters';
import { SidebarListSize } from './SidebarList.types';

const getPadding = (size: SidebarListSize) => {
  if (size === 'small') {
    return `${getGutterValue(0.5)} 0`;
  }
  if (size === 'medium') {
    return `${getGutterValue(1)} 0`;
  }
  return `0 0 ${getGutterValue(1)}`;
};

export interface SidebarClassNameProps {
  size: SidebarListSize;
  theme: ITheme;
}

export const getClassNames = memoizeFunction((classNameProps: SidebarClassNameProps) => {
  const { theme, size } = classNameProps;
  return mergeStyleSets({
    root: {
      position: 'relative',
      selectors: {
        ':hover': {
          backgroundColor: theme.semanticColors.menuItemBackgroundHovered,
          margin: `0 ${getGutterValue(-2)}`,
          padding: `0 ${getGutterValue(2)}`,
        },
      },
    },
    content: {
      padding: getPadding(size),
    },
  });
});
