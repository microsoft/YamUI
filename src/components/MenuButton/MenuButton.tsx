/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import autobind from 'core-decorators/lib/autobind';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { IconSize, BaseIcon } from '../Icon';
import MenuButtonItem from './MenuButtonItem';
import {
  IContextualMenuProps,
  IContextualMenuItem,
  IContextualMenuItemProps,
  ContextualMenuItemType,
} from 'office-ui-fabric-react/lib/ContextualMenu';
import { MenuItemType } from './enums';
import './MenuButton.css';

const More = require('../Icon/icons/More').default;

export interface IMenuButtonItem {
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
  menuItems: IMenuButtonItem[];
  className?: string;
  icon?: typeof BaseIcon;
  iconSize?: IconSize;
}

export default class MenuButton extends React.Component<MenuButtonProps, {}> {
  static defaultProps: Partial<MenuButtonProps> = {
    className: '',
    iconSize: IconSize.SMALL,
  };

  public render() {
    const { className } = this.props;

    return (
      <div className={`y-menu-button ${className}`}>
        <IconButton
          ariaLabel={this.props.ariaLabel}
          menuProps={this.getMenuProps()}
          onRenderIcon={this.getIcon}
          onRenderMenuIcon={this.renderMenuIcon}
        />
      </div>
    );
  }

  private renderMenuIcon() {
    return null;
  }

  @autobind
  private getIcon() {
    const { icon, iconSize } = this.props;
    const Icon = icon ? icon : More;

    return <Icon size={iconSize} />;
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
        yamUiIcon: item.icon,
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
