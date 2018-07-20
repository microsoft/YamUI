/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { getColorFromString, updateA } from 'office-ui-fabric-react/lib/utilities/color';
import { getTheme, IPalette, ISemanticColors } from 'office-ui-fabric-react/lib/Styling';

export type PaletteColor = keyof IPalette;
export { getTheme };

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
  blackMetal: '#343a41',
  black: '#000000',

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

const darkYammerColors = {
  ...yammerColors,
  white: '#000000',
  popRock: '#0c0a07',
  altRock: '#12100d',
  indieRock: '#221f19',
  punkRock: '#574f42',
  heavyMetal: '#9b9285',
  deathMetal: '#b6ac9e',
  blackMetal: '#cbc5be',
  black: '#ffffff',
};

export const palette: Partial<IPalette> = {
  themeDarker: yammerColors.bay,
  themeDark: yammerColors.river,
  themeDarkAlt: yammerColors.newBlue,
  themePrimary: yammerColors.lake,
  themeLighter: yammerColors.pond,
  themeLighterAlt: yammerColors.stream,
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
  yellow: yammerColors.noon,
};

const getSemanticColors = (p: Partial<IPalette> = palette): Partial<ISemanticColors> => ({
  bodyBackground: p.white,
  bodyText: p.neutralPrimary,
  disabledBodyText: p.neutralTertiaryAlt,
  bodySubtext: p.neutralSecondary,
  buttonText: p.neutralPrimaryAlt,
  errorText: p.red,
  link: p.themeDark,
  menuItemBackgroundHovered: p.neutralLighter,
  inputBackgroundCheckedHovered: p.themePrimary,
  inputBackgroundChecked: p.themeDark,
  bodyDivider: p.neutralDark,
  errorBackground: yammerColors.angel,
  warningBackground: p.yellow,
});

export const semanticColors = getSemanticColors();

export const darkPalette: Partial<IPalette> = {
  ...palette,
  themeDarker: yammerColors.stream,
  themeDark: yammerColors.pond,
  themeDarkAlt: '#4579C8', // lake lightend by 5%,
  themePrimary: yammerColors.lake,
  themeLighter: yammerColors.river,
  themeLighterAlt: yammerColors.bay,
  neutralDark: darkYammerColors.indieRock,
  neutralPrimary: darkYammerColors.blackMetal,
  neutralPrimaryAlt: darkYammerColors.deathMetal,
  neutralSecondary: darkYammerColors.heavyMetal,
  neutralTertiary: darkYammerColors.indieRock,
  neutralTertiaryAlt: darkYammerColors.punkRock,
  neutralLight: darkYammerColors.altRock,
  neutralLighter: darkYammerColors.popRock,
  white: darkYammerColors.white,
  black: darkYammerColors.black,
};

export const darkSemanticColors = getSemanticColors(darkPalette);

/**
 * Generates a new CSS color value with alpha transparency.
 * @param color Any valid CSS color value
 * @param alphaPercentage Number between 0 and 100
 */
export const addAlpha = (color: string, alphaPercentage: number) => {
  const colorObject = getColorFromString(color);
  return colorObject ? updateA(colorObject, alphaPercentage).str : undefined;
};
