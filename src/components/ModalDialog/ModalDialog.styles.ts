/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { ModalDialogSize } from './types';
import { semanticColors } from '../../util/colors';

export const getClassNames = memoizeFunction((size: ModalDialogSize) => {
  return mergeStyleSets({
    container: {
      width: `${size}px`,
    },
    closeButton: {
      color: semanticColors.bodyText,
    },
  });
});
