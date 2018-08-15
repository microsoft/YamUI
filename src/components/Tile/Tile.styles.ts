/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { TileAspectRatio } from './Tile.types';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { PaletteColor } from '../../util/colors';

export interface TileClassNameProps {
  aspectRatio: TileAspectRatio;
  borderColor?: PaletteColor;
  theme: ITheme;
}

const mapAspectRatioToPercent: Record<TileAspectRatio, string> = {
  [TileAspectRatio.OneOne]: '100%',
  [TileAspectRatio.FourThree]: '75%',
  [TileAspectRatio.SixteenNine]: '56.25%',
  [TileAspectRatio.TwentyOneNine]: '42.85%',
};

export const getClassNames = memoizeFunction((classNameProps: TileClassNameProps) => {
  const { aspectRatio, borderColor, theme } = classNameProps;

  const borderWidth = borderColor ? '1px' : '0';
  const border = borderColor ? `solid ${borderWidth} ${theme.palette[borderColor]}` : undefined;

  return mergeStyleSets({
    root: {
      paddingBottom: mapAspectRatioToPercent[aspectRatio],
      position: 'relative',
      width: '100%',
      selectors: {
        '&.y-tile > *': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border,
          width: '100%',
          position: 'absolute',
          top: borderWidth,
          bottom: borderWidth,
          left: borderWidth,
          right: borderWidth,
        },
      },
    },
  });
});
