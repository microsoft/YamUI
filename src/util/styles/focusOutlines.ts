/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { IsFocusVisibleClassName } from '@uifabric/utilities';

export const HighContrastSelector = '@media screen and (-ms-high-contrast: active)';

export function getNormalFocusStyle() {
  return {
    outline: 'none',
    selectors: {
      [`.${IsFocusVisibleClassName} &:focus`]: {
        boxShadow: 'inset 0 0 0 1px',
        selectors: {
          [HighContrastSelector]: {
            boxShadow: 'inset 0 0 0 1px',
          },
        },
      },
    },
  };
}
