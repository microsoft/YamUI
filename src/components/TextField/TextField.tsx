/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { getBaseTextFieldProps, BaseTextFieldProps } from '../BaseTextField';
import DebouncedOnChange, { DebouncedOnChangeProps, DebouncedOnChangePrivateProps } from '../../util/DebouncedOnChange';
import { TextField as FabricTextField } from 'office-ui-fabric-react/lib/TextField';
import '../BaseTextField/BaseTextField.css';
import './TextField.css';

export interface TextFieldProps extends BaseTextFieldProps, DebouncedOnChangeProps {
  /**
   * String for prefix.
   */
  prefix?: string;

  /**
   * String for suffix.
   */
  suffix?: string;

  /**
   * Whether or not the textfield is underlined.
   */
  underlined?: boolean;
}

/**
 * The TextField component enables a user to type text into an app. It's used to capture
 * a single line of text. The text displays on the screen in a simple, uniform format.
 */
class TextField extends React.Component<TextFieldProps & DebouncedOnChangePrivateProps> {
  public render() {
    return (
      <FabricTextField
        className={this.getClasses()}
        prefix={this.props.prefix}
        suffix={this.props.suffix}
        underlined={this.props.underlined}
        onChanged={this.props.unifiedOnChange}
        {...getBaseTextFieldProps(this.props)}
      />
    );
  }

  private getClasses() {
    const { className, prefix, suffix } = this.props;
    const classes = ['y-base-text-field', 'y-text-field'];

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

export default (props: TextFieldProps) => {
  return <DebouncedOnChange {...props} component={TextField} />;
};
