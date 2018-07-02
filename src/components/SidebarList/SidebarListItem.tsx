/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';
import { join } from '../../util/classNames';
import Clickable from '../Clickable';
import { LayoutListItem } from '../LayoutList';
import MediaObject, { MediaObjectSize } from '../MediaObject';
import NavigationLink from '../NavigationLink';
import {
  SidebarListItem,
  SidebarListItemProps,
  SidebarListLinkItem,
  SidebarListIllustrationItem,
  SidebarListClickableItem,
  BaseSidebarListItem,
} from './SidebarList.types';
import { getClassNames } from './SidebarListItem.styles';

export { SidebarListItem };

const getIllustrationSize = (size: SidebarListItemProps['size']) => (size === 'large' ? 32 : 24);
const getMediaObjectSize = (size: SidebarListItemProps['size']) =>
  size === 'large' ? MediaObjectSize.SMALL : MediaObjectSize.XSMALL;

const isLinkItem = (item: SidebarListItem): item is SidebarListLinkItem => {
  return (item as SidebarListLinkItem).href !== undefined;
};
const isIllustrationItem = (item: BaseSidebarListItem): item is SidebarListIllustrationItem => {
  return (item as SidebarListIllustrationItem).illustration !== undefined;
};

const getImageContent = (item: SidebarListItem, size: SidebarListItemProps['size']) => {
  if (isIllustrationItem(item)) {
    const Illustration = item.illustration;
    return <Illustration size={getIllustrationSize(size)} block={true} />;
  }

  return item.imageContent;
};

export class SidebarListItemView extends React.Component<SidebarListItemProps & CustomizableComponentProps> {
  public render() {
    const { size, theme = defaultTheme } = this.props;
    const { root, content } = getClassNames({ size, theme });
    return (
      <LayoutListItem>
        <div className={join([root, 'y-sidebarList--item'])}>{this.getItemContent(content)}</div>
      </LayoutListItem>
    );
  }

  private getItemContent = (contentClassName: string) => {
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

@customizable('SidebarListItemView', ['theme'])
export default class CustomizableSidebarListItemView extends SidebarListItemView {}
