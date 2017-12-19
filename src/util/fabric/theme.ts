/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */

/**
 * Override Fabric's theme variables. Note this this window.FabricConfig is temporary,
 * soon Fabric will have a loadTheme() utility to handle this.
 */

import { loadTheme, IRawStyle } from 'office-ui-fabric-react/lib/Styling';

const fontStyles: IRawStyle = {
  color: '#343A41',
};

// NOTE: Would be handy to have access to our CSS variable values in JS...
loadTheme({
  palette: {
    themePrimary: '#6c98d9',
    neutralSecondary: '#646d7a',
    neutralTertiary: '#dde0e6',
    neutralLighter: '#f3f5f8',
    redDark: '#d1423b',
  },
  fonts: {
    tiny: fontStyles,
    xSmall: {
      ...fontStyles,
      fontSize: '1.0rem',
      lineHeight: '1.6rem',
    },
    small: {
      ...fontStyles,
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
    },
    smallPlus: {
      ...fontStyles,
      fontSize: '1.4rem',
      lineHeight: '2.0rem',
    },
    medium: {
      ...fontStyles,
      fontSize: '1.5rem',
      lineHeight: '2.0rem',
    },
    mediumPlus: fontStyles,
    large: {
      ...fontStyles,
      fontSize: '1.8rem',
      lineHeight: '2.4rem',
    },
    xLarge: {
      ...fontStyles,
      fontSize: '2.2rem',
      lineHeight: '2.8rem',
    },
    xxLarge: {
      ...fontStyles,
      fontSize: '2.4rem',
      lineHeight: '2.8rem',
    },
    superLarge: fontStyles,
    mega: fontStyles,
  },
});
