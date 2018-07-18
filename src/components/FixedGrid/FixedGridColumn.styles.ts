/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets, IRawStyle } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';

export interface FixedGridColumnStyleProps {
  fixed?: boolean;
  width?: number;
  verticalAlign: 'top' | 'middle' | 'bottom';
}

const alignItems: Record<FixedGridColumnStyleProps['verticalAlign'], IRawStyle['alignItems']> = {
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
      minWidth: fixed ? 'auto' : 0,
      width: fixed && width ? `${width}px` : undefined,
    },
    inner: {
      height: '100%',
      display: 'flex',
      alignItems: alignItems[verticalAlign],
    },
  });
});
