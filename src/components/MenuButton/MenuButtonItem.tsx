/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { IconSize } from '../Icon';
import Block, { TextColor } from '../Block';
import { TextSize } from '../Text';
import { FixedGridRow, FixedGridColumn, GutterSize } from '../FixedGrid';
import {
  IContextualMenuItemProps,
  ContextualMenuItemType,
} from 'office-ui-fabric-react/lib/ContextualMenu';

const getClasses = (isHeader: boolean) => {
  const classes = ['y-menu-button--item'];
  if (isHeader) {
    classes.push('y-menu-button--item-header');
  }
  return join(classes);
};

const MenuButtonItem: React.StatelessComponent<IContextualMenuItemProps> = (
  props: IContextualMenuItemProps,
) => {
  const { data, name, itemType, disabled } = props.item;

  const Icon = data && data.yamUIIcon;
  const iconColumn = Icon ? (
    <FixedGridColumn fixed={true} className="y-menu-button--item-icon">
      <Icon size={IconSize.MEDIUM} block={true} />
    </FixedGridColumn>
  ) : null;

  const isHeader = itemType === ContextualMenuItemType.Header;

  let color = TextColor.SECONDARY;
  if (isHeader) {
    color = TextColor.PRIMARY;
  } else if (disabled) {
    color = TextColor.DISABLED;
  }

  const size = isHeader ? TextSize.SMALL : TextSize.MEDIUM_SUB;

  return (
    <Block textColor={color} textSize={size} className={getClasses(isHeader)}>
      <FixedGridRow gutterSize={GutterSize.SMALL}>
        {iconColumn}
        <FixedGridColumn className="y-menu-button--item-text">{name}</FixedGridColumn>
      </FixedGridRow>
    </Block>
  );
};

export default MenuButtonItem;
