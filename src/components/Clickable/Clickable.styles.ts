/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
import { getNormalFocusStyle } from '../../util/styles/focusOutlines';

export interface ClickableStyleProps {
  block?: boolean;
  theme: ITheme;
}

export const getClassNames = memoizeFunction((styleProps: ClickableStyleProps) => {
  const { block, theme } = styleProps;

  const focusOutlineStyles = getNormalFocusStyle();

  return mergeStyleSets({
    root: [
      {
        color: 'inherit',
        font: 'inherit',
        margin: 0,
        padding: 0,
        textAlign: 'inherit',
        lineHeight: 'inherit',
        background: 'none',
        overflow: 'visible',
        border: 'none',
        cursor: 'pointer',
        display: block ? 'block' : 'inline',
        width: block ? '100%' : 'undefined',
        selectors: {
          '> .y-block': {
            width: '100%',
          },
          '&:active .y-fakeLink, &:focus .y-fakeLink, &:hover .y-fakeLink': {
            textDecoration: 'underline',
            cursor: 'pointer',
            color: theme.semanticColors.linkHovered,
          },
        },
      },
      focusOutlineStyles,
    ],
  });
});
