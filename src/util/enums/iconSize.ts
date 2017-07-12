/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { Enum } from 'typescript-string-enums';

export const IconSize = Enum({
  /**
   * 32px. Used on Note hovercards but generally discouraged.
   */
  XXLARGE: '32',
  /**
   * 24px
   */
  XLARGE: '24',
  /**
   * 20px
   */
  LARGE: '20',
  /**
   * 16px
   */
  MEDIUM: '16',
  /**
   * 14px
   */
  SMALL: '14',
  /**
   * 12px
   */
  XSMALL: '12',
});
export type IconSize = Enum<typeof IconSize>;
