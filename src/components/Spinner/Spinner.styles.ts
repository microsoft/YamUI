/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { addAlpha, getTheme } from '../../util/colors';
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { SpinnerColor, SpinnerSize } from './types';

export interface SpinnerClassNames {
  root: string;
  label: string;
  circle: string;
}

const labelMargins = {
  [SpinnerSize.XSMALL]: '-1px 0 0 6px',
  [SpinnerSize.SMALL]: '-1px 0 0 8px',
  [SpinnerSize.MEDIUM]: '-2px 0 0 8px',
  [SpinnerSize.LARGE]: '4px 0 0',
};

export const getClassNames = memoizeFunction(
  (color: SpinnerColor, size: SpinnerSize, isCentered: boolean): SpinnerClassNames => {
    const theme = getTheme();
    const circleColor = color === SpinnerColor.DARK ? theme.palette.white : theme.semanticColors.link;

    return mergeStyleSets({
      root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: size === SpinnerSize.LARGE ? 'column' : 'row',
        justifyContent: isCentered ? 'center' : undefined,
      },
      circle: {
        selectors: {
          '> .ms-Spinner-circle': {
            border: `2px solid ${addAlpha(circleColor, 30)}`,
            borderTopColor: circleColor,
          },
        },
      },
      label: {
        margin: labelMargins[size],
      },
    });
  },
);
