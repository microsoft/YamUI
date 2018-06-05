/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { palette } from '../../util/colors';
import { IButtonStyles } from 'office-ui-fabric-react/lib/components/Button/Button.types';
import { ButtonColor, ButtonSize, ButtonStatus } from './types';
import { ButtonProps } from './Button';
import { fontWeights } from '../../util/styles/fonts';
import { borderRadiusSoft } from '../../util/styles/borders';

const smallPadding = '4px 9px 6px';
const regularPadding = '7px 15px';

const primaryColors: IButtonStyles = {
  root: {
    color: palette.white,
    backgroundColor: palette.themeDark,
    borderColor: palette.themeDark,
  },
  rootHovered: {
    color: palette.white,
    backgroundColor: palette.themeDarkAlt,
    borderColor: palette.themeDarkAlt,
    textDecoration: 'none',
  },
  rootFocused: {
    color: palette.white,
    backgroundColor: palette.themeDarkAlt,
    borderColor: palette.themeDarkAlt,
  },
  rootPressed: {
    color: palette.white,
    backgroundColor: palette.themeDarker,
    borderColor: palette.themeDarker,
  },
};

const secondaryColors: IButtonStyles = {
  root: {
    color: palette.themeDark,
    backgroundColor: palette.white,
    borderColor: palette.neutralDark,
  },
  rootHovered: {
    color: palette.themeDark,
    backgroundColor: palette.white,
    borderColor: palette.themeLighter,
    textDecoration: 'none',
  },
  rootFocused: {
    color: palette.themeDark,
    backgroundColor: palette.white,
    borderColor: palette.themeLighter,
  },
  rootPressed: {
    color: palette.themeDark,
    backgroundColor: palette.white,
    borderColor: palette.themePrimary,
  },
};

export const getStyles = (props: ButtonProps): IButtonStyles => {
  const { size, color, status, fullWidth } = props;

  const colors = color === ButtonColor.PRIMARY ? primaryColors : secondaryColors;
  const { root, rootHovered, rootFocused, rootPressed } = colors;

  return {
    root: {
      ...(root as {}),
      borderRadius: borderRadiusSoft,
      fontWeight: fontWeights.bold,
      textAlign: 'center',
      display: fullWidth ? 'block' : 'inline-block',
      position: 'relative',
      whiteSpace: 'nowrap',
      transition: 'all 0.05s ease-out',
      borderWidth: '1px',
      borderStyle: 'solid',
      boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.05)',
      padding: size === ButtonSize.REGULAR ? regularPadding : smallPadding,
      cursor: status === ButtonStatus.ENABLED ? 'pointer' : 'default',
      opacity: status === ButtonStatus.DISABLED ? '0.5' : '1',
      width: fullWidth ? '100%' : undefined,
    },
    rootHovered: {
      ...(rootHovered as {}),
    },
    rootFocused: {
      ...(rootFocused as {}),
    },
    rootPressed: {
      ...(rootPressed as {}),
    },
  };
};
