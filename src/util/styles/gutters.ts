/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { GutterSize } from '../../components/FixedGrid/types';

export type CSSLengthUnit = string;

/**
 * @deprecated
 */
export const gutterSize: { [size in GutterSize]: string } = {
  none: '0',
  xSmall: '0.4rem',
  small: '0.8rem',
  medium: '1.2rem',
  large: '1.6rem',
  xLarge: '2rem',
  xxLarge: '2.4rem',
};

export const gutterUnit = {
  px: 4,
  rem: 0.4,
};

const getRemGutterValue = (gutterUnits: number) => {
  const units = (gutterUnits * gutterUnit.rem).toFixed(1);
  return `${units}rem`;
};

const getPxGutterValue = (gutterUnits: number) => {
  const units = (gutterUnits * gutterUnit.px).toFixed(0);
  return `${units}px`;
};

/**
 * Get a CSS unit length value from the number of gutter units desired.
 * @param gutterUnits The number of 4px gutter units desired.
 * @param growWithText Uses rem instead of px, which resizes with text if the user changes their base font-size.
 */
export const getGutterValue = (gutterUnits: number, resizeWithText?: boolean): CSSLengthUnit => {
  if (resizeWithText) {
    return getRemGutterValue(gutterUnits);
  }
  return getPxGutterValue(gutterUnits);
};
