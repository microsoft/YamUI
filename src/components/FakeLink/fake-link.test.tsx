/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import FakeLink, { FakeLinkProps } from './index';

describe('<FakeLink />', () => {
  let component: ShallowWrapper<FakeLinkProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<FakeLink>link content</FakeLink>);
    });

    it('renders its given content', () => {
      expect(component.text()).toEqual('link content');
    });

    it('contains its base className', () => {
      expect(component.hasClass('y-fakeLink')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<FakeLink className="TEST_CLASSNAME">test content</FakeLink>);
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still includes its base className', () => {
      expect(component.hasClass('y-fakeLink')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
