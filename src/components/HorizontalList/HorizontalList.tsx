/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './HorizontalList.css';

export interface HorizontalListProps extends NestableBaseComponentProps {
  /**
   * Alignment of the list.
   * @default 'left'
   */
  align?: 'left' | 'right';
}

/**
 * A `HorizontalList` displays a horizontal list of evenly spaced items.
 */
export default class HorizontalList extends React.PureComponent<HorizontalListProps, {}> {
  static defaultProps = {
    align: 'left',
  };

  render() {
    const { children } = this.props;

    return <ul className={this.getClasses()}>{children}</ul>;
  }

  private getClasses() {
    const { align, className } = this.props;

    const classes: string[] = ['y-horizontalList'];
    if (align === 'right') {
      classes.push('y-horizontalList__align-right');
    }
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }
}
