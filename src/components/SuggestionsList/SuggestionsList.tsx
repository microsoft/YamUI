/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import SuggestionsListItem, { SuggestionItem } from './SuggestionsListItem';
import Spinner from '../Spinner';
import Text, { TextSize, TextColor } from '../Text';
import Block, { GutterSize } from '../Block';
import { LayoutList, LayoutListItem } from '../LayoutList';
import { getClassNames } from './SuggestionsList.styles';
export interface SuggestionsListProps extends NestableBaseComponentProps {
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
   * The groups of items to render.
   */
  groupedItems?: SuggestionItemGroupProps[];
  /**
   * The index of current keyboard selection.
   */
  selectedId?: string | number;
  /**
   * Called when an item in a group is selected by clicking.
   */
  onItemSelected(id: string | number): void;
}

export interface SuggestionItemGroupProps {
  title: string;
  items: SuggestionItem[];
}

/**
 * A `SuggestionsList` displays a list of search results in a dropdown.
 */
export default class SuggestionsList extends React.PureComponent<SuggestionsListProps> {
  public render() {
    const {
      className,
      searchText,
      selectedId,
      onItemSelected,
      isLoading,
      loadingText,
      noResultsText,
      groupedItems = [],
    } = this.props;
    const hasResults = groupedItems.length > 0;
    const classNames = getClassNames({ isLoading, hasResults });

    return (
      <div className={join(['y-suggestions-list', 'y-hc-border', className, classNames.root])}>
        {hasResults && (
          <LayoutList direction="vertical">
            {groupedItems.map((group: SuggestionItemGroupProps) => (
              <LayoutListItem key={group.title}>
                <LayoutList direction="vertical">
                  {group.items.map((item: SuggestionItem) => (
                    <LayoutListItem key={item.id}>
                      <SuggestionsListItem
                        searchText={searchText}
                        isSelected={item.id === selectedId}
                        onSelect={onItemSelected}
                        {...item}
                      />
                    </LayoutListItem>
                  ))}
                </LayoutList>
              </LayoutListItem>
            ))}
          </LayoutList>
        )}
        {isLoading ? (
          <div className={classNames.spinnerWrapper}>
            <Spinner text={loadingText} isCentered={true} />
          </div>
        ) : (
          !hasResults && (
            <Block textAlign="center" padding={GutterSize.LARGE} textSize={TextSize.SMALL}>
              <Text color={TextColor.METADATA}>{noResultsText}</Text>
            </Block>
          )
        )}
      </div>
    );
  }
}
