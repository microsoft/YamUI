/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';

export interface AsideSectionStyleProps {
  theme: ITheme;
}

export const getClassNames = memoizeFunction((props: AsideSectionStyleProps) => {
  return mergeStyleSets({
    header: {
      borderBottom: `1px solid ${props.theme.semanticColors.bodyDivider}`,
    },
  });
});
