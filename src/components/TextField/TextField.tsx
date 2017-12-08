/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { TextField as FabricTextField } from 'office-ui-fabric-react/lib/TextField';
import { Async } from 'office-ui-fabric-react/lib/Utilities';
import './TextField.css';

export interface TextFieldProps extends BaseComponentProps {
  /**
   * Current value of the textfield.
  */
  value?: string;

  /**
   * Placeholder text. Displayed until a value is entered.
  **/
  placeHolder?: string;

  /**
   * Error message string.
   */
  errorMessage?: string;

  /**
   * Disabled state of the textfield.
  */
  disabled?: boolean;

  /**
   * Label for the textfield.
  */
  label?: string;

  /**
   * The textfield input description
   */
  description?: string;

  /**
   * String for prefix.
  */
  prefix?: string;

  /**
   * String for suffix.
  */
  suffix?: string;

  /**
   * Use to indicate that a value must be provided to allow the containing form to be submitted.
  */
  required?: boolean;

  /**
   * Height of the field, in number of rows.
  **/
  rows?: number;

  /**
   * Whether or not to auto adjust textField height.
  **/
  autoAdjustHeight?: boolean;

  /**
   * Whether or not the textfield is underlined.
  **/
  underlined?: boolean;

  /**
   * Callback for the onChanged event.
   */
  onChange?: (newValue: any) => void;

  /**
   * Textfield will trigger onChange after users stop typing for `onChangeDebounceTime`
   * milliseconds.
   */
  onChangeDebounceTime?: number;
}

/**
 * The TextField component enables a user to type text into an app. It's typically used to capture
 * a single line of text, but can be configured to capture multiple lines of text. The text
 * displays on the screen in a simple, uniform format.
 */
export default class TextField extends React.PureComponent<TextFieldProps, {}> {
  private async: Async;

  render() {
    return (
      <FabricTextField
        value={this.props.value}
        className={this.getClasses()}
        label={this.props.label}
        description={this.props.description}
        prefix={this.props.prefix}
        suffix={this.props.suffix}
        disabled={this.props.disabled}
        required={this.props.required}
        errorMessage={this.props.errorMessage}
        placeholder={this.props.placeHolder}
        multiline={!!this.props.autoAdjustHeight || !!this.props.rows && (this.props.rows > 1)}
        rows={this.props.rows}
        resizable={false}
        autoAdjustHeight={this.props.autoAdjustHeight}
        underlined={this.props.underlined}
        onChanged={this.getOnChange()}
      />
    );
  }

  private getOnChange() {
    this.async = this.async || new Async(this);
    if (this.props.onChangeDebounceTime && this.props.onChange) {
      return this.async.debounce(this.props.onChange, this.props.onChangeDebounceTime);
    }
    return this.props.onChange;
  }

  private getClasses() {
    const { className, prefix, suffix } = this.props;
    const classes = ['y-text-field'];

    if (className) {
      classes.push(className);
    }

    if (prefix) {
      classes.push('y-text-field--with-prefix');
    }

    if (suffix) {
      classes.push('y-text-field--with-suffix');
    }

    return classes.join(' ');
  }
}
