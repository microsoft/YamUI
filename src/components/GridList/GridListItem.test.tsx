/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { GridListItem, BaseComponentProps } from './index';

describe('<GridList />', () => {
  let component: ShallowWrapper<BaseComponentProps>;

  describe('without props', () => {
    beforeEach(() => {
      component = shallow(<GridListItem>content</GridListItem>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<GridListItem className="TEST_CLASSNAME">content</GridListItem>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
