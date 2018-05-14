/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { Omit } from '../../util/types';
import BaseTextField, { TextAreaProps as InternalTextAreaProps } from '../internal/TextField';

export type TextAreaProps = Omit<InternalTextAreaProps, 'multiline'>;

/**
 * TextArea is rendered as an html textarea tag, used to allow more than one line of text to be entered.
 */
export default class TextArea extends React.Component<TextAreaProps> {
  public render() {
    const { className, ...props } = this.props;
    return <BaseTextField {...props} multiline={true} className={join(['y-textArea', this.props.className])} />;
  }
}
