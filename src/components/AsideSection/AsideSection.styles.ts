/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';

export interface AsideSectionStyleProps {
  theme?: ITheme;
}

const getMemoizedClassNames = memoizeFunction(theme => {
  return mergeStyleSets({
    header: {
      borderBottom: `1px solid ${theme.semanticColors.bodyDivider}`,
    },
  });
});

export const getClassNames = (styleProps: AsideSectionStyleProps) => {
  return getMemoizedClassNames(styleProps.theme);
};
