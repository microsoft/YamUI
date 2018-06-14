/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { BaseComponentProps } from '../../util/BaseComponent/props';

/**
 * A single list item to be nested directly within a
 */
export class GridListItem extends React.Component<BaseComponentProps> {
  public render() {
    const { children, className } = this.props;

    return <li className={join(['y-gridListItem', className])}>{children}</li>;
  }
}
