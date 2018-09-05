/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, IStyle } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

const boxSizingStyles: IStyle = {
  boxSizing: 'border-box',
  selectors: {
    '*, *::before, *::after': {
      boxSizing: 'inherit',
    },
  },
};

export const getClassNames = memoizeFunction(() => {
  return mergeStyleSets(
    {
      root: boxSizingStyles,
    },
    {
      root: {
        selectors: {
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
    },
  );
});

export const scopedSettings = {
  CalloutContent: { styles: { calloutMain: boxSizingStyles } },
  Modal: { styles: { root: boxSizingStyles } },
};
