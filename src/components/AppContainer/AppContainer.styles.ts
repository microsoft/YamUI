/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

export const getClassNames = memoizeFunction(() => {
  return mergeStyleSets({
    root: {
      boxSizing: 'border-box',
      selectors: {
        '*, *::before, *::after': {
          boxSizing: 'inherit',
        },
        ':global(html)': {
          /* Sets 1.0rem to 10px */
          fontSize: '62.5%',
        },
        ':global(html, body)': {
          margin: 0,
          padding: 0,
        },
      },
    },
  });
});
