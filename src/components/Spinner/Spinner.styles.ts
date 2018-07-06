/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { addAlpha } from '../../util/colors';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
import { SpinnerColor, SpinnerSize } from './Spinner.types';
import { getGutterValue } from '../../util/styles/gutters';
import { ITheme } from '../Customizer';

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
export interface SpinnerClassNameProps {
  size: SpinnerSize;
  isCentered: boolean;
}

export const getClassNames = memoizeFunction(
  (classNameProps: SpinnerClassNameProps): SpinnerClassNames => {
    const { size, isCentered } = classNameProps;
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
  },
);

export interface FabricSpinnerStyleProps {
  color: SpinnerColor;
  theme: ITheme;
}

export const getFabricSpinnerStyles = memoizeFunction((styleProps: FabricSpinnerStyleProps) => {
  const { theme, color } = styleProps;
  const circleColor = color === SpinnerColor.DARK ? theme.palette.white : theme.palette.themeDark;

  return {
    circle: {
      border: `2px solid ${addAlpha(circleColor, 30)}`,
      borderTopColor: circleColor,
    },
  };
});
