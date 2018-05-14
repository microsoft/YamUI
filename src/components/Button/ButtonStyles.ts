/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */

import Colors from '../../util/colors';
import { IButtonStyles } from 'office-ui-fabric-react/lib/components/Button/Button.types';
import { ButtonColor } from './enums';

const primaryColors: IButtonStyles = {
  root: {
    color: Colors.white,
    backgroundColor: Colors.river,
    borderColor: Colors.river,
  },
  rootHovered: {
    color: Colors.white,
    backgroundColor: Colors.newBlue,
    borderColor: Colors.newBlue,
  },
  rootFocused: {
    color: Colors.white,
    backgroundColor: Colors.newBlue,
    borderColor: Colors.newBlue,
  },
  rootPressed: {
    color: Colors.white,
    backgroundColor: Colors.bay,
    borderColor: Colors.bay,
  },
};

const secondaryColors: IButtonStyles = {
  root: {
    color: Colors.river,
    backgroundColor: Colors.white,
    borderColor: Colors.indieRock,
  },
  rootHovered: {
    color: Colors.river,
    backgroundColor: Colors.white,
    borderColor: Colors.pond,
  },
  rootFocused: {
    color: Colors.river,
    backgroundColor: Colors.white,
    borderColor: Colors.pond,
  },
  rootPressed: {
    color: Colors.river,
    backgroundColor: Colors.white,
    borderColor: Colors.lake,
  },
};

const styles = {
  [ButtonColor.PRIMARY]: primaryColors,
  [ButtonColor.SECONDARY]: secondaryColors,
};

export default styles;
