/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

export interface ClickableStyleProps {
  block?: boolean;
}

export const getClassNames = memoizeFunction((styleProps: ClickableStyleProps) => {
  const { block } = styleProps;

  return mergeStyleSets({
    root: {
      color: 'inherit',
      font: 'inherit',
      margin: 0,
      padding: 0,
      textAlign: 'inherit',
      lineHeight: 'inherit',
      background: 'none',
      overflow: 'visible',
      border: 'none',
      cursor: 'pointer',
      display: block ? 'block' : 'inline',
      width: block ? '100%' : 'undefined',
      selectors: {
        '> .y-block': {
          width: '100%',
        },
      },
    },
  });
});
