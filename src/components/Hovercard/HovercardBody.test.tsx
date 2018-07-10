/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { HovercardBody, HovercardBodyProps } from '.';

describe('<HovercardBody />', () => {
  let component: ShallowWrapper<HovercardBodyProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<HovercardBody>body content</HovercardBody>);
    });

    it('renders its given content', () => {
      expect(component.render().text()).toEqual('body content');
    });

    it('contains its base className', () => {
      expect(component.hasClass('y-hovercard--body')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<HovercardBody className="TEST_CLASSNAME">body content</HovercardBody>);
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still has its base className', () => {
      expect(component.hasClass('y-hovercard--body')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
