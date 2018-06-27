/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { semanticColors } from '../../util/colors';
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';

export interface EditableTextStyleProps {
  isEditing: boolean;
}

export const getClassNames = memoizeFunction((styleProps: EditableTextStyleProps) => {
  const { isEditing } = styleProps;
  const activeColorStyle = { color: semanticColors.buttonText };
  const underlineStyle = { textDecoration: 'underline' };

  const root = isEditing
    ? {}
    : {
        color: semanticColors.bodySubtext,
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
