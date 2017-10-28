/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import CalloutHeader, { CalloutHeaderProps } from './CalloutHeader';

describe('<CalloutHeader />', () => {
  let component: ShallowWrapper<CalloutHeaderProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<CalloutHeader>header content</CalloutHeader>);
    });

    it('renders its given content', () => {
      expect(component.render().text()).toEqual('header content');
    });

    it('contains its base className', () => {
      expect(component.hasClass('y-callout--header')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<CalloutHeader className="TEST_CLASSNAME">header content</CalloutHeader>);
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
