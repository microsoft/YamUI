/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { getClassNames } from './Strong.styles';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';

/**
 * Strong is a simple styled replacement for a `strong` tag.
 */
export default class Strong extends React.Component<NestableBaseComponentProps> {
  public render() {
    const { className, children } = this.props;
    const classNames = getClassNames();
    return <strong className={join([classNames.root, className])}>{children}</strong>;
  }
}
