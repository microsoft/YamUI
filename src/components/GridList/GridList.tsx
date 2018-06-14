/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { GridListItem } from './GridListItem';
import { getClassNames } from './GridList.styles';

export interface GridListProps extends NestableBaseComponentProps {
  /**
   * The number of columns per row.
   */
  columns: number;

  /**
   * The number of gutter units between each list item.
   * @default 1 (4px)
   */
  gutterUnits: number;
}

/**
 * GridList renders a list items as a grid. Nest GridListItems with your item content.
 */
export class GridList extends React.Component<GridListProps> {
  public render() {
    const { children, className, columns, gutterUnits = 1 } = this.props;
    const classNames = getClassNames(columns, gutterUnits);

    return <ul className={join(['y-gridList', classNames.root, className])}>{children}</ul>;
  }
}
