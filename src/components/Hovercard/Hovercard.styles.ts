/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

export interface HovercardClassNameProps {
  theme: ITheme;
}

export const getClassNames = memoizeFunction((props: HovercardClassNameProps) => {
  const { theme } = props;

  return mergeStyleSets({
    modalContainer: {
      width: '340px',
      fontSize: theme.fonts.medium.fontSize,
      lineHeight: theme.fonts.medium.lineHeight,
    },
    header: {
      borderBottom: `2px solid ${theme.palette.neutralLighter}`,
    },
  });
});
