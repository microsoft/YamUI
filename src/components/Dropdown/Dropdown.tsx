/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import autobind from 'core-decorators/lib/autobind';
import { IDropdownOption, Dropdown as FabricDropdown } from 'office-ui-fabric-react/lib/Dropdown';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import Icon from '../Icon';
import './Dropdown.css';

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
   * Input placeholder text. Displayed until option is selected.
  **/
  placeHolder?: string;

  /**
   * Initially selected option.
  **/
  selectedKey?: DropdownOptionKey;

  /**
   * Function to call when user changes the selected item.
  **/
  onChanged?: (key: DropdownOptionKey) => void;
}

/**
 * A `Dropdown` is a list in which the selected item is always visible, and the others are visible
 * on demand by clicking a button.
 */
export default class Dropdown extends React.PureComponent<DropdownProps, {}> {
  render() {
    const { label, options, placeHolder, selectedKey } = this.props;

    return (
      <div className={this.getClasses()}>
        <FabricDropdown
          label={label}
          options={options}
          placeHolder={placeHolder}
          selectedKey={selectedKey}
          onChanged={this.handleChanged}
          onRenderCaretDown={this.getIcon}
        />
      </div>
    );
  }

  private getClasses() {
    const { className } = this.props;

    const classes: string[] = ['y-dropdown'];
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }

  private getIcon() {
    return <Icon className="y-dropdown__caretDown" icon="caretDown" />;
  }

  @autobind
  private handleChanged(option: DropdownOption) {
    const { onChanged } = this.props;

    onChanged && onChanged(option.key);
  }
}
