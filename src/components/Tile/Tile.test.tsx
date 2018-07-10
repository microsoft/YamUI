/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import CustomizableTile, { Tile } from './Tile';
import { TileAspectRatio, TileProps } from './Tile.types';
import Customizer, { defaultTheme } from '../Customizer';

describe('<Tile />', () => {
  let component: ShallowWrapper<TileProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<Tile aspectRatio={TileAspectRatio.FourThree}>test content</Tile>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(
        <Tile className="TEST_CLASSNAME" aspectRatio={TileAspectRatio.SixteenNine}>
          test content
        </Tile>,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with customizer', () => {
    let mountedComponent: ReactWrapper;
    const theme = defaultTheme;

    beforeEach(() => {
      mountedComponent = mount(
        <Customizer settings={{ theme }}>
          <CustomizableTile aspectRatio={TileAspectRatio.TwentyOneNine} />
        </Customizer>,
      );
    });

    it('receives custom theme', () => {
      expect(mountedComponent.find('CustomizableTile').prop('theme')).toBe(theme);
    });
  });
});
