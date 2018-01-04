/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { getBaseTextFieldProps, BaseTextFieldProps } from '../../util/BaseTextField';
import DebouncedOnChange, { DebouncedOnChangeProps, DebouncedOnChangePrivateProps } from '../../util/DebouncedOnChange';
import { TextField as FabricTextField } from 'office-ui-fabric-react/lib/TextField';
import './TextArea.css';

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
 * The TextArea component enables a user to type text into an app. The text
 * displays on the screen in a simple, uniform format.
 */
class TextArea extends React.Component<TextAreaProps & DebouncedOnChangePrivateProps> {
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

export default (props: TextAreaProps) => {
  return <DebouncedOnChange {...props} component={TextArea} />;
};
