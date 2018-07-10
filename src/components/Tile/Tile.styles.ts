/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { TileAspectRatio } from './Tile.types';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
import { mergeStyleSets, ITheme } from 'office-ui-fabric-react/lib/Styling';

export interface TileClassNameProps {
  aspectRatio: TileAspectRatio;
  theme: ITheme;
}

const mapAspectRatioToPercent: Record<TileAspectRatio, string> = {
  [TileAspectRatio.FourThree]: '75%',
  [TileAspectRatio.SixteenNine]: '56.25%',
  [TileAspectRatio.TwentyOneNine]: '42.85%',
};

export const getClassNames = memoizeFunction((classNameProps: TileClassNameProps) => {
  const { aspectRatio, theme } = classNameProps;

  return mergeStyleSets({
    root: {
      backgroundColor: theme.semanticColors.bodyDivider,
      boxShadow: `0 0 0 1px ${theme.semanticColors.bodyDivider}`,
      paddingBottom: mapAspectRatioToPercent[aspectRatio],
      position: 'relative',
      width: '100%',
      selectors: {
        '&.y-tile > *': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
    },
  });
});
