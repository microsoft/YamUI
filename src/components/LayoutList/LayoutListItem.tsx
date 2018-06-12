/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps as LayoutListItemProps } from '../../util/BaseComponent/props';
import { join } from '../../util/classNames';

export { LayoutListItemProps };

/**
 * To be nested within a `LayoutList` component.
 */
export default class LayoutListItem extends React.Component<LayoutListItemProps> {
  public render() {
    const { children, className } = this.props;

    return <li className={join(['y-layoutList--item', className])}>{children}</li>;
  }
}
