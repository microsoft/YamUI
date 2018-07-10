/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

export interface EditableTextStyleProps {
  isEditing: boolean;
  theme: ITheme;
}

export const getClassNames = memoizeFunction((styleProps: EditableTextStyleProps) => {
  const { isEditing, theme } = styleProps;
  const activeColorStyle = { color: theme.semanticColors.buttonText };
  const underlineStyle = { textDecoration: 'underline' };

  const root = isEditing
    ? {}
    : {
        color: theme.semanticColors.bodySubtext,
        selectors: {
          ':hover': activeColorStyle,
          ':active': activeColorStyle,
          ':focus': activeColorStyle,
        },
      };

  return mergeStyleSets({
    root,
    clickableText: {
      paddingLeft: '0.2rem',
      selectors: {
        ':hover': underlineStyle,
        ':active': underlineStyle,
        ':focus': underlineStyle,
      },
    },
  });
});
