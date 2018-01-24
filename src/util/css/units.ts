/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */

/**
 * Converts a rem number value to rem string, i.e. 4 => '.4rem'.
 */
export const toRemString = (rems: number): string => {
  return `${rems}rem`;
};

/**
 * Converts a gutter size to rem, i.e. 1 => .4.
 */
export const gutterToRem = (gutter: number): number => {
  return Math.round(gutter * 0.4 * 100) / 100;
};

/**
 * Converts a gutter size to rem string, i.e. 1 => '.4rem'.
 */
export const gutterToRemString = (gutter: number): string => {
  return toRemString(gutterToRem(gutter));
};

/**
 * Convert a pixel number value to px string, i.e. 4 => '4px'.
 */
export const toPxString = (pixels: number): string => {
  return `${pixels}px`;
};

/**
 * Convert gutter value to pixel number, i.e. 1 => 4.
 */
export const gutterToPx = (gutter: number): number => {
  return gutter * 4;
};

/**
 * Converts a gutter size to pixel string value.
 */
export const gutterToPxString = (gutter: number): string => {
  return toPxString(gutterToPx(gutter));
};
