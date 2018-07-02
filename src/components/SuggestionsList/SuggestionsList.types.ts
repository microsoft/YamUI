/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { AvatarProps } from '../Avatar';
import { BaseComponentProps } from '../../util/BaseComponent/props';

export enum SuggestionsListItemTemplate {
  TEXT = 'text',
  AVATAR_ROUND = 'mediaRound',
  MEDIA_SOFT = 'mediaSoft',
  MEDIA_SQUARE = 'mediaSquare',
}

export type CustomizableAvatarProps = 'badgeContent' | 'badgeDescription';

export interface BaseSuggestionItem {
  id: string | number;
  name: string;
}

export interface TextSuggestionItem extends BaseSuggestionItem {
  template: SuggestionsListItemTemplate.TEXT;
}

export interface MediaSuggestionItem extends BaseSuggestionItem {
  template: SuggestionsListItemTemplate.MEDIA_SOFT | SuggestionsListItemTemplate.MEDIA_SQUARE;
  imageUrl?: string;
  description?: string;
}

export interface AvatarSuggestionItem extends BaseSuggestionItem {
  template: SuggestionsListItemTemplate.AVATAR_ROUND;
  imageUrl?: string;
  avatarProps?: Pick<AvatarProps, CustomizableAvatarProps>;
  description?: string;
}

export type SuggestionItem = TextSuggestionItem | MediaSuggestionItem | AvatarSuggestionItem;

export interface SuggestionItemGroup {
  title: string;
  items: SuggestionItem[];
}

export interface SuggestionsListProps extends BaseComponentProps {
  /**
   * The groups of items to render.
   */
  groupedItems: SuggestionItemGroup[];

  /**
   * The active search that produced the current state.
   */
  searchText: string;

  /**
   * Text to show next to the loading spinner.
   */
  loadingText: string;

  /**
   * Text to show when the results are empty for the active search.
   */
  noResultsText: string;

  /**
   * Flag to indicate that a search is in flight
   * @default false
   */
  isLoading?: boolean;

  /**
   * The index of current keyboard selection.
   */
  selectedId?: string | number;

  /**
   * Called when an item in a group is selected by clicking.
   */
  onItemSelected(id: string | number): void;
}

export interface SuggestionsListItemProps extends BaseComponentProps {
  item: SuggestionItem;
  searchText: string;
  isSelected: boolean;
  onSelect(id: SuggestionItem['id']): void;
}
