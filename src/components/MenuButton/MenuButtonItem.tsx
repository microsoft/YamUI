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
  const { data, name, itemType, href } = props.item;
  const textContent = <span>{name}</span>;
  const isHeader = itemType === ContextualMenuItemType.Header;

  const Icon = data && data.yamUiIcon;
  const iconColumn = Icon ? (
    <FixedGridColumn fixed={true} className="y-menu-button--item-icon">
      <Icon size={IconSize.MEDIUM} />
    </FixedGridColumn>
  ) : null;

  if (isHeader) {
    return (
      <Block className="y-menu-button--item y-menu-button--header" textSize={TextSize.SMALL}>
        {name}
      </Block>
    );
  }

  return (
    <Block
      textSize={TextSize.MEDIUM_SUB}
      className={`y-menu-button--item ${href ? 'y-menu-button--item-link-override' : ''}`}
    >
      <FixedGridRow gutterSize={GutterSize.SMALL}>
        {iconColumn}
        <FixedGridColumn className="y-menu-button--item-text">{textContent}</FixedGridColumn>
      </FixedGridRow>
    </Block>
  );
};

export default MenuButtonItem;
