/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { join } from '../../util/classNames';
import { GutterSize } from '../FixedGrid';
import { getClassNames } from './LayoutList.styles';

export { GutterSize };

export interface HorizontalListProps extends NestableBaseComponentProps {
  direction: 'horizontal';

  /**
   * Amount of spacing between list items. Defaults to 4px.
   * @default GutterSize.XSMALL
   */
  gutterSize?: GutterSize;

  /**
   * Align the horizontal list items to the left or right of the list's container.
   * @default 'left'
   */
  align?: 'left' | 'right';
}

export interface VerticalListProps extends NestableBaseComponentProps {
  direction: 'vertical';

  /**
   * Amount of spacing between list items. Defaults to none.
   * @default GutterSize.NONE;
   */
  gutterSize?: GutterSize;
}

export type LayoutListProps = HorizontalListProps | VerticalListProps;

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
