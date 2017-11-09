/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Spinner, { SpinnerProps, SpinnerColor, SpinnerSize } from '.';

describe('<Spinner />', () => {
  let component: ShallowWrapper<SpinnerProps, {}>;

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(
        <Spinner className="TEST_CLASSNAME" text="Loading" />,
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

  describe('with visible text', () => {
    beforeEach(() => {
      component = shallow(
        <Spinner text="Loading" />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with invisible text', () => {
    beforeEach(() => {
      component = shallow(
        <Spinner text="Loading" hideText={true} />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with a color', () => {
    beforeEach(() => {
      component = shallow(
        <Spinner text="Loading" color={SpinnerColor.DARK} />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with a size', () => {
    beforeEach(() => {
      component = shallow(
        <Spinner text="Loading" size={SpinnerSize.XSMALL} />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
