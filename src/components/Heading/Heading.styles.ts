/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { fontWeights } from '../../util/styles/fonts';
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { HeadingSize } from './Heading';

export interface HeadingStyleProps {
  size?: HeadingSize;
}

const getFontWeight = (size?: HeadingSize) => {
  if (size === '4') {
    return fontWeights.normal;
  }

  if (size === 'none') {
    return 'inherit';
  }

  return fontWeights.bold;
};

export const getClassNames = memoizeFunction((styleProps: HeadingStyleProps) => {
  const { size } = styleProps;

  return mergeStyleSets({
    root: {
      display: 'inline',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      fontWeight: getFontWeight(size),
      marginBottom: size === 'none' ? 0 : undefined,
    },
  });
});
