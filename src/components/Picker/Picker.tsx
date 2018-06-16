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
   * The list of currently-selected items.
   */
  selectedItems: IBasePickerProps<T>['selectedItems'];

  /**
   * Aria label for the focusable text input.
   */
  inputAriaLabel: string;

  suggestionsHeaderText: string;

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

  /**
   * This is where you provide the items to be rendered in the autocomplete dropdown.
   * The current filter text and list of already-selected items will be provided.
   */
  onResolveSuggestions: IBasePickerProps<T>['onResolveSuggestions'];

  /**
   * Called when an item has been selected. The application is responsible for updating the `selectedItems` prop.
   */
  onItemSelected: IBasePickerProps<T>['onItemSelected'];

  /**
   * Called when an item has been removed. The application is responsible for updating the `selectedItems` prop.
   */
  onRemoveSuggestion(item: T): void; // Fabric BasePicker has a bad type here, references Persona...
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
      onItemSelected,
      onRemoveSuggestion,
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
        onItemSelected={onItemSelected}
        onRemoveSuggestion={onRemoveSuggestion as any}
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
                <div className={classNames.selectedItemCloseButton} onClick={props.onRemoveItem}>
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
