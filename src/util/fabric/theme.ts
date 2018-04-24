/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */

/**
 * Override Fabric's theme variables.
 */

import { loadTheme } from 'office-ui-fabric-react/lib/Styling';
import { theme } from '../colors';

loadTheme({
  palette: theme.palette,
  fonts: {
    xSmall: {
      fontSize: '1.0rem',
      lineHeight: '1.6rem',
    },
    small: {
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
    },
    smallPlus: {
      fontSize: '1.4rem',
      lineHeight: '2.0rem',
    },
    medium: {
      fontSize: '1.5rem',
      lineHeight: '2.0rem',
    },
    large: {
      fontSize: '1.8rem',
      lineHeight: '2.4rem',
    },
    xLarge: {
      fontSize: '2.2rem',
      lineHeight: '2.8rem',
    },
    xxLarge: {
      fontSize: '2.4rem',
      lineHeight: '2.8rem',
    },
  },
});
