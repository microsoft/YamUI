/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { BasePicker, IBasePickerProps, IPickerItemProps } from 'office-ui-fabric-react/lib/Pickers';
import SuggestionItemContent, {
  SuggestionItem,
  SuggestionsListItemTemplate,
} from '../SuggestionsList/SuggestionsListItemContent';
import { getClassNames } from './Picker.styles';
import RemoveIcon from '../Icon/icons/Cancel';
import './Picker.css'; // Required for the Callout content as there aren't JS styles to override
import Block, { TextSize } from '../Block';
import { FixedGridRow, FixedGridColumn } from '../FixedGrid';

class SuggestionListBasePicker extends BasePicker<SuggestionItem, IBasePickerProps<SuggestionItem>> {}

export interface PickerProps<T> extends BaseComponentProps {
  /**
   * This is where you provide the items to be rendered in the autocomplete dropdown.
   * The current filter text and list of already-selected items will be provided.
   */
  onResolveSuggestions: IBasePickerProps<T>['onResolveSuggestions'];

  /**
   * Called when the list of selected items changes.
   */
  onChange: IBasePickerProps<T>['onChange'];

  /**
   * The list of currently-selected items.
   */
  selectedItems: IBasePickerProps<T>['selectedItems'];

  /**
   * Aria label for the focusable text input.
   */
  inputAriaLabel: string;

  /**
   * Aria label for the close button on selected items.
   */
  removeItemAriaLabel: string;

  /**
   * Visible header text in the autocomplete dropdown.
   */
  suggestionsHeaderText: string;

  /**
   * Message to display when no results are found.
   */
  noResultsFoundText: string;

  /**
   * Disables the picker UI.
   */
  disabled?: boolean;

  /**
   * If provided, limits the number of items which can be selected.
   */
  itemLimit?: number;

  /**
   * Callback event when the UI element is focused.
   */
  onFocus?: IBasePickerProps<T>['onFocus'];

  /**
   * Callback event when the UI element loses focus.
   */
  onBlur?: IBasePickerProps<T>['onBlur'];
}

/**
 * Describe what `Picker` does. This will also appear as part of this component's
 * documentation.
 */
export default class Picker extends React.Component<PickerProps<SuggestionItem>> {
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
    } = this.props;

    return (
      <SuggestionListBasePicker
        className={join(['y-picker', className])}
        onResolveSuggestions={onResolveSuggestions}
        pickerSuggestionsProps={{
          suggestionsHeaderText,
          noResultsFoundText,
        }}
        itemLimit={itemLimit}
        disabled={disabled}
        inputProps={{
          onBlur: onBlur,
          onFocus: onFocus,
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
    return <SuggestionItemContent item={item} />;
  };

  // TODO: Get accessibility guidance from Brendan on this!!!
  // TODO: Get guidance from UX Design team on this!!!
  // TODO: Render selected items from a different template based on props.item.template:
  //        SuggestionsListItemTemplate.AVATAR_ROUND (user)
  //        SuggestionsListItemTemplate.TEXT (topic)
  //        SuggestionsListItemTemplate.MEDIA_SOFT (group)
  //        SuggestionsListItemTemplate.MEDIA_SQUARE (OGOs, etc.)
  // NOTE: This is based on the Tag Picker implementation:
  // https://github.com/OfficeDev/office-ui-fabric-react/blob/master/packages/office-ui-fabric-react/src/components/pickers/TagPicker/TagItem.tsx#L16-L36
  private getSelectedItem = (props: IPickerItemProps<SuggestionItem>) => {
    const classNames = getClassNames();

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
