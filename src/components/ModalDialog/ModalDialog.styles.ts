/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { ModalDialogSize } from './ModalDialog.types';

export interface ModalDialogClassNameProps {
  size: ModalDialogSize;
  theme: ITheme;
}

export const getClassNames = memoizeFunction((classNameProps: ModalDialogClassNameProps) => {
  const { size, theme } = classNameProps;
  return mergeStyleSets({
    container: {
      width: `${size}px`,
    },
    closeButton: {
      color: theme.semanticColors.bodyText,
    },
  });
});
