/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */

import Colors from '../../util/colors';
import { IButtonStyles } from 'office-ui-fabric-react/lib/components/Button/Button.types';
import { ButtonColor } from './enums';

const primaryColors: IButtonStyles = {
  root: {
    color: Colors.white,
    backgroundColor: Colors.themeDark,
    borderColor: Colors.themeDark,
  },
  rootHovered: {
    color: Colors.white,
    backgroundColor: Colors.themeDarkAlt,
    borderColor: Colors.themeDarkAlt,
  },
  rootFocused: {
    color: Colors.white,
    backgroundColor: Colors.themeDarkAlt,
    borderColor: Colors.themeDarkAlt,
  },
  rootPressed: {
    color: Colors.white,
    backgroundColor: Colors.themeDarker,
    borderColor: Colors.themeDarker,
  },
};

const secondaryColors: IButtonStyles = {
  root: {
    color: Colors.themeDark,
    backgroundColor: Colors.white,
    borderColor: Colors.neutralDark,
  },
  rootHovered: {
    color: Colors.themeDark,
    backgroundColor: Colors.white,
    borderColor: Colors.themeLighter,
  },
  rootFocused: {
    color: Colors.themeDark,
    backgroundColor: Colors.white,
    borderColor: Colors.themeLighter,
  },
  rootPressed: {
    color: Colors.themeDark,
    backgroundColor: Colors.white,
    borderColor: Colors.themePrimary,
  },
};

const styles = {
  [ButtonColor.PRIMARY]: primaryColors,
  [ButtonColor.SECONDARY]: secondaryColors,
};

export default styles;
