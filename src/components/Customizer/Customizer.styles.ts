/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

export interface CustomizerClassNameProps {
  theme: ITheme;
}

export const getClassNames = memoizeFunction((styleProps: CustomizerClassNameProps) => {
  const { theme } = styleProps;
  const { fontSize, lineHeight, fontFamily, fontWeight } = theme.fonts.medium;

  return mergeStyleSets({
    root: {
      backgroundColor: theme.semanticColors.bodyBackground,
      color: theme.semanticColors.bodyText,
      fontSize,
      lineHeight,
      fontFamily,
      fontWeight,
    },
  });
});
