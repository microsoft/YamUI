/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { join } from '../../util/classNames';
import { GutterSize } from '../FixedGrid';
import './LayoutList.css';

export { GutterSize };

export interface BaseLayoutListProps extends NestableBaseComponentProps {
  /**
   * Horizontal or vertical alignment of items.
   */
  direction: 'horizontal' | 'vertical';
}

export interface HorizontalListProps extends BaseLayoutListProps {
  /**
   * Align the horizontal list items to the left or right of the list's container.
   * @default 'left'
   */
  align?: 'left' | 'right';

  /**
   * Amount of spacing between horizontal list items. Defaults to 4px.
   * @default GutterSize.XSMALL
   */
  gutterSize?: GutterSize;

  direction: 'horizontal';
}

export type LayoutListProps = BaseLayoutListProps | HorizontalListProps;

/**
 * A `LayoutList` displays a list of items either horizontally or vertical. Horizontal list items
 * are evenly spaced with a fixed margin of 4px, and can be aligned to the right or left. Vertical
 * list items do not have any margin.
 */
export default class LayoutList extends React.Component<LayoutListProps, {}> {
  render() {
    return <ul className={this.getClasses()}>{this.props.children}</ul>;
  }

  private getClasses() {
    const { className, direction } = this.props;
    const classes = ['y-layoutList', `y-layoutList__${direction}`, className];

    if (direction === 'horizontal') {
      const { align = 'left', gutterSize = GutterSize.XSMALL } = this.props as HorizontalListProps;
      classes.push(`y-layoutList__align-${align}`);
      classes.push(`y-layoutList__gutterSize-${gutterSize}`);
    }

    return join(classes);
  }
}
