/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Box, { BoxProps } from './index';

describe('<Box />', () => {
  let component: ShallowWrapper<BoxProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<Box />);
    });

    it('has its correct base class', () => {
      expect(component.hasClass('y-box')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(
        <Box className="TEST_CLASSNAME" />,
      );
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still includes its base className', () => {
      expect(component.hasClass('y-box')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with children passed', () => {
    beforeEach(() => {
      component = shallow(<Box/>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
