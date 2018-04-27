/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
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

interface Focusable {
  /**
   * Sets focus to the input, and places cursor at the end of the value.
   * @public
   */
  focus(): void;
}

/**
 * The TextField component enables a user to type text into an app. It's used to capture
 * a single line of text. The text displays on the screen in a simple, uniform format.
 */
class TextField extends React.Component<TextFieldProps & DebouncedOnChangePrivateProps> implements Focusable {
  private fabricTextFieldElement: ITextField | undefined;

  public render() {
    return (
      <FabricTextField
        className={this.getClasses()}
        prefix={this.props.prefix}
        suffix={this.props.suffix}
        underlined={this.props.underlined}
        onChanged={this.props.unifiedOnChange}
        componentRef={this.getRef}
        {...getBaseTextFieldProps(this.props)}
      />
    );
  }

  public focus = () => {
    const el = this.fabricTextFieldElement;
    if (el) {
      const valueLength = this.props.value ? this.props.value.length : 0;

      el.focus();
      el.setSelectionRange(valueLength, valueLength);
    }
  };

  private getRef = (ref: ITextField | null) => {
    this.fabricTextFieldElement = ref ? ref : undefined;
  };

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
