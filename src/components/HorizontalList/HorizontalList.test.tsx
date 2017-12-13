/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { HorizontalList, HorizontalListProps } from '.';

describe('<HorizontalList />', () => {
  let component: ShallowWrapper<HorizontalListProps, {}>;

  describe('without props', () => {
    beforeEach(() => {
      component = shallow(<HorizontalList />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with align "right"', () => {
    beforeEach(() => {
      component = shallow(<HorizontalList align="right" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<HorizontalList className="TEST_CLASSNAME" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with child content', () => {
    beforeEach(() => {
      component = shallow(<HorizontalList>list content</HorizontalList>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
