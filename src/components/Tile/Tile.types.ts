/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { PaletteColor } from '../../util/colors';

export { PaletteColor };

export enum TileAspectRatio {
  /** 21:9 aspect ratio */
  TwentyOneNine = '21_9',
  /** 16:9 aspect ratio */
  SixteenNine = '16_9',
  /** 4:3 aspect ratio */
  FourThree = '4_3',
  /** 1:1 aspect ratio */
  OneOne = '1_1',
  /** 2:3 aspect ratio */
  TwoThree = '2_3',
}

export interface TileProps extends NestableBaseComponentProps {
  /**
   * Tile aspect ratio.
   */
  aspectRatio: TileAspectRatio;

  /**
   * If specified, adds a solid 1 px border with the specified theme color to the tile.
   * If not, no border is added.
   */
  borderColor?: PaletteColor;
}
