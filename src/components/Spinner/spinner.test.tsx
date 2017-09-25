/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Spinner, { SpinnerProps } from './index';

describe('<Spinner />', () => {
  let component: ShallowWrapper<SpinnerProps, {}>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(
        <Spinner />,
      );
    });

    it('has its correct base class', () => {
      expect(component.hasClass('y-spinner')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(
        <Spinner className="TEST_CLASSNAME" />,
      );
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still includes its base className', () => {
      expect(component.hasClass('y-spinner')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
