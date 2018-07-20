/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
import { PaletteColor } from '../../util/colors';

export interface BoxClassNameProps {
  hasOnClick: boolean;
  theme: ITheme;
  backgroundColor?: PaletteColor;
  borderColor?: PaletteColor;
}

export const getClassNames = memoizeFunction((styleProps: BoxClassNameProps) => {
  const { hasOnClick, theme, backgroundColor, borderColor } = styleProps;

  return mergeStyleSets({
    root: {
      borderRadius: '1px',
      border: `1px solid ${borderColor ? theme.palette[borderColor] : theme.semanticColors.bodyDivider}`,
      cursor: hasOnClick ? 'pointer' : undefined,
      backgroundColor: backgroundColor ? theme.palette[backgroundColor] : undefined,
    },
    inner: {
      margin: '-1px',
      position: 'relative',
    },
  });
});
