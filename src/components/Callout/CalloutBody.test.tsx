/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import CalloutBody, { CalloutBodyProps } from './CalloutBody';

describe('<CalloutBody />', () => {
  let component: ShallowWrapper<CalloutBodyProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<CalloutBody>body content</CalloutBody>);
    });

    it('renders its given content', () => {
      expect(component.render().text()).toEqual('body content');
    });

    it('contains its base className', () => {
      expect(component.hasClass('y-callout--body')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<CalloutBody className="TEST_CLASSNAME">body content</CalloutBody>);
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still has its base className', () => {
      expect(component.hasClass('y-callout--body')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
