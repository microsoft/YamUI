/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { getClassNames } from './Paragraph.styles';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';

/**
 * Paragraph is a simple styled replacement for a `p` tag.
 */
export default class Paragraph extends React.Component<NestableBaseComponentProps> {
  public render() {
    const { className, children } = this.props;
    const classNames = getClassNames();
    return <p className={join([classNames.root, className])}>{children}</p>;
  }
}
