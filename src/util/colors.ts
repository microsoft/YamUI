/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { getColorFromString, updateA } from 'office-ui-fabric-react/lib/utilities/color/colors';
import { IPalette, ISemanticColors } from 'office-ui-fabric-react/lib/Styling';

const yammerColors = {
  /* Blue */
  blue: '#2477c3',
  stream: '#e9eff8',
  pond: '#9ac3ff',
  lake: '#6c98d9',
  newBlue: '#2f5c9f',
  river: '#386cbb',
  bay: '#264f8c',
  ocean: '#19345d',

  /* Gray */
  white: '#ffffff',
  popRock: '#f3f5f8',
  altRock: '#edeff2',
  indieRock: '#dde0e6',
  punkRock: '#a8b0bd',
  heavyMetal: '#646d7a',
  deathMetal: '#495361',
  blackMetal: '#343A41',

  /* Yellow */
  sunrise: '#ffe7b8',
  noon: '#ffc56c',
  sunset: '#f8ae41',

  /* Red */
  angel: '#fb7f78',
  lestat: '#d1423b',
  dracula: '#9e3028',

  /* Green */
  leaf: '#84ca4b',
  tree: '#338323',
  forest: '#27641b',
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

/**
 * Generates a new CSS color value with alpha transparency.
 * @param color Any valid CSS color value
 * @param alphaPercentage Number between 0 and 100
 */
export const addAlpha = (color: string, alphaPercentage: number) => {
  const colorObject = getColorFromString(color);
  return colorObject ? updateA(colorObject, alphaPercentage).str : undefined;
};
