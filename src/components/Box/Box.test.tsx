/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Box, { BoxProps } from './index';

describe('<Box />', () => {
  let component: ShallowWrapper<BoxProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<Box />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<Box className="TEST_CLASSNAME" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with children passed', () => {
    beforeEach(() => {
      component = shallow(<Box />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with onClick', () => {
    let onClick: jest.Mock;
    beforeEach(() => {
      onClick = jest.fn();
      component = shallow(<Box onClick={onClick}>click me</Box>);
    });

    describe('when clicked', () => {
      beforeEach(() => {
        component.simulate('click');
      });

      it('triggers the onClick callback', () => {
        expect(onClick).toHaveBeenCalledTimes(1);
      });
    });
  });
});
