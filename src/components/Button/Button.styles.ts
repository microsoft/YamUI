/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { getTheme } from '../../util/colors';
import { IButtonStyles } from 'office-ui-fabric-react/lib/components/Button/Button.types';
import { ButtonColor, ButtonSize, ButtonStatus, ButtonIconPosition } from './types';
import { fontWeights } from '../../util/styles/fonts';
import { borders } from '../../util/styles/borders';
import { mergeStyleSets, ITheme } from '@uifabric/styling';
import { memoizeFunction } from '@uifabric/utilities';

const primaryColors = (theme: ITheme): IButtonStyles => ({
  root: {
    color: theme.palette.white,
    backgroundColor: theme.palette.themeDark,
    borderColor: theme.palette.themeDark,
  },
  rootHovered: {
    color: theme.palette.white,
    backgroundColor: theme.palette.themeDarkAlt,
    borderColor: theme.palette.themeDarkAlt,
    textDecoration: 'none',
  },
  rootFocused: {
    color: theme.palette.white,
    backgroundColor: theme.palette.themeDarkAlt,
    borderColor: theme.palette.themeDarkAlt,
  },
  rootPressed: {
    color: theme.palette.white,
    backgroundColor: theme.palette.themeDarker,
    borderColor: theme.palette.themeDarker,
  },
});

const secondaryColors = (theme: ITheme): IButtonStyles => ({
  root: {
    color: theme.palette.themeDark,
    backgroundColor: theme.palette.white,
    borderColor: theme.palette.neutralDark,
  },
  rootHovered: {
    color: theme.palette.themeDark,
    backgroundColor: theme.palette.white,
    borderColor: theme.palette.themeLighter,
    textDecoration: 'none',
  },
  rootFocused: {
    color: theme.palette.themeDark,
    backgroundColor: theme.palette.white,
    borderColor: theme.palette.themeLighter,
  },
  rootPressed: {
    color: theme.palette.themeDark,
    backgroundColor: theme.palette.white,
    borderColor: theme.palette.themePrimary,
  },
});

export interface BaseButtonStyleProps {
  theme?: ITheme;
  size: ButtonSize;
  color: ButtonColor;
  status: ButtonStatus;
  fullWidth: boolean;
}

const getMemoizedBaseButtonStyles = memoizeFunction((props, theme): IButtonStyles => {
  const { size, color, status, fullWidth } = props;

  const colors = color === ButtonColor.PRIMARY ? primaryColors(theme) : secondaryColors(theme);
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

export const getBaseButtonStyles = (props: BaseButtonStyleProps) => {
  const theme = props.theme || getTheme();
  return getMemoizedBaseButtonStyles(props, theme);
};

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
