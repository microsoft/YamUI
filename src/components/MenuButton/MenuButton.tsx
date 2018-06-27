/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import {
  IContextualMenuProps,
  IContextualMenuItem,
  IContextualMenuItemProps,
  ContextualMenuItemType,
} from 'office-ui-fabric-react/lib/ContextualMenu';
import { join } from '../../util/classNames';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { semanticColors } from '../../util/colors';
import { IconButton, IButtonStyles } from 'office-ui-fabric-react/lib/Button';
import { IconSize, BaseIcon } from '../Icon';
import MoreIcon from '../Icon/icons/More';
import MenuButtonItem from './MenuButtonItem';
import { MenuItemType } from './types';
import { getCalloutStyles } from './MenuButton.styles';
import './MenuButton.css';

export { MenuItemType };

const renderEmptyIcon = () => null;

export interface MenuButtonItem {
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
   * YamUI Icon to display in the item content. Default is no icon.
   */
  icon?: typeof BaseIcon;
}

export interface MenuButtonProps extends BaseComponentProps {
  /**
   * Aria label for the MenuButton.
   */
  ariaLabel: string;

  /**
   * Menu items to show in the menu.
   */
  menuItems: MenuButtonItem[];

  /**
   * YamUI Icon to display as the click target. Default is the 'More' icon.
   * @default MoreIcon
   */
  icon?: typeof BaseIcon;

  /**
   * Size of the icon
   * @default IconSize.LARGE
   */
  iconSize?: IconSize;
}

export default class MenuButton extends React.Component<MenuButtonProps> {
  public static defaultProps: Partial<MenuButtonProps> = {
    iconSize: IconSize.LARGE,
  };

  public render() {
    return (
      <IconButton
        styles={this.getStyles()}
        ariaLabel={this.props.ariaLabel}
        menuProps={this.getMenuProps()}
        onRenderIcon={this.getIcon}
        onRenderMenuIcon={renderEmptyIcon}
        className={this.getButtonClassNames()}
      />
    );
  }

  private getButtonClassNames() {
    const { iconSize, className } = this.props;
    return join(['y-menu-button', `y-menu-button--${iconSize}`, className]);
  }

  private getIcon = () => {
    const { icon, iconSize } = this.props;
    const Icon = icon || MoreIcon;

    return <Icon size={iconSize} block={true} />;
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
        className: 'y-menu-button--callout',
        styles: getCalloutStyles,
      },
    };
  }

  private getMenuItemContent(props: IContextualMenuItemProps) {
    return <MenuButtonItem {...props} />;
  }

  private getStyles = (): IButtonStyles => {
    return {
      root: {
        border: 0,
        padding: 0,
        opacity: 0.7,
        width: `${this.props.iconSize}px`,
        height: `${this.props.iconSize}px`,
        color: semanticColors.buttonText,
      },
      rootHovered: {
        backgroundColor: 'transparent',
        color: semanticColors.link,
        opacity: 1,
      },
      rootPressed: {
        backgroundColor: 'transparent',
        color: semanticColors.link,
        opacity: 1,
      },
      rootExpanded: {
        color: semanticColors.link,
        opacity: 1,
      },
    };
  };
}
