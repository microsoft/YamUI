/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { semanticColors } from '../../util/colors';
import { getGutterValue } from '../../util/styles/gutters';
import { SidebarListSize } from './types';

const getPadding = (size: SidebarListSize) => {
  if (size === 'small') {
    return `${getGutterValue(0.5)} 0`;
  }
  if (size === 'medium') {
    return `${getGutterValue(1)} 0`;
  }
  return `0 0 ${getGutterValue(1)}`;
};

export interface SidebarListItemClassNames {
  root: string;
  content: string;
}

export const getClassNames = memoizeFunction((size: SidebarListSize): SidebarListItemClassNames =>
  mergeStyleSets({
    root: {
      position: 'relative',
      selectors: {
        ':hover': {
          backgroundColor: semanticColors.menuItemBackgroundHovered,
          margin: `0 ${getGutterValue(-2)}`,
          padding: `0 ${getGutterValue(2)}`,
        },
      },
    },
    content: {
      padding: getPadding(size),
    },
  }),
);
