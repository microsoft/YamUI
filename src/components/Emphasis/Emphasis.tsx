/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { getClassNames } from './Emphasis.styles';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';

/**
 * Emphasis is a simple replacement for an italicized `em` tag.
 */
export default class Emphasis extends React.Component<NestableBaseComponentProps> {
  public render() {
    const { className, children } = this.props;
    const classNames = getClassNames();
    return <em className={join([classNames.root, className])}>{children}</em>;
  }
}
