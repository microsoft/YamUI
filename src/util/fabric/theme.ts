/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */

/**
 * Override Fabric's theme variables. Note this this window.FabricConfig is temporary,
 * soon Fabric will have a loadTheme() utility to handle this.
 */

const fontStyles = {
  WebkitFontSmoothing: 'auto',
  color: '#343A41',
};

// NOTE: Would be handy to have access to our CSS variable values in JS...
(window as any).FabricConfig = {
  theme: {
    fonts: {
      mini: fontStyles,
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
      icon: fontStyles,
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
  },
};
