/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import Avatar, { AvatarSize } from '../Avatar';
import Block, { TextSize, TextColor } from '../Block';
import Image, { BorderType, ImageFit } from '../Image';
import MediaObject, { MediaObjectSize } from '../MediaObject';
import { getClassNames } from './SuggestionsListItemContent.styles';
import { AvatarSuggestionItem, MediaSuggestionItem, SuggestionItem, SuggestionsListItemTemplate } from './types';

export { SuggestionItem, SuggestionsListItemTemplate };

export interface SuggestionsListItemContentProps extends BaseComponentProps {
  item: SuggestionItem;
  searchText?: string;
}

const getHighlightedName = (name: string, className: string, search?: string) => {
  if (search) {
    return name
      .split(new RegExp(`(${search})`, 'gi'))
      .filter(content => !!content)
      .map((content, index) => (
        <span key={index} className={search.toLowerCase() === content.toLowerCase() ? className : undefined}>
          {content}
        </span>
      ));
  }

  return name;
};

export default class SuggestionsListItemContent extends React.PureComponent<SuggestionsListItemContentProps> {
  public render() {
    const { className, item } = this.props;
    const classNames = getClassNames(item.template);

    return (
      <div className={join(['y-suggestionsListItem', className, classNames.root])}>
        {this.getContent(classNames.highlight)}
      </div>
    );
  }

  private getContent(highlightClassName: string) {
    const { item, searchText } = this.props;
    const title = getHighlightedName(item.name, highlightClassName, searchText);

    // Plain text, aligned left with no image
    if (item.template === SuggestionsListItemTemplate.TEXT) {
      return (
        <Block textSize={TextSize.MEDIUM_SUB} textColor={TextColor.PRIMARY}>
          {title}
        </Block>
      );
    }

    // Avatar on left, text with description on right
    const imageContent =
      item.template === SuggestionsListItemTemplate.AVATAR_ROUND ? this.getAvatar(item) : this.getImage(item);
    return (
      <MediaObject
        size={MediaObjectSize.SMALL}
        imageContent={imageContent}
        titleContent={title}
        metadataContent={item.description}
      />
    );
  }

  private getAvatar(item: AvatarSuggestionItem) {
    return <Avatar name={item.name} imageUrl={item.imageUrl} size={AvatarSize.SMALL} {...item.avatarProps} />;
  }

  private getImage(item: MediaSuggestionItem) {
    if (!item.imageUrl) {
      return null;
    }

    const borderType = item.template === SuggestionsListItemTemplate.MEDIA_SOFT ? BorderType.SOFT : undefined;
    return (
      <span aria-hidden={true}>
        <Image
          source={item.imageUrl}
          description=""
          block={true}
          height={32}
          width={32}
          borderType={borderType}
          imageFit={ImageFit.cover}
        />
      </span>
    );
  }
}
