/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { palette } from '../../util/colors';
import { IButtonStyles } from 'office-ui-fabric-react/lib/components/Button/Button.types';
import { ButtonColor, ButtonSize, ButtonStatus, ButtonIconPosition } from './types';
import { fontWeights } from '../../util/styles/fonts';
import { borders } from '../../util/styles/borders';
import { mergeStyleSets } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';

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

export interface BaseButtonStyleProps {
  size: ButtonSize;
  color: ButtonColor;
  status: ButtonStatus;
  fullWidth: boolean;
}

export const getBaseButtonStyles = memoizeFunction((props: BaseButtonStyleProps): IButtonStyles => {
  const { size, color, status, fullWidth } = props;

  const colors = color === ButtonColor.PRIMARY ? primaryColors : secondaryColors;
  const { root, rootHovered, rootFocused, rootPressed } = colors;

  return {
    root: {
      ...(root as {}),
      borderRadius: borders.soft,
      fontWeight: fontWeights.bold,
      textAlign: 'center',
      display: fullWidth ? 'block' : 'inline-block',
      position: 'relative',
      whiteSpace: 'nowrap',
      transition: 'all 0.05s ease-out',
      borderWidth: '1px',
      borderStyle: 'solid',
      boxShadow: '0 1px 1px 0 rgba(0, 0, 0, 0.05)',
      padding: size === ButtonSize.REGULAR ? '7px 15px' : '4px 9px 6px',
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
});

export interface ButtonStyleProps {
  status: ButtonStatus;
  iconPosition: ButtonIconPosition;
}

export const getClassNames = memoizeFunction((styleProps: ButtonStyleProps) => {
  const { status, iconPosition } = styleProps;

  return mergeStyleSets({
    content: {
      visibility: status === ButtonStatus.LOADING ? 'hidden' : 'visible',
    },
    spinner: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    iconWrapper: {
      paddingLeft: iconPosition === ButtonIconPosition.RIGHT ? '4px' : 0,
      paddingRight: iconPosition === ButtonIconPosition.LEFT ? '5px' : 0,
    },
    secondaryText: {
      visibility: 'hidden',
      overflow: 'hidden',
      height: 0,
    },
  });
});
