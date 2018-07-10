/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';

export enum TileAspectRatio {
  /** 21:9 aspect ratio */
  TwentyOneNine = '21_9',
  /** 16:9 aspect ratio */
  SixteenNine = '16_9',
  /** 4:3 aspect ratio */
  FourThree = '4_3',
}

export interface TileProps extends NestableBaseComponentProps {
  /**
   * Tile aspect ratio.
   */
  aspectRatio: TileAspectRatio;
}
