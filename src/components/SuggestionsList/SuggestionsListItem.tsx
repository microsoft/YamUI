/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';
import { join } from '../../util/classNames';
import { getClassNames } from './SuggestionsListItem.styles';
import SuggestionsListItemContent from './SuggestionsListItemContent';
import { SuggestionsListItemProps } from './SuggestionsList.types';

const baseClass = 'y-suggestionsListItem y-hc-select-on-hover y-hc-suppress-text-background';
const selectedClass = `${baseClass} y-hc-selected`;

export class SuggestionsListItem extends React.PureComponent<SuggestionsListItemProps & CustomizableComponentProps> {
  public render() {
    const { className, isSelected, item, searchText, theme = defaultTheme } = this.props;
    const baseClassNames = isSelected ? selectedClass : baseClass;
    const classNames = getClassNames({ isSelected, theme });

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

@customizable('SuggestionsListItem', ['theme'])
export default class CustomizableSuggestionsListItem extends SuggestionsListItem {}
