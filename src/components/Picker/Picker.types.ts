/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { IBasePickerProps } from 'office-ui-fabric-react/lib/Pickers';
import { SuggestionItem } from '../SuggestionsList/SuggestionsListItemContent';

export { IBasePickerProps };

export interface BasePickerProps<T> extends BaseComponentProps {
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

export type PickerProps = BasePickerProps<SuggestionItem>;
