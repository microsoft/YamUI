/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';
import { join } from '../../util/classNames';
import { BasePicker, IBasePickerProps, IPickerItemProps } from 'office-ui-fabric-react/lib/Pickers';
import Block, { TextSize } from '../Block';
import { FixedGridRow, FixedGridColumn } from '../FixedGrid';
import SuggestionItemContent, { SuggestionItem } from '../SuggestionsList/SuggestionsListItemContent';
import RemoveIcon from '../Icon/icons/Cancel';
import { getClassNames } from './Picker.styles';
import { PickerProps } from './Picker.types';
import './Picker.css'; // Required for the Callout content as there aren't JS styles to override

class SuggestionListBasePicker extends BasePicker<SuggestionItem, IBasePickerProps<SuggestionItem>> {}

/**
 * Pickers are used to pick one or more entities (e.g. people, groups, topics) from a list with typeahead capabilities.
 */
export class Picker extends React.Component<PickerProps & CustomizableComponentProps> {
  public render() {
    const {
      className,
      disabled,
      itemLimit,
      onFocus,
      onBlur,
      onResolveSuggestions,
      onChange,
      selectedItems,
      inputAriaLabel,
      suggestionsHeaderText,
      noResultsFoundText,
      theme = defaultTheme,
    } = this.props;
    const classNames = getClassNames({ theme });

    return (
      <SuggestionListBasePicker
        className={join(['y-picker', classNames.root, className])}
        onResolveSuggestions={onResolveSuggestions}
        pickerSuggestionsProps={{
          suggestionsHeaderText,
          className: classNames.suggestionsBox,
          suggestionsClassName: classNames.suggestionsList,
          noResultsFoundText,
        }}
        itemLimit={itemLimit}
        disabled={disabled}
        inputProps={{
          onBlur,
          onFocus,
          'aria-label': inputAriaLabel,
        }}
        onRenderSuggestionsItem={this.getSuggestionItemContent}
        onRenderItem={this.getSelectedItem}
        onChange={onChange}
        selectedItems={selectedItems}
      />
    );
  }

  private getSuggestionItemContent = (item: SuggestionItem) => {
    const { theme = defaultTheme } = this.props;
    const classNames = getClassNames({ theme });

    return <SuggestionItemContent item={item} className={classNames.suggestionItem} />;
  };

  private getSelectedItem = (props: IPickerItemProps<SuggestionItem>) => {
    const { theme = defaultTheme } = this.props;
    const classNames = getClassNames({ theme });

    return (
      <div
        role={'listitem'}
        className={classNames.selectedItem}
        key={props.item.id}
        data-selection-index={props.index}
        data-is-focusable={!props.disabled}
      >
        <Block textSize={TextSize.MEDIUM_SUB}>
          <FixedGridRow>
            <FixedGridColumn fixed={true}>
              <span>{props.item.name}</span>
            </FixedGridColumn>
            <FixedGridColumn fixed={true}>
              {!props.disabled && (
                <div
                  className={classNames.selectedItemCloseButton}
                  onClick={props.onRemoveItem}
                  aria-label={this.props.removeItemAriaLabel}
                >
                  <RemoveIcon block={true} />
                </div>
              )}
            </FixedGridColumn>
          </FixedGridRow>
        </Block>
      </div>
    );
  };
}
@customizable('Picker', ['theme'])
export default class CustomizablePicker extends Picker {}
