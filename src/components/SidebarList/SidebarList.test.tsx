/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import AccDB16 from '../Illustration/illustrations/AccDB16';
import SidebarList, { SidebarListProps } from './index';
import { SidebarListItem } from './SidebarList.types';

describe('<SidebarList />', () => {
  let component: ShallowWrapper<SidebarListProps>;

  describe('with default options and empty items', () => {
    beforeEach(() => {
      component = shallow(<SidebarList items={[]} size="small" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with additional className', () => {
    beforeEach(() => {
      component = shallow(<SidebarList items={[]} size="large" className="TEST_CLASSNAME" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with items', () => {
    beforeEach(() => {
      const items: SidebarListItem[] = [
        {
          key: '1',
          title: 'Item 1 title',
          href: 'https://www.yammer.dev',
          illustration: AccDB16,
        },
      ];

      component = shallow(<SidebarList items={items} size="large" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
