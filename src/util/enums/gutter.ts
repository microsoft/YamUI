/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { Enum } from 'typescript-string-enums';

export const GutterSize = Enum({
  XXLARGE: 'xxLarge', // 24px
  XLARGE: 'xLarge', // 20px
  LARGE: 'large', // 16px
  MEDIUM: 'medium', // 12px
  SMALL: 'small', // 8px
  XSMALL: 'xSmall', // 4px
  NONE: 'none', // 0px
});
export type GutterSize = Enum<typeof GutterSize>;
