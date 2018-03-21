/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { LayoutListItem, LayoutListItemProps } from '.';

describe('<LayoutListItem />', () => {
  let component: ShallowWrapper<LayoutListItemProps>;

  describe('without props', () => {
    beforeEach(() => {
      component = shallow(<LayoutListItem />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<LayoutListItem className="TEST_CLASSNAME" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with child content', () => {
    beforeEach(() => {
      component = shallow(<LayoutListItem>list item content</LayoutListItem>);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
