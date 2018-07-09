/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

export interface CustomizerClassNameProps {
  theme: ITheme;
}

export const getClassNames = memoizeFunction((styleProps: CustomizerClassNameProps) => {
  const { theme } = styleProps;

  return mergeStyleSets({
    root: {
      backgroundColor: theme.semanticColors.bodyBackground,
      color: theme.semanticColors.bodyText,
      fontSize: theme.fonts.medium.fontSize,
      lineHeight: theme.fonts.medium.lineHeight,
      font: theme.fonts.medium.fontFamily,
      fontWeight: theme.fonts.medium.fontWeight,
    },
  });
});
