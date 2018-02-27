/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import autobind from 'core-decorators/lib/autobind';
import {
  IContextualMenuProps,
  IContextualMenuItem,
  IContextualMenuItemProps,
  ContextualMenuItemType,
} from 'office-ui-fabric-react/lib/ContextualMenu';
import { join } from '../../util/classNames';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { IconSize, BaseIcon } from '../Icon';
import MenuButtonItem from './MenuButtonItem';
import { MenuItemType } from './enums';
import './MenuButton.css';

export { MenuItemType } from './enums';

const MoreIcon = require('../Icon/icons/More').default;

const renderEmptyIcon = () => null;

export interface MenuButtonItem {
  key: string;
  text: string;
  type?: MenuItemType;
  isDisabled?: boolean;
  onClick?: (ev?: React.MouseEvent<HTMLElement>) => void;
  href?: string;
  icon?: typeof BaseIcon;
}

export interface MenuButtonProps extends BaseComponentProps {
  ariaLabel: string;
  menuItems: MenuButtonItem[];
  className?: string;
  icon?: typeof BaseIcon;
}

export default class MenuButton extends React.Component<MenuButtonProps, {}> {
  public render() {
    return (
      <IconButton
        ariaLabel={this.props.ariaLabel}
        menuProps={this.getMenuProps()}
        onRenderIcon={this.getIcon}
        onRenderMenuIcon={renderEmptyIcon}
        className={join(['y-menu-button', this.props.className])}
      />
    );
  }

  @autobind
  private getIcon() {
    const { icon } = this.props;
    const Icon = icon || MoreIcon;

    return <Icon size={IconSize.LARGE} block={true} />;
  }

  @autobind
  private getMenuProps(): IContextualMenuProps {
    const menuItems: IContextualMenuItem[] = this.props.menuItems.map(item => ({
      key: item.key,
      name: item.text,
      itemType: item.type as ContextualMenuItemType | undefined,
      onClick: item.onClick,
      disabled: item.isDisabled,
      href: item.href,
      data: {
        yamUIIcon: item.icon,
      },
    }));

    return {
      items: menuItems,
      contextualMenuItemAs: this.getMenuItemContent,
      calloutProps: {
        className: 'y-menu-button--callout',
      },
    };
  }

  private getMenuItemContent(props: IContextualMenuItemProps) {
    return <MenuButtonItem {...props} className="y-menu-button" />;
  }
}
