/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { HorizontalListItem, HorizontalListItemProps } from '.';

describe('<HorizontalListItem />', () => {
  let component: ShallowWrapper<HorizontalListItemProps, {}>;

  describe('without props', () => {
    beforeEach(() => {
      component = shallow(<HorizontalListItem />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<HorizontalListItem className="TEST_CLASSNAME" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with child content', () => {
    beforeEach(() => {
      component = shallow(<HorizontalListItem>list item content</HorizontalListItem>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
