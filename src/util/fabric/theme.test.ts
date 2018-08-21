/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
jest.mock('office-ui-fabric-react/lib/Styling', () => ({
  getTheme: jest.fn(() => ({
    disableGlobalClassNames: false,
    fonts: {
      large: {},
      medium: {},
      mediumPlus: {},
      mega: {},
      small: {},
      smallPlus: {},
      superLarge: {},
      tiny: {},
      xLarge: {},
      xSmall: {},
      xxLarge: {},
    },
    isInverted: false,
    palette: {},
    semanticColors: {},
  })),
  loadTheme: jest.fn(),
  createTheme: jest.fn(),
}));

import * as Styling from 'office-ui-fabric-react/lib/Styling';
import './theme';

describe('Fabric Theme', () => {
  it('loads the YamUI theme override', () => {
    expect(Styling.loadTheme).toHaveBeenCalledTimes(1);
  });
});
