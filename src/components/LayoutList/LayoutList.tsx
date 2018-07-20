/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { getClassNames } from './LayoutList.styles';
import { LayoutListProps, HorizontalListProps } from './LayoutList.types';

/**
 * A `LayoutList` displays a list of items either horizontally or vertical. Horizontal list items
 * are evenly spaced with a fixed margin of 4px, and can be aligned to the right or left. Vertical
 * list items do not have any margin.
 */
export default class LayoutList extends React.Component<LayoutListProps> {
  public render() {
    const { className, direction, gutterSize, children } = this.props;
    const align = direction === 'horizontal' ? (this.props as HorizontalListProps).align || 'left' : undefined;
    const classNames = getClassNames({ direction, gutterSize, align });

    return <ul className={join(['y-layoutList', className, classNames.root])}>{children}</ul>;
  }
}
