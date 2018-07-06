/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import Customizer from './Customizer';
import { ICustomizerProps, defaultTheme } from './Customizer.types';

describe('<Customizer />', () => {
  let component: ShallowWrapper<ICustomizerProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<Customizer />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<Customizer className="TEST_CLASSNAME" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with children passed', () => {
    beforeEach(() => {
      component = shallow(<Customizer>CHILDREN</Customizer>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with theme', () => {
    let mountedComponent: ReactWrapper;
    const theme = defaultTheme;

    beforeEach(() => {
      mountedComponent = mount(<Customizer settings={{ theme }} />);
    });

    it('body receives custom theme', () => {
      expect(mountedComponent.find('CustomizableBody').prop('theme')).toBe(theme);
    });
  });
});
