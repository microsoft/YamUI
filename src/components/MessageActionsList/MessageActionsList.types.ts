/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { BaseIcon } from '../Icon';

export interface PostActionLinkListProps extends BaseComponentProps {
  /**
   * Items to show in the list.
   */
  items: PostActionLinkListItem[];

  /**
   * Aria label for the overflow menu button.
   */
  overflowMenuAriaLabel: string;

  /**
   * The maximum number of items to display in the list.  The remaining will show in the menuButton.
   */
  maxVisibleItemCount?: number;
}

export type PostActionLinkListItem = {
  icon: typeof BaseIcon;
  text: string;
  ariaLabel: string;
  unlinkedText?: string;
  unlinkedTextAriaLabel?: string;
  key: string;
  onClick(): React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
};
