/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyles } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
import { BlockStyles } from './Block.styles';

export interface BlockClassNames {
  root: string;
  inner: string;
}

export const getClassNames = memoizeFunction(
  (styles: BlockStyles, className?: string): BlockClassNames => {
    return {
      root: mergeStyles('y-block', className, styles.root),
      inner: mergeStyles(styles.inner),
    };
  },
);
