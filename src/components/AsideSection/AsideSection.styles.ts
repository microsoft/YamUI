/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { palette } from '../../util/colors';
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';

export const getClasses = memoizeFunction(() => {
  return mergeStyleSets({
    header: {
      borderBottom: `1px solid ${palette.neutralDark}`,
    },
  });
});
