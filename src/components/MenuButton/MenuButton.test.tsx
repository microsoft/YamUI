/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import {
  IContextualMenuProps,
  IContextualMenuItemProps,
} from 'office-ui-fabric-react/lib/ContextualMenu';
import MenuButton, { MenuButtonProps, IMenuButtonItem } from './MenuButton';
import MenuButtonItem from './MenuButtonItem';
import { IconSize } from '../Icon';
const Reply = require('../Icon/icons/Reply').default;
const More = require('../Icon/icons/More').default;

describe('<MenuButton />', () => {
  let component: ShallowWrapper<MenuButtonProps, {}>;
  const ariaLabel = 'testAria';
  let menuItems: IMenuButtonItem[];

  beforeEach(() => {
    menuItems = [
      {
        key: 'test1',
        text: 'test',
      },
      {
        key: 'test2',
        text: 'test',
      },
    ];
  });

  describe('with default options', () => {
    let testProps: IContextualMenuItemProps;

    beforeEach(() => {
      testProps = {} as IContextualMenuItemProps;
      component = shallow(<MenuButton ariaLabel={ariaLabel} menuItems={menuItems} />);
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });

    it('passes an icon method to fabric that defaults to the More icon with size small', () => {
      const onRenderIcon = component
        .find('CustomizedIconButton')
        .prop('onRenderIcon') as () => JSX.Element;
      expect(onRenderIcon()).toEqual(<More size={IconSize.SMALL} />);
    });

    it('passes a menu icon method to fabric that returns an Icon with the passed size', () => {
      const onRenderMenuIcon = component
        .find('CustomizedIconButton')
        .prop('onRenderMenuIcon') as () => JSX.Element;
      expect(onRenderMenuIcon()).toBeNull();
    });

    it('passes contextualMenuItemAs method to fabric that returns a MenuButtonItem', () => {
      const menuProps = component
        .find('CustomizedIconButton')
        .prop('menuProps') as IContextualMenuProps;

      expect((menuProps.contextualMenuItemAs as Function)(testProps)).toEqual(
        <MenuButtonItem {...testProps} />,
      );
    });
  });

  describe('with additional classnames', () => {
    beforeEach(() => {
      component = shallow(
        <MenuButton
          ariaLabel={ariaLabel}
          menuItems={menuItems}
          className="TEST-ADDITIONAL-CLASSNAME"
        />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('when an icon is passed', () => {
    describe('without iconSize', () => {
      beforeEach(() => {
        component = shallow(
          <MenuButton ariaLabel={ariaLabel} menuItems={menuItems} icon={Reply} />,
        );
      });

      it('passes an icon method to fabric that returns an Icon with a default size of SMALL', () => {
        const onRenderIcon = component
          .find('CustomizedIconButton')
          .prop('onRenderIcon') as () => JSX.Element;
        expect(onRenderIcon()).toEqual(<Reply size={IconSize.SMALL} />);
      });
    });

    describe('with iconSize', () => {
      beforeEach(() => {
        component = shallow(
          <MenuButton
            ariaLabel={ariaLabel}
            menuItems={menuItems}
            icon={Reply}
            iconSize={IconSize.XXLARGE}
          />,
        );
      });

      it('passes an icon method to fabric that returns an Icon with the passed size', () => {
        const onRenderIcon = component
          .find('CustomizedIconButton')
          .prop('onRenderIcon') as () => JSX.Element;
        expect(onRenderIcon()).toEqual(<Reply size={IconSize.XXLARGE} />);
      });
    });
  });

  describe('with all props', () => {
    beforeEach(() => {
      component = shallow(
        <MenuButton
          ariaLabel={ariaLabel}
          menuItems={menuItems}
          className="TEST-ADDITIONAL-CLASSNAME"
          icon={Reply}
          iconSize={IconSize.XXLARGE}
        />,
      );
    });

    it('matches its snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
