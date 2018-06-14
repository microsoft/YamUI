/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { BaseIllustration } from '../Illustration';

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
