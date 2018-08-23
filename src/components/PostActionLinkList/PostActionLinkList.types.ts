/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { BaseIcon } from '../Icon';

export interface PostActionLinkListProps extends BaseComponentProps {
  items?: PostActionLinkListItem[];
  maxVisibleItemCount?: number;
  overflowMenuAriaLabel: string;
}

export type PostActionLinkListItem = {
  icon: typeof BaseIcon;
  text: string;
  unlinkedText?: string;
  onClick: () => React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
  key: string;
  ariaLabel: string;
};
