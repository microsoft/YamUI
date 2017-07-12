/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { Enum } from 'typescript-string-enums';

export const TextSize = Enum({
  /**
   * Large headers.
   * font-size: 24px, line-height: 28px
   */
  XXLARGE: 'xxLarge',

  /**
   * Group headers.
   * font-size: 22px, line-height: 28px
   */
  XLARGE: 'xLarge',

  /**
   * Promo headlines.
   * font-size: 18px, line-height: 24px
   */
  LARGE: 'large',

  /**
   * Body text, default size.
   * font-size: 15px, line-height: 20px
   */
  MEDIUM: 'medium',

  /**
   * Secondary text.
   * font-size: 14px, line-height: 20px
   */
  MEDIUM_SUB: 'mediumSub',

  /**
   * Metadata.
   * font-size: 12px, line-height: 16px
   */
  SMALL: 'small',
  
  /**
   * Very limited use.
   * font-size: 10px, line-height: 16px, 
   */
  XSMALL: 'xSmall',
});
export type TextSize = Enum<typeof TextSize>;
