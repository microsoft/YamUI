/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { palette } from '../../util/colors';
import { borderStylePopOver } from '../../util/styles/borders';
import { fontSizes, lineHeights } from '../../util/styles/fonts';
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { ICalloutContentStyles } from 'office-ui-fabric-react/lib/Callout';

export const getClassNames = memoizeFunction(() =>
  mergeStyleSets({
    modalContainer: {
      width: '340px',
      fontSize: fontSizes.medium,
      lineHeight: lineHeights.medium,
      ...borderStylePopOver,
    },
    header: {
      borderBottom: `2px solid ${palette.neutralLighter}`,
    },
  }),
);

export const getCalloutStyles = memoizeFunction((): Partial<ICalloutContentStyles> => {
  return { root: borderStylePopOver };
});
