/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import GridList, { GridListType, GridListProps } from './index';

describe('<GridList />', () => {
  let component: ShallowWrapper<GridListProps>;

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<GridList />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<GridList className="TEST_CLASSNAME" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with a type', () => {
    beforeEach(() => {
      component = shallow(<GridList type={GridListType.WHITE} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
