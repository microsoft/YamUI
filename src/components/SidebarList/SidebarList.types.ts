/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { BaseIllustration } from '../Illustration';
import { BaseComponentProps } from '../../util/BaseComponent/props';

export type SidebarListSize = 'small' | 'medium' | 'large';

export interface BaseSidebarListItem {
  /**
   * A unique key for the item.
   */
  key: string;

  /**
   * The visible title text.
   */
  title: string;

  /**
   * Metadata text displayed under the title, not displayed at small size.
   */
  description?: string;
}
export interface SidebarListIllustrationItem extends BaseSidebarListItem {
  /**
   * A YamUI Illustration component class. You are responsible for importing and providing the correct size.
   */
  illustration: typeof BaseIllustration;
}
export interface SidebarListImageItem extends BaseSidebarListItem {
  /**
   * Custom image JSX. It should fit the list item's pixel width at the given size, or fill 100% of its container width.
   */
  imageContent: React.ReactNode;
}
export type SidebarListItemWithGraphic = SidebarListIllustrationItem | SidebarListImageItem;

export type SidebarListClickableItem = SidebarListItemWithGraphic & {
  /**
   * Callback to be triggered when the item is clicked/invoked.
   */
  onClick(key: BaseSidebarListItem['key']): void;
};
export type SidebarListLinkItem = SidebarListItemWithGraphic & {
  /**
   * The URL this item links to.
   */
  href: string;

  /**
   * If true, opens the link securely in a new window.
   */
  newWindow?: boolean;
};
export type SidebarListItem = SidebarListClickableItem | SidebarListLinkItem;

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

export interface SidebarListItemProps {
  item: SidebarListItem;
  size: SidebarListProps['size'];
}
