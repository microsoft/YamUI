/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { IPartialTheme } from 'office-ui-fabric-react/lib/Styling';

/*
* Yammer's Color Palette - Uncomment as needed.
*/

/* Blue */
// const blue = '#2477c3';
// const stream = '#e9eff8';
// const pond = '#9ac3ff';
const lake = '#6c98d9';
const river = '#386cbb';
// const bay = '#264f8c';
// const ocean = '#19345d';

/* Gray */
// const white = '#fff';
const popRock = '#f3f5f8';
// const altRock = '#edeff2';
const indieRock = '#dde0e6';
// const punkRock = '#a8b0bd';
const heavyMetal = '#646d7a';
const deathMetal = '#495361';
// const blackMetal = '#343A41';
// const black = '#000';

/* Yellow */
// const sunrise = '#ffe7b8';
// const noon = '#ffc56c';
// const sunset = '#f8ae41';

/* Red */
// const angel = '#fb7f78';
const lestat = '#d1423b';
// const dracula = '#9e3028';

/* Green */
// const leaf = '#84ca4b';
// const tree = '#338323';
// const forest = '#27641b';

/*
 * Used globally by Fabric
 */
export const theme: IPartialTheme = {
  palette: {
    themePrimary: lake,
    neutralSecondary: heavyMetal,
    neutralTertiary: indieRock,
    neutralLighter: popRock,
    neutralDark: indieRock,
    redDark: lestat,
    themeDarker: deathMetal,
  },
};

/*
 * Use for component level overrides
 */
const colors = {
  button: deathMetal,
  buttonHovered: river,
  buttonPressed: river,
  buttonExpanded: river,
};

export default colors;
