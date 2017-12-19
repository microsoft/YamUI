/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { TextField as FabricTextField } from 'office-ui-fabric-react/lib/TextField';
import { Async } from 'office-ui-fabric-react/lib/Utilities';
import './TextArea.css';

export interface TextAreaProps extends BaseComponentProps {
  /**
   * Current value of the TextArea.
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
   * Disabled state of the TextArea.
  */
  disabled?: boolean;

  /**
   * Label for the TextArea.
  */
  label?: string;

  /**
   * The TextArea input description
   */
  description?: string;

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
   * Callback for the onChanged event.
   */
  onChange?: (newValue: any) => void;

  /**
   * TextArea will trigger `onChange` after users stop typing for `onChangeDebounceTime`
   * milliseconds.
   */
  onChangeDebounceTime?: number;

  /**
   * Focus callback handler.
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  /**
   * Blur callback handler.
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  /**
   * Mouse enter callback handler.
   */
  onMouseEnter?: (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  /**
   * Mouse leave callback handler.
   */
  onMouseLeave?: (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

/**
 * The TextArea component enables a user to type text into an app. It's typically used to capture
 * a single line of text, but can be configured to capture multiple lines of text. The text
 * displays on the screen in a simple, uniform format.
 */
export default class TextArea extends React.PureComponent<TextAreaProps, {}> {
  private async: Async;
  private debouncedOnChange: (newValue: string) => void;

  constructor(props: TextAreaProps) {
    super();
    if (props.onChangeDebounceTime && props.onChange) {
      this.async = new Async(this);
      this.debouncedOnChange = this.async.debounce(props.onChange, props.onChangeDebounceTime);
    }
  }

  componentWillUnmount() {
    this.async.dispose();
  }

  render() {
    return (
      <FabricTextField
        value={this.props.value}
        className={this.getClasses()}
        label={this.props.label}
        description={this.props.errorMessage ? undefined : this.props.description}
        disabled={this.props.disabled}
        required={this.props.required}
        errorMessage={this.props.errorMessage}
        placeholder={this.props.placeHolder}
        rows={this.props.rows}
        autoAdjustHeight={this.props.autoAdjustHeight}
        multiline={true}
        resizable={false}
        onChanged={this.debouncedOnChange || this.props.onChange}
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}
        onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}
      />
    );
  }

  private getClasses() {
    const { className } = this.props;
    const classes = ['y-text-field'];

    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }
}
