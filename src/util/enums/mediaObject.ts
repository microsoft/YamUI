/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { Enum } from 'typescript-string-enums';

export const MediaObjectSize = Enum({
  /**
   * 72px image with a 20px gutter
   */
  XLARGE: 'xLarge',

  /**
   * 48px image with a 12px gutter
   */
  LARGE: 'large',

  /**
   * 40px image with a 12px gutter
   */
  MEDIUM: 'medium',

  /**
   * 32px image with a 12px gutter
   */
  SMALL: 'small',

  /**
   * 24px image with a 12px gutter
   */
  XSMALL: 'xSmall',
});
export type MediaObjectSize = Enum<typeof MediaObjectSize>;
