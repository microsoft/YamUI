/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { getBaseTextFieldProps, BaseTextFieldProps } from '../BaseTextField';
import DebouncedOnChange, { DebouncedOnChangeProps, DebouncedOnChangePrivateProps } from '../../util/DebouncedOnChange';
import { TextField as FabricTextField, ITextField } from 'office-ui-fabric-react/lib/TextField';

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
  private fabricTextFieldRef: ITextField | null;

  public constructor() {
    super();
    this.fabricTextFieldRef = null;
  }

  public render() {
    return (
      <FabricTextField
        {...getBaseTextFieldProps(this.props)}
        className={this.getClasses()}
        prefix={this.props.prefix}
        suffix={this.props.suffix}
        underlined={this.props.underlined}
        onChanged={this.props.unifiedOnChange}
        componentRef={this.setRef}
      />
    );
  }

  public focus = () => {
    const ref = this.fabricTextFieldRef;
    if (!ref) {
      return;
    }

    const valueLength = this.props.value ? this.props.value.length : 0;
    ref.focus();
    ref.setSelectionRange(valueLength, valueLength);
  };

  private setRef = (node: ITextField | null) => {
    this.fabricTextFieldRef = node;
  };

  private getClasses() {
    const { className, prefix, suffix } = this.props;
    const classes = ['y-base-text-field', 'y-text-field', className];

    if (prefix) {
      classes.push('y-text-field--with-prefix');
    }

    if (suffix) {
      classes.push('y-text-field--with-suffix');
    }

    return join(classes);
  }
}

export default (props: TextFieldProps) => {
  return <DebouncedOnChange {...props} component={TextField} />;
};
