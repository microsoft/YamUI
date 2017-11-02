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

    it('renders an li element', () => {
      expect(component.find('li').length).toBe(1);
    });

    it('renders its base className', () => {
      expect(component.hasClass('y-horizontalList--item')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<HorizontalListItem className="TEST_CLASSNAME" />);
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still includes its base className', () => {
      expect(component.hasClass('y-horizontalList--item')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with child content', () => {
    beforeEach(() => {
      component = shallow(<HorizontalListItem>list item content</HorizontalListItem>);
    });

    it('renders the child content', () => {
      expect(component.text()).toBe('list item content');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
