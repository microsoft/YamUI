/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { <%= name %>Type } from './types';

export interface <%= name %>StyleProps {
  type?: <%= name %>Type;
}

export const getClassNames = memoizeFunction((styleProps: <%= name %>StyleProps) => {
  const { type } = styleProps;

  return mergeStyleSets({
    root: {
      color: type === <%= name %>Type.BLACK ? '#000' : '#fff',
      backgroundColor: type === <%= name %>Type.BLACK ? '#fff' : '#000',
    },
  });
});
