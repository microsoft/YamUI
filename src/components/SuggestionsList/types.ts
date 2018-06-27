/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */

import { AvatarProps } from '../Avatar';

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
