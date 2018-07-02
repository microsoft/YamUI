/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';

export interface CustomizerClassNameProps {
  theme: ITheme;
}

export const getClassNames = memoizeFunction((styleProps: CustomizerClassNameProps) => {
  const { theme } = styleProps;
  console.log(theme.semanticColors.bodyBackground);

  return mergeStyleSets({
    root: {
      backgroundColor: theme.semanticColors.bodyBackground,
    },
  });
});
