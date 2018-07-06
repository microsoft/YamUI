/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

export interface IconStyleProps {
  block?: boolean;
  color?: string;
}

export const getClassNames = memoizeFunction((styleProps: IconStyleProps) => {
  const { block, color } = styleProps;

  return mergeStyleSets({
    root: {
      display: block ? 'block' : 'inline',
      position: 'relative',
      verticalAlign: '0',
      fill: 'currentColor',
      top: '0.2rem',
      color,
      /* IE/Edge do not bubble click events up from SVG elements, so allow clicks to pass through */
      pointerEvents: 'none',
    },
  });
});
