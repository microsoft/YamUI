/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import HovercardHeader, { HovercardHeaderProps } from './HovercardHeader';

describe('<HovercardHeader />', () => {
  let component: ShallowWrapper<HovercardHeaderProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<HovercardHeader>header content</HovercardHeader>);
    });

    it('renders its given content', () => {
      expect(component.render().text()).toEqual('header content');
    });

    it('contains its base className', () => {
      expect(component.hasClass('y-hovercard--header')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<HovercardHeader className="TEST_CLASSNAME">header content</HovercardHeader>);
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
