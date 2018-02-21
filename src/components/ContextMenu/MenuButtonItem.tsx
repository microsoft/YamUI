/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { IconSize, BaseIcon } from '../Icon';
import Block from '../Block';
import { TextSize } from '../Text';
import { FixedGridRow, FixedGridColumn, GutterSize } from '../FixedGrid';
import { IContextualMenuItemProps } from 'office-ui-fabric-react/lib/ContextualMenu';

const MenuButtonItem: React.StatelessComponent<IContextualMenuItemProps> = (
  props: IContextualMenuItemProps,
) => {
  const { data, text } = props;
  const Icon = data && data.yamUiIcon;
  const iconNode = Icon && <Icon size={IconSize.MEDIUM} />;
  const textContent = <span>{text}</span>;

  if (iconNode) {
    return (
      <Block textSize={TextSize.MEDIUM_SUB}>
        <FixedGridRow gutterSize={GutterSize.SMALL}>
          <FixedGridColumn fixed={true} className="y-menu-button--item-icon">
            {iconNode}
          </FixedGridColumn>
          <FixedGridColumn>{textContent}</FixedGridColumn>
        </FixedGridRow>
      </Block>
    );
  }

  return <div>{textContent}</div>;
};

export default MenuButtonItem;
