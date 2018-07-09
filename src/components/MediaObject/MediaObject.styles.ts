/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
import { MediaObjectSize } from './types';

export interface MediaObjectStyleProps {
  size: MediaObjectSize;
}

const getPaddingTop = (size: MediaObjectSize) => {
  if (size === MediaObjectSize.SMALL) {
    return '0.4rem';
  }
  if (size === MediaObjectSize.MEDIUM) {
    return '0.2rem';
  }
  return undefined;
};

export const getClassNames = memoizeFunction((styleProps: MediaObjectStyleProps) => {
  const { size } = styleProps;

  return mergeStyleSets({
    imageColumn: {
      paddingTop: getPaddingTop(size),
    },
  });
});
