/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import autobind from 'core-decorators/lib/autobind';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import Block from '../Block';
import Clickable from '../Clickable';
import { TextSize } from '../Text';
import { FixedGridRow, FixedGridColumn, GutterSize } from '../FixedGrid';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { IconSize, BaseIcon } from '../Icon';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import './MenuButton.css';
import {
  IContextualMenuProps,
  IContextualMenuItem,
} from 'office-ui-fabric-react/lib/ContextualMenu';

const More = require('../Icon/icons/More').default;

initializeIcons();

export interface MenuButtonItem {
  key: string;
  text: string;
  isDisabled?: boolean;
  icon?: typeof BaseIcon;
  onClick?: () => void;
  href?: string;
}

export interface MenuButtonProps extends BaseComponentProps {
  ariaLabel: string;
  menuItems: MenuButtonItem[];
  className?: string;
  icon?: typeof BaseIcon;
  iconSize?: IconSize;
}

export default class MenuButton extends React.Component<MenuButtonProps, {}> {
  static defaultProps: Partial<MenuButtonProps> = {
    className: '',
    icon: More,
    iconSize: IconSize.SMALL,
  };

  public render() {
    const { className } = this.props;

    return (
      <div className={`y-menu-button ${className}`} style={{ minHeight: '200px' }}>
        <IconButton
          ariaLabel={this.props.ariaLabel}
          menuProps={this.getMenuProps()}
          menuIconProps={this.getMenuIconProps()}
          onRenderIcon={this.getIcon}
        />
      </div>
    );
  }

  @autobind
  private getIcon() {
    const { icon: Icon, iconSize } = this.props;

    return Icon ? <Icon size={iconSize} /> : null;
  }

  @autobind
  private getMenuIconProps() {
    return {
      iconName: '',
      style: { display: 'none' },
    };
  }

  @autobind
  private getMenuProps(): IContextualMenuProps {
    const menuItems: IContextualMenuItem[] = this.props.menuItems.map(item => ({
      key: item.key,
      name: item.text,
      onClick: item.onClick,
      disabled: item.isDisabled,
      href: item.href,
      onRender: this.getMenuItem,
      yamUiIcon: item.icon,
    }));

    return {
      items: menuItems,
    };
  }

  @autobind
  private getMenuItem(item: IContextualMenuItem) {
    if (!item) {
      return null;
    }

    return (
      <Clickable
        key={item.key}
        className="y-menu-button--item"
        onClick={item.onClick}
        unstyled={true}
        disabled={item.disabled}
      >
        <Block textSize={TextSize.MEDIUM_SUB}>{this.getMenuItemContent(item)}</Block>
      </Clickable>
    );
  }

  @autobind
  private getMenuItemContent(item: IContextualMenuItem) {
    const Icon = item && item.yamUiIcon;
    const iconNode = Icon && <Icon size={IconSize.MEDIUM} />;
    const textContent = <span>{item.name}</span>;

    if (iconNode) {
      return (
        <FixedGridRow gutterSize={GutterSize.SMALL}>
          <FixedGridColumn fixed={true} className="y-menu-button--item-icon">
            {iconNode}
          </FixedGridColumn>
          <FixedGridColumn>{textContent}</FixedGridColumn>
        </FixedGridRow>
      );
    }

    return <div>{textContent}</div>;
  }
}
