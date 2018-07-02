/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { LayoutList } from '../LayoutList';
import SidebarListItemView from './SidebarListItem';
import { SidebarListItem, SidebarListProps } from './SidebarList.types';

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
