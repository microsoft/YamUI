/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import {
  IContextualMenuItemProps,
  IContextualMenuItem,
  ContextualMenuItemType,
} from 'office-ui-fabric-react/lib/ContextualMenu';
import MenuButtonItem from './MenuButtonItem';
import Reply from '../Icon/icons/Reply';

describe('<MenuButtonItem />', () => {
  let props: IContextualMenuItemProps;
  let component: ShallowWrapper<IContextualMenuItemProps>;
  let baseItem: IContextualMenuItem;

  beforeEach(() => {
    baseItem = {
      key: 'test1',
      name: 'test',
    };

    props = {
      item: baseItem,
      classNames: {
        item: 'item',
        divider: 'divider',
        root: 'root',
        linkContent: 'linkContent',
        icon: 'icon',
        checkmarkIcon: 'checkmarkIcon',
        subMenuIcon: 'subMenuIcon',
        label: 'label',
        secondaryText: 'secondaryText',
        splitContainer: 'splitContainer',
        splitPrimary: 'splitPrimary',
        splitMenu: 'splitMenu',
        linkContentMenu: 'linkContentMenu',
      },
      index: 0,
      hasIcons: false,
    };
  });

  describe('with default options', () => {
    beforeEach(() => {
      component = shallow(<MenuButtonItem {...props} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('with an href', () => {
    beforeEach(() => {
      props = {
        ...props,
        item: {
          ...props.item,
          href: 'http://test.com',
        },
      };

      component = shallow(<MenuButtonItem {...props} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when it is disabled', () => {
    describe('without an icon', () => {
      beforeEach(() => {
        props = {
          ...props,
          item: {
            ...props.item,
            disabled: true,
          },
        };

        component = shallow(<MenuButtonItem {...props} />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });

    describe('with an icon', () => {
      beforeEach(() => {
        props = {
          ...props,
          item: {
            ...props.item,
            disabled: true,
            data: {
              yamUIIcon: Reply,
            },
          },
        };

        component = shallow(<MenuButtonItem {...props} />);
      });

      it('matches its snapshot', () => {
        expect(component).toMatchSnapshot();
      });
    });
  });

  describe('with an icon passed', () => {
    beforeEach(() => {
      props = {
        ...props,
        item: {
          ...props.item,
          data: {
            yamUIIcon: Reply,
          },
        },
      };

      component = shallow(<MenuButtonItem {...props} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when it is a header type', () => {
    beforeEach(() => {
      props = {
        ...props,
        item: {
          ...props.item,
          itemType: ContextualMenuItemType.Header,
        },
      };

      component = shallow(<MenuButtonItem {...props} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
