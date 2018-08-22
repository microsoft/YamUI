/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
import { textColors, fontWeights } from '../../util/styles/fonts';

export interface AppContainerClassNameProps {
  theme: ITheme;
}

export const getClassNames = memoizeFunction((props: AppContainerClassNameProps) => {
  const { theme } = props;
  const font = theme.fonts.medium;

  return mergeStyleSets({
    root: {
      color: textColors(theme).primary,
      fontSize: font.fontSize,
      lineHeight: font.lineHeight,
      fontWeight: fontWeights.normal,

      selectors: {
        ':global(html)': {
          /* Sets 1.0rem to 10px */
          fontSize: '62.5%',
          boxSizing: 'border-box',
        },
        ':global(html, body)': {
          margin: 0,
          padding: 0,
        },
        ':global(*, *::before, *::after)': {
          boxSizing: 'inherit',
        },
      },
    },
  });
});
