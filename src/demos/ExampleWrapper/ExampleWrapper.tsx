/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import 'intersection-observer'; /* Polyfill */
import * as React from 'react';
import VisibilityObserver from '../../../src/components/VisibilityObserver';
import Fabric from '../../../src/components/Fabric';
import Customizer, { createTheme } from '../../../src/components/Customizer';
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

  /* Iverted */
  white: '#000000',
  popRock: '#0C0A07',
  altRock: '#12100D',
  indieRock: '#221F19',
  punkRock: '#574F42',
  heavyMetal: '#9B9285',
  deathMetal: '#B6AC9E',
  blackMetal: '#CBC5BE',
  black: '#ffffff',

  /* Yellow */
  sunrise: '#ffe7b8',
  noon: '#ffc56c',
  sunset: '#f8ae41',

  /* Red */
  angel: '#fb7f78',
  lestat: '#d1423b',
  dracula: '#9e3028',
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
  yellow: yammerColors.noon,
  black: yammerColors.black,
};

/*
 * Used globally by Fabric
 */
export const semanticColors: Partial<ISemanticColors> = {
  bodyBackground: palette.white,
  bodyText: palette.neutralPrimary,
  disabledBodyText: palette.neutralTertiaryAlt,
  bodySubtext: palette.neutralSecondary,
  buttonText: palette.white,
  errorText: palette.red,
  link: palette.themeDark,
  menuItemBackgroundHovered: palette.neutralLighter,
  inputBackgroundCheckedHovered: palette.themePrimary,
  inputBackgroundChecked: palette.themeDark,
  bodyDivider: palette.neutralDark,
  errorBackground: yammerColors.angel,
  warningBackground: palette.yellow,
};

export const theme = createTheme({
  palette,
  semanticColors,
});

export default class ExampleWrapper extends React.Component {
  public render() {
    return <VisibilityObserver renderInView={this.getExample} />;
  }

  private getExample = () => {
    return (
      <Fabric>
        <Customizer settings={{ theme }}>{this.props.children}</Customizer>
      </Fabric>
    );
  };
}
