/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { getClassNames } from './SuggestionsListItem.styles';
import SuggestionsListItemContent from './SuggestionsListItemContent';
import { SuggestionItem } from './types';

export interface SuggestionsListItemProps extends BaseComponentProps {
  item: SuggestionItem;
  searchText: string;
  isSelected: boolean;
  onSelect(id: SuggestionItem['id']): void;
}

const baseClass = 'y-suggestionsListItem y-hc-select-on-hover y-hc-suppress-text-background';
const selectedClass = `${baseClass} y-hc-selected`;

export default class SuggestionsListItem extends React.PureComponent<SuggestionsListItemProps> {
  public render() {
    const { className, isSelected, item, searchText } = this.props;
    const baseClassNames = isSelected ? selectedClass : baseClass;
    const classNames = getClassNames({ isSelected });

    // role=button added so that speech software knows that these are clickable targets.
    return (
      <div onMouseDown={this.onMouseDown} className={join([baseClassNames, className, classNames.root])} role="button">
        <SuggestionsListItemContent item={item} searchText={searchText} />
      </div>
    );
  }

  private onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const { item, onSelect } = this.props;
    e.preventDefault();
    onSelect(item.id);
  };
}
