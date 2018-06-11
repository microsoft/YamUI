/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';

export interface IllustrationStyleProps {
  block: boolean;
}

export const getClassNames = memoizeFunction((styleProps: IllustrationStyleProps) => {
  const { block } = styleProps;

  return mergeStyleSets({
    root: {
      /* IE/Edge do not bubble click events up from SVG elements, so allow clicks to pass through */
      pointerEvents: 'none',
      display: block ? 'block' : 'inline',
    },
  });
});
