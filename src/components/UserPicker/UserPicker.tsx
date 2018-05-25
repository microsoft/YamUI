/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import { IBasePickerProps, IBasePickerSuggestionsProps, NormalPeoplePicker } from 'office-ui-fabric-react/lib/Pickers';
import * as React from 'react';
import { IPersona } from 'office-ui-fabric-react/lib/Persona';

export { IPersona, IBasePickerProps, IBasePickerSuggestionsProps };

/**
 * The UserPicker is a thin wrapper of Fabric's
 * [NormalPeoplePicker](https://developer.microsoft.com/en-us/fabric#/components/peoplepicker) is used to select one
 * or more entities, such as people or groups.
 */
export default class UserPicker extends React.Component<IBasePickerProps<IPersona>> {
  public render() {
    const { onResolveSuggestions } = this.props;
    const suggestionsClass: IBasePickerSuggestionsProps = { className: 'y-userpicker-suggestions__container' };
    return (
      <NormalPeoplePicker
        className="y-userpicker__container"
        pickerSuggestionsProps={suggestionsClass}
        onResolveSuggestions={onResolveSuggestions}
      />
    );
  }
}
