/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Spinner, { SpinnerProps, SpinnerColor, SpinnerSize } from '.';

describe('<Spinner />', () => {
  let component: ShallowWrapper<SpinnerProps>;

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<Spinner className="TEST_CLASSNAME" text="Loading" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with visible text', () => {
    beforeEach(() => {
      component = shallow(<Spinner text="Loading" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with invisible text', () => {
    beforeEach(() => {
      component = shallow(<Spinner text="Loading" hideText={true} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with dark color', () => {
    beforeEach(() => {
      component = shallow(<Spinner text="Loading" color={SpinnerColor.DARK} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with metadata color', () => {
    beforeEach(() => {
      component = shallow(<Spinner text="Loading" color={SpinnerColor.METADATA} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with xSmall size', () => {
    beforeEach(() => {
      component = shallow(<Spinner text="Loading" size={SpinnerSize.XSMALL} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with large size', () => {
    beforeEach(() => {
      component = shallow(<Spinner text="Loading" size={SpinnerSize.LARGE} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when centered', () => {
    beforeEach(() => {
      component = shallow(<Spinner text="Loading" isCentered={true} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
