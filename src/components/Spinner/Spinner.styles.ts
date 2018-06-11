/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { addAlpha, getTheme } from '../../util/colors';
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';
import { SpinnerColor, SpinnerSize } from './types';
import { getGutterValue } from '../../util/styles/gutters';

export interface SpinnerClassNames {
  root: string;
  label: string;
}

const labelMargins = {
  [SpinnerSize.XSMALL]: `-1px 0 0 ${getGutterValue(1.5, true)}`,
  [SpinnerSize.SMALL]: `-1px 0 0 ${getGutterValue(2, true)}`,
  [SpinnerSize.MEDIUM]: `-2px 0 0 ${getGutterValue(2, true)}`,
  [SpinnerSize.LARGE]: `${getGutterValue(1, true)} 0 0`,
};

export const getClassNames = memoizeFunction((size: SpinnerSize, isCentered: boolean): SpinnerClassNames => {
  return mergeStyleSets({
    root: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: size === SpinnerSize.LARGE ? 'column' : 'row',
      justifyContent: isCentered ? 'center' : undefined,
    },
    label: {
      margin: labelMargins[size],
    },
  });
});

export const getFabricSpinnerStyles = memoizeFunction((color: SpinnerColor) => {
  const theme = getTheme();
  const circleColor = color === SpinnerColor.DARK ? theme.palette.white : theme.palette.themeDark;

  return {
    circle: {
      border: `2px solid ${addAlpha(circleColor, 30)}`,
      borderTopColor: circleColor,
    },
  };
});
