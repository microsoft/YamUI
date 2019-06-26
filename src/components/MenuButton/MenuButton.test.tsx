/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { IContextualMenuProps, IContextualMenuItemProps } from 'office-ui-fabric-react/lib/ContextualMenu';
import MenuButton, { MenuButtonProps, MenuButtonItem, MenuItemType } from '.';
import { IconSize } from '../Icon';
import Reply from '../Icon/icons/Reply';

describe('<MenuButton />', () => {
  let component: ShallowWrapper<MenuButtonProps>;
  const ariaLabel = 'testAria';
  let menuItems: MenuButtonItem[];

  beforeEach(() => {
    menuItems = [
      {
        key: 'test1',
        text: 'test',
        type: MenuItemType.Normal,
      },
      {
        key: 'test2',
        text: 'test',
        type: MenuItemType.Header,
      },
      {
        key: 'test3',
        text: 'test',
        href: 'http://bing.com',
        newWindow: true,
      },
      {
        key: 'test4',
        text: 'test',
        href: 'http://bing.com',
        newWindow: false,
      },
    ];
  });

  describe('with default options', () => {
    let testProps: IContextualMenuItemProps;

    beforeEach(() => {
      testProps = {
        item: {
          key: 'test1',
          name: 'test',
        },
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
      component = shallow(<MenuButton ariaLabel={ariaLabel} menuItems={menuItems} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('passes an icon method to fabric that defaults to the More icon with size large', () => {
      const onRenderIcon: (() => JSX.Element) = component.find('CustomizedActionButton').prop('onRenderIcon');
      expect(onRenderIcon()).toMatchSnapshot();
    });

    it('passes a menu icon method to fabric that returns null to replace the chevron down icon', () => {
      const onRenderMenuIcon: (() => JSX.Element) = component.find('CustomizedActionButton').prop('onRenderMenuIcon');
      expect(onRenderMenuIcon()).toMatchSnapshot();
    });

    it('passes contextualMenuItemAs method to fabric that returns a MenuButtonItem', () => {
      const menuProps: IContextualMenuProps = component.find('CustomizedActionButton').prop('menuProps');

      expect((menuProps.contextualMenuItemAs as Function)(testProps)).toMatchSnapshot();
    });
  });

  describe('with additional classnames', () => {
    beforeEach(() => {
      component = shallow(
        <MenuButton ariaLabel={ariaLabel} menuItems={menuItems} className="TEST-ADDITIONAL-CLASSNAME" />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when an icon is passed', () => {
    describe('without iconSize', () => {
      beforeEach(() => {
        component = shallow(<MenuButton ariaLabel={ariaLabel} menuItems={menuItems} icon={Reply} />);
      });

      it('passes an icon method to fabric that returns an Icon with a default size of LARGE', () => {
        const onRenderIcon: (() => JSX.Element) = component.find('CustomizedActionButton').prop('onRenderIcon');
        expect(onRenderIcon()).toMatchSnapshot();
      });
    });

    describe('with iconSize', () => {
      beforeEach(() => {
        component = shallow(
          <MenuButton ariaLabel={ariaLabel} menuItems={menuItems} icon={Reply} iconSize={IconSize.XSMALL} />,
        );
      });

      it('passes an icon method to fabric that returns an Icon with the passed size', () => {
        const onRenderIcon: (() => JSX.Element) = component.find('CustomizedActionButton').prop('onRenderIcon');
        expect(onRenderIcon()).toMatchSnapshot();
      });
    });
  });

  describe('with all props', () => {
    beforeEach(() => {
      component = shallow(
        <MenuButton ariaLabel={ariaLabel} menuItems={menuItems} className="TEST-ADDITIONAL-CLASSNAME" icon={Reply} />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
