/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { Dropdown as FabricDropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import './dropdown.css';

export type DropdownOptionKey = string | number;

export interface DropdownProps extends BaseComponentProps {
  /**
   * Items to be presented to the user.
  **/
  options: IDropdownOption[];

  /**
   * Label text that will be rendered above the dropdown.
  **/
  label?: string;

  /**
   * Use to specify an initially selected option.
  **/
  selectedKey?: DropdownOptionKey;

  /**
   * Function to call when user changes the selected item.
  **/
  onChanged?: (option: IDropdownOption) => void;

  /**
   * Input placeholder text. Displayed until option is selected.
  **/
  placeHolder?: string;
}

const getClasses = (props: DropdownProps) => {
  const classes: string[] = [
    'y-dropdown',
  ];
  if (props.className) {
    classes.push(props.className);
  }
  return classes.join(' ');
};

const Dropdown: React.StatelessComponent<DropdownProps> = (props) => {
  const { options, selectedKey, onChanged, placeHolder, label } = props;
  return (
    <div className={getClasses(props)}>
      <FabricDropdown
        options={options}
        selectedKey={selectedKey}
        onChanged={onChanged}
        placeHolder={placeHolder}
        label={label}
      />
    </div>
  );
};

export default Dropdown;
