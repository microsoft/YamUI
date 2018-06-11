/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';

export interface FixedGridColumnStyleProps {
  fixed?: boolean;
  width?: number;
  verticalAlign: 'top' | 'middle' | 'bottom';
}

const alignItems: { [i in 'top' | 'middle' | 'bottom']: 'flex-start' | 'flex-end' | 'center' } = {
  top: 'flex-start',
  middle: 'center',
  bottom: 'flex-end',
};

export const getClassNames = memoizeFunction((styleProps: FixedGridColumnStyleProps) => {
  const { fixed, width, verticalAlign } = styleProps;

  return mergeStyleSets({
    root: {
      flexGrow: fixed ? 0 : 1,
      flexShrink: fixed && width ? 0 : 1,
      /**
       * Flexible (non-fixed) flex children must have a min-width to allow them to shrink narrower than the
       * possible width of their text content. This is required for ellipsis to work within FixedGridColumn.
       * Setting flex-basis: 100% for non-fixed columns also makes sure this works in IE11.
       * https://css-tricks.com/flexbox-truncated-text/
       */
      flexBasis: fixed ? 'auto' : '100%',
      minWidth: fixed ? 'auto' : undefined,
      width: fixed ? `${width}px` : undefined,
    },
    inner: {
      height: '100%',
      display: 'flex',
      alignItems: alignItems[verticalAlign],
    },
  });
});
