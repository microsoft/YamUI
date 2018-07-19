/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

export const getClassNames = memoizeFunction(() => {
  return mergeStyleSets({
    regular: {
      display: 'block',
      selectors: {
        '@media screen and (-ms-high-contrast: active)': {
          display: 'none',
        },
      },
    },
    highContrast: {
      display: 'none',
      selectors: {
        '@media screen and (-ms-high-contrast: active)': {
          display: 'block',
        },
      },
    },
  });
});
