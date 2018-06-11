/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { IPalette, ISemanticColors } from 'office-ui-fabric-react/lib/Styling';

const yammerColors = {
  /* Blue */
  blue: 'rgb(36,119,195)', // #2477c3';
  stream: 'rgb(233,239,248)', // '#e9eff8';
  pond: 'rgb(154,195,255)', // '#9ac3ff';
  lake: 'rgb(108,152,217)', // '#6c98d9';
  newBlue: 'rgb(47,92,159)', // '#2f5c9f';
  river: 'rgb(56,108,187)', // '#386cbb';
  bay: 'rgb(38,79,140)', // '#264f8c';
  ocean: 'rgb(25,52,93)', // '#19345d';

  /* Gray */
  white: 'rgb(255,255,255)', // '#ffffff';
  popRock: 'rgb(243,245,248)', // '#f3f5f8';
  altRock: 'rgb(237,239,242)', // '#edeff2';
  indieRock: 'rgb(221,224,230)', // '#dde0e6';
  punkRock: 'rgb(168,176,189)', // '#a8b0bd';
  heavyMetal: 'rgb(100,109,122)', // '#646d7a';
  deathMetal: 'rgb(73,83,97)', // '#495361';
  blackMetal: 'rgb(52,58,65)', // '#343A41';

  /* Yellow */
  sunrise: 'rgb(255,231,184)', // '#ffe7b8';
  noon: 'rgb(255,197,108)', // '#ffc56c';
  sunset: 'rgb(248,174,65)', // '#f8ae41';

  /* Red */
  angel: 'rgb(251,127,120)', // '#fb7f78';
  lestat: 'rgb(209,66,59)', // '#d1423b';
  dracula: 'rgb(158,48,40)', // '#9e3028';

  /* Green */
  leaf: 'rgb(132,202,75)', // '#84ca4b';
  tree: 'rgb(51,131,35)', // '#338323';
  forest: 'rgb(39,100,27)', // '#27641b';
};

/*
 * Used globally by Fabric
 */
export const palette: Partial<IPalette> = {
  themeDarker: yammerColors.bay,
  themeDark: yammerColors.river,
  themeDarkAlt: yammerColors.newBlue,
  themePrimary: yammerColors.lake,
  themeLighter: yammerColors.pond,
  neutralDark: yammerColors.indieRock,
  neutralPrimary: yammerColors.blackMetal,
  neutralPrimaryAlt: yammerColors.deathMetal,
  neutralSecondary: yammerColors.heavyMetal,
  neutralTertiary: yammerColors.indieRock,
  neutralTertiaryAlt: yammerColors.punkRock,
  neutralLight: yammerColors.altRock,
  neutralLighter: yammerColors.popRock,
  redDark: yammerColors.dracula,
  red: yammerColors.lestat,
  white: yammerColors.white,
};

/*
 * Used globally by Fabric
 */
export const semanticColors: Partial<ISemanticColors> = {
  bodyText: palette.neutralPrimary,
  disabledBodyText: palette.neutralTertiaryAlt,
  bodySubtext: palette.neutralSecondary,
  buttonText: palette.neutralPrimaryAlt,
  errorText: palette.red,
  link: palette.themeDark,
  bodyDivider: palette.neutralDark,
};
