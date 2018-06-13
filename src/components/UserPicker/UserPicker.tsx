/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import {
  IBasePickerProps,
  IBasePickerSuggestionsProps,
  BasePicker,
  IInputProps,
} from 'office-ui-fabric-react/lib/Pickers';
import * as React from 'react';
import { IPersona } from 'office-ui-fabric-react/lib/Persona';
import { SuggestionItem, SuggestionsListItem } from '../SuggestionsList';

export { IPersona, IBasePickerProps, IBasePickerSuggestionsProps };

export interface UserPickerProps {
  placeholder: IInputProps['placeholder'];
  onResolveSuggestions: IBasePickerProps<SuggestionItem>['onResolveSuggestions'];
}

/**
 * The UserPicker is a thin wrapper of Fabric's
 * [BasePicker](https://developer.microsoft.com/en-us/fabric#/components/peoplepicker) is used to select one
 * or more entities, such as people or groups.
 */
export default class UserPicker extends React.Component<UserPickerProps> {
  public render() {
    const suggestionsClass: IBasePickerSuggestionsProps = { className: 'y-userpicker-suggestions__container' };
    return (
      <BasePicker
        {...this.props}
        onResolveSuggestions={this.onResolveSuggestions}
        className="y-userpicker__container"
        pickerSuggestionsProps={suggestionsClass}
        onRenderSuggestionsItem={this.onRenderSuggestions}
      />
    );
  }
  private onRenderSuggestions = (props: any, itemProps: any) => {
    return <SuggestionsListItem isSelected={true} onSelect={this.onSelect} />;
  };

  private onSelect = (id: string | number) => {
    return null;
  };

  private onResolveSuggestions = (filter: string) => {
    return this.props.onResolveSuggestions(filter);
  };
}
