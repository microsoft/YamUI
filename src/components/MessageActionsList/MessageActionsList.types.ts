/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { ClickableActionLinkProps, NavigationActionLinkProps } from '../ActionLink';
import { MenuButtonItem } from '../MenuButton';

export interface MessageActionsListProps extends BaseComponentProps {
  /**
   * Items to show in the list.
   */
  items: MessageActionsListItem[];

  /**
   * Aria label for the overflow menu button.
   */
  overflowMenuAriaLabel: string;

  /**
   * The maximum number of items to display in the list.  The remaining will show in the menuButton.
   */
  maxVisibleItemCount?: number;
}

export interface MessageActionsListLinkItem extends NavigationActionLinkProps, MenuButtonItem {
  unlinkedText?: string;
  unlinkedTextAriaLabel?: string;
  href: NavigationActionLinkProps['href'];
  icon: NavigationActionLinkProps['icon'];
}

export interface MessageActionsListClickableItem extends ClickableActionLinkProps, MenuButtonItem {
  unlinkedText?: string;
  unlinkedTextAriaLabel?: string;
  icon: ClickableActionLinkProps['icon'];
}

export type MessageActionsListItem = MessageActionsListLinkItem | MessageActionsListClickableItem;
