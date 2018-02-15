/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import autobind from 'core-decorators/lib/autobind';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { IconSize } from '../Icon';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import './MenuButton.css';
import { IContextualMenuProps, IContextualMenuItem } from 'office-ui-fabric-react/lib/ContextualMenu';

const More = require('../Icon/icons/More').default;

initializeIcons();

export interface MenuButtonItem {
  key: string;
  name: string;
  // icon?: typeof BaseIcon
  icon?: string;
}

export interface MenuButtonProps extends BaseComponentProps {
  menuItems: MenuButtonItem[];
  iconSize?: IconSize;
}

export default class MenuButton extends React.Component<MenuButtonProps, {}> {
  static defaultProps: Partial<MenuButtonProps> = {
    iconSize: IconSize.SMALL,
  };

  public render() {
    const menuProps: IContextualMenuProps = {
      items: this.getMenuItems(),
    };

    return (
      <div className="y-context-menu" style={{ minHeight: '200px' }}>
        <IconButton
          // tslint:disable-next-line:jsx-no-lambda
          onMenuClick={ev => {
            console.log(ev);
          }}
          menuProps={menuProps}
          menuIconProps={{
            iconName: '',
            style: { display: 'none' },
          }}
          onRenderIcon={this.getIcon}
        />
      </div>
    );
  }

  @autobind
  private getIcon() {
    return <More size={this.props.iconSize} />;
  }

  @autobind
  private getMenuItems(): IContextualMenuItem[] {
    const { menuItems } = this.props;

    return menuItems.map((item) => ({
      key: item.key,
      name: item.name,
      icon: item.icon,
    }));
  }
}
