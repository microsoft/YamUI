/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import MediaObject, { MediaObjectSize } from '../MediaObject';
import Avatar, { AvatarProps, AvatarSize } from '../Avatar';

import './SuggestionsListItem.css';

export type CustomizableAvatarProps = 'badgeContent' | 'badgeDescription' | 'borderType';

export interface SuggestionItem {
  id: string | number;
  imageUrl?: string;
  name: string;
  description?: string;
  avatarProps?: Pick<AvatarProps, CustomizableAvatarProps>;
}

export interface SuggestionsListItemProps extends SuggestionItem, NestableBaseComponentProps {
  searchText: string;
  isSelected: boolean;
  onSelect(id: string | number): void;
}

const baseClass = 'y-suggestions-list-item y-hc-select-on-hover y-hc-suppress-text-background';
const selectedClass = `${baseClass} y-suggestions-list-item--selected y-hc-selected`;
const matchHighlightClass = 'y-suggestions-list-item--match-highlight';

const getHighlightedName = (name: string, search: string) => {
  return name
    .split(new RegExp(`(${search})`, 'gi'))
    .filter(content => !!content)
    .map((content, index) => {
      const className =
        search.toLowerCase() === content.toLowerCase() ? matchHighlightClass : undefined;
      return (
        <span key={index} className={className}>
          {content}
        </span>
      );
    });
};

export default class SuggestionsListItem extends React.PureComponent<SuggestionsListItemProps, {}> {
  public render() {
    const { isSelected, name, searchText, description } = this.props;
    const avatar = this.getAvatar();
    const className = isSelected ? selectedClass : baseClass;
    const title = getHighlightedName(name, searchText);
    return (
      <div onMouseDown={this.onMouseDown} className={className}>
        <MediaObject
          size={MediaObjectSize.SMALL}
          imageContent={avatar}
          titleContent={title}
          metadataContent={description}
        />
      </div>
    );
  }

  private getAvatar() {
    const { avatarProps, name, imageUrl } = this.props;
    const props = {
      ...avatarProps,
      name,
      imageUrl,
      size: AvatarSize.SMALL,
    };
    return <Avatar {...props} />;
  }

  private onMouseDown = () => {
    const { onSelect, children, className, ...item } = this.props;
    this.props.onSelect(item.id);
  };
}
