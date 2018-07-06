/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, mount, ShallowWrapper, ReactWrapper } from 'enzyme';
import Customizable<%= name %>, { <%= name %> } from './<%= name %>';
import { <%= name %>Type, <%= name %>Props } from './<%= name %>.types';
import Customizer, { defaultTheme } from '../Customizer';

describe('<<%= name %> />', () => {
  let component: ShallowWrapper<<%= name %>Props>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<<%= name %> />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(
        <<%= name %> className="TEST_CLASSNAME" />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with a type', () => {
    beforeEach(() => {
      component = shallow(
        <<%= name %> type={<%= name %>Type.WHITE} />,
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
          <Customizable<%= name %> />
        </Customizer>,
      );
    });

    it('receives custom theme', () => {
      expect(mountedComponent.find('Customizable<%= name %>').prop('theme')).toBe(theme);
    });
  });
});
