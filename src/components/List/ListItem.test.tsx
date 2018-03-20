/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ListItem, ListItemProps } from '.';

describe('<ListItem />', () => {
  let component: ShallowWrapper<ListItemProps>;

  describe('without props', () => {
    beforeEach(() => {
      component = shallow(<ListItem />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<ListItem className="TEST_CLASSNAME" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with child content', () => {
    beforeEach(() => {
      component = shallow(<ListItem>list item content</ListItem>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
