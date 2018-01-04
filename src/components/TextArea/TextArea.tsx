/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { getBaseTextFieldProps, BaseTextFieldProps }  from '../../util/BaseTextField';
import DebouncedOnChange, { Async, DebouncedOnChangeProps } from '../../util/DebouncedOnChange';
import { TextField as FabricTextField } from 'office-ui-fabric-react/lib/TextField';
import './TextArea.css';

export { Async };

export interface TextAreaProps extends BaseTextFieldProps, DebouncedOnChangeProps {
  /**
   * Height of the field, in number of rows.
   **/
  rows?: number;

  /**
   * Whether or not to auto adjust textField height.
   **/
  autoAdjustHeight?: boolean;
}

/**
 * The TextArea component enables a user to type text into an app. It's typically used to capture
 * a single line of text, but can be configured to capture multiple lines of text. The text
 * displays on the screen in a simple, uniform format.
 */
class TextArea extends React.Component<TextAreaProps> {
  render() {
    return (
      <FabricTextField
        className={this.getClasses()}
        rows={this.props.rows}
        autoAdjustHeight={this.props.autoAdjustHeight}
        multiline={true}
        resizable={false}
        onChanged={this.props.unifiedOnChange}
        {...getBaseTextFieldProps(this.props)}
      />
    );
  }

  getClasses() {
    const { className } = this.props;
    const classes = ['y-base-text-field y-text-area'];

    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }
}

export default DebouncedOnChange<TextAreaProps>(TextArea);
