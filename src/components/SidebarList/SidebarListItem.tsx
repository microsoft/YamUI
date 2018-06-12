/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import Clickable from '../Clickable';
import { LayoutListItem } from '../LayoutList';
import MediaObject, { MediaObjectSize } from '../MediaObject';
import NavigationLink from '../NavigationLink';
import { SidebarListProps } from './SidebarList';
import {
  SidebarListItem,
  SidebarListLinkItem,
  SidebarListIllustrationItem,
  SidebarListImageItem,
  SidebarListClickableItem,
} from './types';
import { getClassNames, SidebarListItemClassNames } from './SidebarListItem.styles';

export { SidebarListItem };

const getIllustrationSize = (size: SidebarListItemProps['size']) => (size === 'large' ? 32 : 24);
const getMediaObjectSize = (size: SidebarListItemProps['size']) =>
  size === 'large' ? MediaObjectSize.SMALL : MediaObjectSize.XSMALL;

const isLinkItem = (item: SidebarListItem): item is SidebarListLinkItem => {
  return (item as SidebarListLinkItem).href !== undefined;
};

const getImageContent = (item: SidebarListItem, size: SidebarListItemProps['size']) => {
  if ((item as SidebarListIllustrationItem).illustration) {
    const Illustration = (item as SidebarListIllustrationItem).illustration;
    return <Illustration size={getIllustrationSize(size)} block={true} />;
  }

  return (item as SidebarListImageItem).imageContent;
};

export interface SidebarListItemProps {
  item: SidebarListItem;
  size: SidebarListProps['size'];
}

export default class SidebarListItemView extends React.Component<SidebarListItemProps> {
  public render() {
    const { root, content } = getClassNames(this.props.size);
    return (
      <LayoutListItem>
        <div className={join([root, 'y-sidebarList--item'])}>{this.getItemContent(content)}</div>
      </LayoutListItem>
    );
  }

  private getItemContent = (contentClassName: SidebarListItemClassNames['content']) => {
    const { item, size } = this.props;

    const content = (
      <div className={contentClassName}>
        <MediaObject
          size={getMediaObjectSize(size)}
          imageContent={getImageContent(item, size)}
          titleContent={item.title}
          metadataContent={item.description}
        />
      </div>
    );

    if (isLinkItem(item)) {
      return (
        <NavigationLink href={item.href} newWindow={item.newWindow} block={true} unstyled={true}>
          {content}
        </NavigationLink>
      );
    }

    return (
      <Clickable onClick={this.onClick} block={true} unstyled={true}>
        {content}
      </Clickable>
    );
  };

  private onClick = () => {
    (this.props.item as SidebarListClickableItem).onClick(this.props.item.key);
  };
}
