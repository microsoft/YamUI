/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { fontWeights } from '../../util/styles/fonts';
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { HeadingSize } from './Heading';

export interface HeadingStyleProps {
  size?: HeadingSize;
}

export const getClassNames = memoizeFunction((styleProps: HeadingStyleProps) => {
  const { size } = styleProps;

  return mergeStyleSets({
    root: {
      display: 'inline',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      fontWeight: size === '4' ? fontWeights.normal : size === 'none' ? 'inherit' : fontWeights.bold,
      marginBottom: size === 'none' ? 0 : undefined,
    },
  });
});
