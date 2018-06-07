/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { semanticColors } from '../../util/colors';
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';

export interface EditableTextStyleProps {
  isEditing: boolean;
}

export const getClassNames = memoizeFunction((styleProps: EditableTextStyleProps) => {
  const { isEditing } = styleProps;

  const root = isEditing
    ? {}
    : {
        color: semanticColors.bodySubtext,
        selectors: {
          ':hover': { color: semanticColors.buttonText },
          ':active': { color: semanticColors.buttonText },
          ':focus': { color: semanticColors.buttonText },
        },
      };

  return mergeStyleSets({
    root,
    clickableText: {
      paddingLeft: '0.2rem',
      selectors: {
        ':hover': { textDecoration: 'underline' },
        ':active': { textDecoration: 'underline' },
        ':focus': { textDecoration: 'underline' },
      },
    },
  });
});
