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

    it('renders a ul tag', () => {
      expect(component.find('ul').length).toBe(1);
    });

    it('renders its base className', () => {
      expect(component.hasClass('y-horizontalList')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with align "right"', () => {
    beforeEach(() => {
      component = shallow(<HorizontalList align="right" />);
    });

    it('adds the align-right class', () => {
      expect(component.hasClass('y-horizontalList__align-right')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<HorizontalList className="TEST_CLASSNAME" />);
    });

    it('includes that className', () => {
      expect(component.hasClass('TEST_CLASSNAME')).toBe(true);
    });

    it('still includes its base className', () => {
      expect(component.hasClass('y-horizontalList')).toBe(true);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with child content', () => {
    beforeEach(() => {
      component = shallow(<HorizontalList>list content</HorizontalList>);
    });

    it('renders the child content', () => {
      expect(component.text()).toBe('list content');
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
