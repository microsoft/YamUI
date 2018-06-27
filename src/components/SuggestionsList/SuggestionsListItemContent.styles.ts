/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { fontWeights } from '../../util/styles/fonts';
import { getGutterValue } from '../../util/styles/gutters';
import { SuggestionsListItemTemplate } from './types';

export const getClassNames = memoizeFunction((template: SuggestionsListItemTemplate) => {
  return mergeStyleSets({
    root: {
      textAlign: 'left',
      padding:
        template === SuggestionsListItemTemplate.TEXT
          ? `${getGutterValue(1)} ${getGutterValue(3)}`
          : `${getGutterValue(1)} ${getGutterValue(3)} ${getGutterValue(2)}`,
    },
    highlight: {
      fontWeight: fontWeights.bold,
    },
  });
});
