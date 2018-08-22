/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

export const getClassNames = memoizeFunction(() => {
  return mergeStyleSets({
    root: {
      // NOTE: Replace 1.5rem with 1.6rem to match our vertical rhythm.
      //       Keeping this style for now as it will introduce more visual diff noise.
      margin: '0 0 1.5rem',
      lineHeight: 'inherit',
    },
  });
});
