/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps as ListItemProps } from '../../util/BaseComponent/props';
import { join } from '../../util/classNames';

export { ListItemProps };

/**
 * To be nested under a `List` component.
 */
export default class ListItem extends React.Component<ListItemProps> {
  public render() {
    const { className, children } = this.props;
    return <li className={join(['y-list--item', className])}>{children}</li>;
  }
}
