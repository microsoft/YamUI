/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { LayoutListItemProps } from './LayoutList.types';

/**
 * To be nested within a `LayoutList` component.
 */
export default class LayoutListItem extends React.Component<LayoutListItemProps> {
  public render() {
    const { children, className } = this.props;

    return <li className={join(['y-layoutList--item', className])}>{children}</li>;
  }
}
