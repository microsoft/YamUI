/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import AccDB16 from '../Illustration/illustrations/AccDB16';
import Clickable from '../Clickable';
import SidebarListItemView, { SidebarListItemProps } from './SidebarListItem';
import { SidebarListLinkItem, SidebarListClickableItem } from './types';

describe('<SidebarListItem />', () => {
  let component: ShallowWrapper<SidebarListItemProps>;
  let clickHandler: jest.Mock;
  let linkIllustrationItem: SidebarListLinkItem;
  let linkImageItem: SidebarListLinkItem;
  let clickableIllustrationItem: SidebarListClickableItem;
  let clickableImageItem: SidebarListClickableItem;

  beforeEach(() => {
    clickHandler = jest.fn();
    linkIllustrationItem = {
      key: '1',
      title: 'TITLE',
      description: 'DESCRIPTION',
      href: 'https://www.yammer.dev',
      illustration: AccDB16,
    };
    linkImageItem = {
      key: '2',
      title: 'TITLE',
      description: 'DESCRIPTION',
      href: 'https://www.yammer.dev',
      imageContent: <img alt="image" />,
    };
    clickableIllustrationItem = {
      key: '3',
      title: 'TITLE',
      description: 'DESCRIPTION',
      onClick: clickHandler,
      illustration: AccDB16,
    };
    clickableImageItem = {
      key: '4',
      title: 'TITLE',
      description: 'DESCRIPTION',
      onClick: clickHandler,
      imageContent: <img alt="image" />,
    };
  });

  describe('with link and illustration', () => {
    beforeEach(() => {
      component = shallow(<SidebarListItemView item={linkIllustrationItem} size="small" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    describe('and newWindow', () => {
      beforeEach(() => {
        const item = {
          ...linkIllustrationItem,
          newWindow: true,
        };

        component = shallow(<SidebarListItemView item={item} size="small" />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('with link and image', () => {
    beforeEach(() => {
      component = shallow(<SidebarListItemView item={linkImageItem} size="small" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with clickable and illustration', () => {
    beforeEach(() => {
      component = shallow(<SidebarListItemView item={clickableIllustrationItem} size="small" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    describe('when clicked', () => {
      beforeEach(() => {
        component.find(Clickable).simulate('click');
      });

      it('triggers its onClick callback', () => {
        expect(clickHandler).toHaveBeenCalledTimes(1);
      });

      it('triggers its onClick callback with the correct key', () => {
        expect(clickHandler).toHaveBeenCalledWith('3');
      });
    });
  });

  describe('with clickable and image', () => {
    beforeEach(() => {
      component = shallow(<SidebarListItemView item={clickableImageItem} size="small" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('at medium size', () => {
    beforeEach(() => {
      component = shallow(<SidebarListItemView item={linkIllustrationItem} size="medium" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('at large size', () => {
    beforeEach(() => {
      component = shallow(<SidebarListItemView item={linkIllustrationItem} size="large" />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
