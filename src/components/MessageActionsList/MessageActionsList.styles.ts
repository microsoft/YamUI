/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

export interface MessageActionsListClassNameProps {
  theme: ITheme;
}

export const getClassNames = memoizeFunction((classNameProps: MessageActionsListClassNameProps) => {
  const { theme } = classNameProps;

  return mergeStyleSets({
    unlinkedText: {
      color: theme.semanticColors.link,
      paddingLeft: '2px',
    },
    menuButton: {
      color: theme.semanticColors.link,
      top: '0.2rem',
    },
  });
});
