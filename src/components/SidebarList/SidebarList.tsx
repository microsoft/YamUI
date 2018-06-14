/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { LayoutList } from '../LayoutList';
import SidebarListItemView from './SidebarListItem';
import { SidebarListItem, SidebarListSize } from './types';

export interface SidebarListProps extends BaseComponentProps {
  /**
   * A list of item objects which will be rendered as list items.
   */
  items: SidebarListItem[];

  /**
   * "small" will display the title next to a 24px image and compact vertical padding.
   * "medium" will display the title next to a 24px image and slightly more vertical padding.
   * "large" will display the title and description next to a 32px image.
   */
  size: SidebarListSize;

  /**
   * Called when an item is clicked/invoked.
   */
  onClick?(key: SidebarListItem['key']): void;
}

/**
 * SidebarList renders a list of MediaObjects wrapped in either a link or button. This component should be used to list
 * relevant metadata like related groups, pinned documents, group memberships, etc.
 */
export default class SidebarList extends React.Component<SidebarListProps> {
  public render() {
    return (
      <LayoutList direction="vertical" className={join(['y-sidebarList', this.props.className])}>
        {this.props.items.map(this.getItem)}
      </LayoutList>
    );
  }

  private getItem = (item: SidebarListItem) => {
    return <SidebarListItemView item={item} size={this.props.size} key={item.key} />;
  };
}
