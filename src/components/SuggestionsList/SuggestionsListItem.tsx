/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import MediaObject, { MediaObjectSize } from '../MediaObject';
import Avatar, { AvatarSize } from '../Avatar';
import './SuggestionsListItem.css';

export interface SuggestionItem {
  id: string | number;
  imageUrl?: string;
  name: string;
  description?: string;
}

export interface SuggestionsListItemProps extends SuggestionItem, NestableBaseComponentProps {
  searchText: string;
  isHovered: boolean;
  isSelected: boolean;
  onHover(id: string | number): void;
  onSelect(id: string | number): void;
}

const baseClass = 'y-suggestions-list-item';
const selectedClass = `${baseClass} y-suggestions-list-item--selected`;
const hoveredClass = `${baseClass} y-suggestions-list-item--hover`;
const highlightedClass = `y-suggestions-list-item--highlight`;

const getHighlightedName = (name: string, search: string) => {
  return name.split(new RegExp(`(${search})`, 'gi')).map((item: string, index: number) => {
    const className = search.toLowerCase() === item.toLowerCase() ? highlightedClass : undefined;
    return <span key={index} className={className}>{item}</span>;
  });
};

export default class SuggestionsListItem extends React.PureComponent<SuggestionsListItemProps, {}> {
  public render() {
    const { isSelected, isHovered, name, searchText, imageUrl, description } = this.props;
    const avatar = (
      <Avatar
        imageUrl={imageUrl}
        name={name}
        size={AvatarSize.SMALL}
      />);
    const className = isHovered ? hoveredClass : isSelected ? selectedClass : baseClass;
    const title = getHighlightedName(name, searchText);
    return (
      <div
        onMouseDown={this.onMouseDown}
        onMouseEnter={this.onMouseEnter}
        className={className}
      >
        <MediaObject
          size={MediaObjectSize.SMALL}
          imageContent={avatar}
          titleContent={title}
          metadataContent={description}
        />
      </div>);
  }

  private onMouseDown = () => {
    const { onSelect, children, className, ...item } = this.props;
    this.props.onSelect(item.id);
  }

  private onMouseEnter = () => this.props.onHover(this.props.id);
}
