/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import MediaObject, { MediaObjectSize } from '../MediaObject';
import Avatar, { AvatarProps, AvatarSize } from '../Avatar';
import { getClassNames } from './SuggestionListItem.styles';

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
const selectedClass = `${baseClass} y-hc-selected`;
const getHighlightedName = (name: string, search: string, className: string) => {
  return name
    .split(new RegExp(`(${search})`, 'gi'))
    .filter(content => !!content)
    .map((content, index) => (
      <span key={index} className={search.toLowerCase() === content.toLowerCase() ? className : undefined}>
        {content}
      </span>
    ));
};

export default class SuggestionsListItem extends React.PureComponent<SuggestionsListItemProps> {
  public render() {
    const { name, searchText, description, className, isSelected } = this.props;
    const baseClassNames = isSelected ? selectedClass : baseClass;
    const classNames = getClassNames({ isSelected });
    const avatar = this.getAvatar();
    const title = getHighlightedName(name, searchText, classNames.highlight);
    // role=button added so that speech software knows that these are clickable targets.
    return (
      <div onMouseDown={this.onMouseDown} className={join([baseClassNames, className, classNames.root])} role="button">
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

  private onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const { onSelect, children, className, ...item } = this.props;
    e.preventDefault();
    this.props.onSelect(item.id);
  };
}
