/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { Dropdown as FabricDropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import Icon from '../Icon';
import './dropdown.css';

export type DropdownOptionKey = string | number;
export type DropdownOption = IDropdownOption;

export interface DropdownProps extends BaseComponentProps {
  /**
   * Items to be presented to the user.
  **/
  options: DropdownOption[];

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
  onChanged?: (key: DropdownOptionKey) => void;

  /**
   * Input placeholder text. Displayed until option is selected.
  **/
  placeHolder?: string;
}

export default class Dropdown extends React.PureComponent<DropdownProps, {}> {
  constructor() {
    super();
    this.handleChanged = this.handleChanged.bind(this);
  }

  render() {
    const { options, selectedKey, onChanged, placeHolder, label } = this.props;
    return (
      <div className={this.getClasses()}>
        <FabricDropdown
          options={options}
          selectedKey={selectedKey}
          onChanged={this.handleChanged}
          placeHolder={placeHolder}
          label={label}
          onRenderCaretDown={this.getIcon}
        />
      </div>
    );
  }

  private getClasses() {
    const classes: string[] = [
      'y-dropdown',
    ];
    if (this.props.className) {
      classes.push(this.props.className);
    }
    return classes.join(' ');
  }

  private getIcon() {
    return <Icon className="y-dropdown__caretDown" icon="down"/>;
  }

  private handleChanged(option: DropdownOption) {
    this.props.onChanged && this.props.onChanged(option.key);
  }
}
