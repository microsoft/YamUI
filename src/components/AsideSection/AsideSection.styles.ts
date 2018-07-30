/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

export interface AsideSectionStyleProps {
  theme: ITheme;
}

export const getClassNames = memoizeFunction((props: AsideSectionStyleProps) => {
  return mergeStyleSets({
    header: {
      borderBottom: `1px solid ${props.theme.semanticColors.bodyDivider}`,
    },
    action: {
      flexShrink: 0,
    },
  });
});
