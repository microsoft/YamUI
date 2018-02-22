/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { IconSize } from '../Icon';
import Block from '../Block';
import { TextSize } from '../Text';
import { FixedGridRow, FixedGridColumn, GutterSize } from '../FixedGrid';
import {
  IContextualMenuItemProps,
  ContextualMenuItemType,
} from 'office-ui-fabric-react/lib/ContextualMenu';

const MenuButtonItem: React.StatelessComponent<IContextualMenuItemProps> = (
  props: IContextualMenuItemProps,
) => {
  const { data, name, itemType } = props.item;
  const Icon = data && data.yamUiIcon;
  const iconNode = Icon ? <Icon size={IconSize.MEDIUM} /> : null;
  const textContent = <span>{name}</span>;
  const isHeader = itemType === ContextualMenuItemType.Header;

  if (isHeader) {
    return (
      <Block className="y-menu-button--item y-menu-button--header" textSize={TextSize.SMALL}>
        {name}
      </Block>
    );
  }

  if (iconNode) {
    return (
      <Block textSize={TextSize.MEDIUM_SUB}>
        <FixedGridRow gutterSize={GutterSize.SMALL} className="y-menu-button--item">
          <FixedGridColumn fixed={true} className="y-menu-button--item-icon">
            {iconNode}
          </FixedGridColumn>
          <FixedGridColumn className="y-menu-button--item-text">{textContent}</FixedGridColumn>
        </FixedGridRow>
      </Block>
    );
  }

  return <div>{textContent}</div>;
};

export default MenuButtonItem;
