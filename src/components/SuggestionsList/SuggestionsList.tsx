/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import SuggestionsListItem, { SuggestionItem } from './SuggestionsListItem';
import Spinner from '../Spinner';
import Text, { TextSize, TextColor } from '../Text';
import Callout from '../Callout';
import Block, { GutterSize } from '../Block';
import './SuggestionsList.css';

export interface SuggestionsListProps extends NestableBaseComponentProps {
  /**
   * Flag to indicate that a search is in flight
   * @default false
   */
  isLoading?: boolean;
  /**
   * Text to show next to the loading spinner.
   */
  loadingText: string;
  /**
   * Text to show when the results are empty for the active search.
   */
  noResultsText: string;
  /**
   * The groups of items to render.
   */
  groupedItems?: SuggestionItemGroupProps[];
  /**
   * The index of current keyboard selection.
   */
  selectedId?: string | number;
  /**
   * The active search that produced the current state.
   */
  searchText: string;
  /**
   * Called when an item in a group is selected by clicking.
   */
  onItemSelected(item: SuggestionItem): void;
  /**
   * The target that the Callout should try to position itself based on.
   */
  target: HTMLElement;
}

interface SuggestionsListWithResultsProps extends SuggestionsListProps {
  groupedItems: SuggestionItemGroupProps[];
}

export interface SuggestionItemGroupProps {
  title: string;
  items: SuggestionItem[];
}

export interface SuggestionsListState {
  hoveredId: string | number | null;
}

const hasResults = (props: SuggestionsListProps): props is SuggestionsListWithResultsProps => {
  return !!props.groupedItems && props.groupedItems.length > 0;
};

const withResultsClass = 'y-suggestions-list--with-results';
const withStatusClass = 'y-suggestions-list--with-status';

/**
 * A `SuggestionsList` displays a list of search results in a dropdown.
 */
export default class SuggestionsList
  extends React.PureComponent<SuggestionsListProps, SuggestionsListState> {

  public state: SuggestionsListState = { hoveredId: null };

  public render() {
    const status = this.getSearchStatus();
    const results = this.getGroupedResults();

    const classNames = ['y-suggestions-list'];
    if (status) {
      classNames.push(withStatusClass);
    }
    if (results) {
      classNames.push(withResultsClass);
    }

    return (
      <Callout target={this.props.target} className={classNames.join(' ')} isBeakVisible={false}>
        {results}
        {status}
      </Callout>);
  }

  private getGroupedResults() {
    if (!hasResults(this.props)) {
      return null;
    }
    return (
      <ul className="y-suggestions-list--results">
        {this.props.groupedItems.map(this.getGroupResults)}
      </ul>);
  }

  private getGroupResults = (group: SuggestionItemGroupProps) => {
    const items = group.items.map(this.getResultItem);
    return (
      <li key={group.title}>
        <ul onMouseOut={this.onMouseOut}>
          {items}
        </ul>
      </li>);
  }

  private getResultItem = (item: SuggestionItem) => {
    const { searchText, selectedId, onItemSelected } = this.props;
    const isHovered = item.id === this.state.hoveredId;
    const isSelected = item.id === selectedId;
    return (
      <li key={item.id}>
        <SuggestionsListItem
          searchText={searchText}
          isHovered={isHovered}
          isSelected={isSelected}
          onHover={this.onHover}
          onSelect={onItemSelected}
          {...item}
        />
      </li>);
  }

  private getSearchStatus() {
    return this.props.isLoading ? this.getLoading() : this.getNoResults();
  }

  private getLoading() {
    return <Spinner text={this.props.loadingText} className="y-suggestions-list--loading" />;
  }

  private getNoResults() {
    if (hasResults(this.props)) {
      return null;
    }
    return (
      <Block textAlign="center" padding={GutterSize.LARGE}>
        <Text size={TextSize.SMALL} color={TextColor.METADATA}>
          {this.props.noResultsText}
        </Text>
      </Block>);
  }

  private onHover = (hoveredId: string | number) => this.setState({ hoveredId });

  private onMouseOut = () => this.setState({ hoveredId: null });
}
