/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import Block, { TextSize, TextColor } from '../Block';
import SuggestionsListItem from './SuggestionsListItem';
import Spinner from '../Spinner';
import { LayoutList, LayoutListItem } from '../LayoutList';
import { getClassNames, SuggestionsListClassNames } from './SuggestionsList.styles';
import { SuggestionItem } from './types';

export { SuggestionItem };

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

/**
 * A `SuggestionsList` displays a list of search results in a dropdown.
 */
export default class SuggestionsList extends React.PureComponent<SuggestionsListProps> {
  public render() {
    const { className, isLoading } = this.props;
    const hasResults = this.hasResults();
    const classNames = getClassNames({ isLoading, hasResults });

    return (
      <div className={join(['y-suggestions-list', 'y-hc-border', className, classNames.root])}>
        {this.getResults()}
        {this.getLoadingSpinner(classNames)}
        {this.getNoResults(classNames)}
      </div>
    );
  }

  private hasResults() {
    return this.props.groupedItems.length > 0;
  }

  private getLoadingSpinner(classNames: SuggestionsListClassNames) {
    const { isLoading, loadingText } = this.props;

    if (isLoading) {
      return (
        <div className={classNames.spinnerWrapper}>
          <Spinner text={loadingText} isCentered={true} />
        </div>
      );
    }

    return null;
  }

  private getNoResults(classNames: SuggestionsListClassNames) {
    const { isLoading, noResultsText } = this.props;

    if (!isLoading && !this.hasResults()) {
      return (
        <Block
          textAlign="center"
          textSize={TextSize.SMALL}
          textColor={TextColor.METADATA}
          className={classNames.noResultsWrapper}
        >
          {noResultsText}
        </Block>
      );
    }
  }

  private getResults() {
    if (this.hasResults()) {
      const { groupedItems } = this.props;

      return <LayoutList direction="vertical">{groupedItems.map(this.getGroup)}</LayoutList>;
    }

    return null;
  }

  private getGroup = (group: SuggestionItemGroup) => {
    return (
      <LayoutListItem key={group.title}>
        <LayoutList direction="vertical">{group.items.map(this.getItem)}</LayoutList>
      </LayoutListItem>
    );
  };

  private getItem = (item: SuggestionItem) => {
    const { searchText, selectedId, onItemSelected } = this.props;

    return (
      <LayoutListItem key={item.id}>
        <SuggestionsListItem
          item={item}
          searchText={searchText}
          isSelected={item.id === selectedId}
          onSelect={onItemSelected}
        />
      </LayoutListItem>
    );
  };
}
