/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { palette, semanticColors } from '../../util/colors';
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { MessageBarType } from './types';

export interface MessageBarStyleProps {
  type: MessageBarType;
}

const borderColors = {
  [MessageBarType.WARNING]: semanticColors.warningBackground,
  [MessageBarType.ERROR]: semanticColors.errorBackground,
  [MessageBarType.INFO]: palette.neutralTertiaryAlt,
};

export const getClassNames = memoizeFunction((styleProps: MessageBarStyleProps) => {
  const { type } = styleProps;

  return mergeStyleSets({
    root: {
      backgroundColor: palette.neutralLighter,
      borderColor: borderColors[type],
      borderRadius: '1px',
      borderLeftStyle: 'solid',
      borderLeftWidth: '4px',
      padding: '7px 12px 8px',
    },
    actions: {
      whiteSpace: 'nowrap',
    },
  });
});
