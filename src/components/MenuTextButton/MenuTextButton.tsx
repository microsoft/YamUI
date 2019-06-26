/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import {
  IContextualMenuProps,
  IContextualMenuItem,
  IContextualMenuItemProps,
  ContextualMenuItemType,
} from 'office-ui-fabric-react/lib/ContextualMenu';
import { join } from '../../util/classNames';
import { CommandButton, IButtonStyles } from 'office-ui-fabric-react/lib/Button';
import { IconSize, BaseIcon } from '../Icon';
import { BaseIllustration } from '../Illustration';
import MoreIcon from '../Icon/icons/More';
import MenuButtonItem from './MenuTextButtonItem';
import { MenuItemType } from '../MenuButton/types';
import { BaseComponentProps } from '../../util/BaseComponent/props';

export { MenuItemType };

const renderEmptyIcon = () => null;

export interface MenuTextButtonItem {
  /**
   * Unique key for this item.
   */
  key: string;

  /**
   * Text to display in the menu item.
   */
  text: string;

  /**
   * Type of menu item:
   *  Normal: Regular item
   *  Header: Header item
   *  Divider: Line divider item
   */
  type?: MenuItemType;

  /**
   * If item is disabled
   */
  isDisabled?: boolean;

  /**
   * On click method for this item.
   */
  onClick?: ((ev?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void);

  /**
   * Href for a link. This will turn the item into a hyperlink that looks like a regular item.
   */
  href?: string;

  /**
   * Whether the link should open in a new window. This will do nothing if href isn't passed.
   */
  newWindow?: boolean;

  /**
   * YamUI Illustration to display in the item content. Default is no illustration.
   */
  icon?: typeof BaseIllustration;
}

export interface MenuTextButtonProps extends BaseComponentProps {
  /**
   * Aria label for the MenuButton.
   */
  ariaLabel: string;

  /**
   * Menu items to show in the menu.
   */
  menuItems: MenuTextButtonItem[];

  /**
   * YamUI Icon to display as the click target. Default is the 'More' icon.
   * @default MoreIcon
   */
  icon?: typeof BaseIcon;

  /**
   * Size of the icon
   * @default IconSize.MEDIUM
   */
  iconSize?: IconSize;

  /**
   * Text to display in the menu button.
   */
  text?: string;
}

export default class MenuTextButton extends React.Component<MenuTextButtonProps> {
  public static defaultProps: Partial<MenuTextButtonProps> = {
    iconSize: IconSize.MEDIUM,
  };

  public render() {
    return (
      <CommandButton
        styles={this.getStyles()}
        ariaLabel={this.props.ariaLabel}
        menuProps={this.getMenuProps()}
        onRenderIcon={this.getIcon}
        onRenderMenuIcon={renderEmptyIcon}
        className={this.getButtonClassNames()}
        text={this.props.text}
      />
    );
  }

  private getButtonClassNames() {
    const { iconSize, className } = this.props;
    return join(['y-menu-text-button', `y-menu-text-button--${iconSize}`, className]);
  }

  private getIcon = () => {
    const { icon, iconSize } = this.props;
    const Icon = icon || MoreIcon;

    return <Icon size={iconSize} />;
  };

  private getMenuProps(): IContextualMenuProps {
    const menuItems: IContextualMenuItem[] = this.props.menuItems.map(item => ({
      key: item.key,
      name: item.text,
      itemType: item.type as ContextualMenuItemType | undefined,
      onClick: item.onClick,
      disabled: item.isDisabled,
      href: item.href,
      target: item.newWindow ? '_blank' : undefined,
      data: {
        yamUIIcon: item.icon,
      },
    }));

    return {
      items: menuItems,
      contextualMenuItemAs: this.getMenuItemContent,
      calloutProps: {
        className: 'y-menu-text-button--callout',
      },
    };
  }

  private getMenuItemContent(props: IContextualMenuItemProps) {
    return <MenuButtonItem {...props} />;
  }

  private getStyles = (): IButtonStyles => {
    return {
      root: {
        padding: 15,
        borderColor: '#dde0e6',
        borderRadius: 2,
        color: '#386cbb',
        height: 36,
        fontSize: 14,
        fontWeight: 600,
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
      },
      rootHovered: {
        borderColor: '#9ac3ff',
      },
    };
  };
}
