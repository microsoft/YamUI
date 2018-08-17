/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
import { fontWeights } from '../../util/styles/fonts';

export const getClassNames = memoizeFunction(() => {
  return mergeStyleSets({
    root: {
      fontWeight: fontWeights.bold,
    },
  });
});
