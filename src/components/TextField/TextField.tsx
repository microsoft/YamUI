/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { Omit } from '../../util/types';
import BaseTextField, { TextInputProps } from '../internal/TextField';

export type TextFieldProps = Omit<TextInputProps, 'multiline'>;

/**
 * The TextField component enables a user to type text into an app. It's used to capture
 * a single line of text. The text displays on the screen in a simple, uniform format.
 */
export default class TextField extends React.Component<TextFieldProps> {
  public render() {
    const { className, ...props } = this.props;
    return <BaseTextField {...props} multiline={false} className={join(['y-textInput', this.props.className])} />;
  }
}
