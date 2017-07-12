/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { Enum } from 'typescript-string-enums';

export const AvatarSize = Enum({
  XLARGE: 'xLarge',
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
  XSMALL: 'xSmall',
});
export type AvatarSize = Enum<typeof AvatarSize>;
