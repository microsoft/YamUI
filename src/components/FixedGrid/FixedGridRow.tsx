/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { GutterSize } from './enums';
import './FixedGrid.css';

export interface FixedGridRowProps extends NestableBaseComponentProps {
  /**
   * Margin added below the row.
   */
  bottomSpacing?: GutterSize;

  /**
   * Horizontal gutter space between each column.
   * @default GutterSize.SMALL
   */
  gutterSize?: GutterSize;
}

export { GutterSize };

/**
 * A `FixedGridRow` represents each row inside a `FixedGrid`. It should wrap `FixedGridColumn`s.
 */
export default class FixedGridRow extends React.PureComponent<FixedGridRowProps, {}> {
  static defaultProps = {
    gutterSize: GutterSize.SMALL,
  };

  render() {
    const { children } = this.props;

    return <div className={this.getClasses()}>{children}</div>;
  }

  private getClasses() {
    const { bottomSpacing, className, gutterSize } = this.props;

    const classes: string[] = ['y-fixedGridRow', `y-fixedGridRow__gutter-${gutterSize}`];
    if (bottomSpacing) {
      classes.push(`y-fixedGridRow__bottomSpacing-${bottomSpacing}`);
    }
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }
}
