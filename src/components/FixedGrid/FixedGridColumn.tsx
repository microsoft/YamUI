/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { getClassNames } from './FixedGridColumn.styles';
import { FixedGridColumnProps } from './FixedGrid.types';

/**
 * A `FixedGridColumn` represents each column inside a `FixedGrid`. It should be wrapped in a
 * `FixedGridRow`.
 */
export default class FixedGridColumn extends React.Component<FixedGridColumnProps> {
  public render() {
    const { children, verticalAlign = 'top', className, fixed, width } = this.props;

    if (!children) {
      return null;
    }

    const classNames = getClassNames({ fixed, width, verticalAlign });

    return (
      <div className={join(['y-fixedGridColumn', className, classNames.root])}>
        {/* NOTE: We achieve vertical-align with flexbox. The extra inner div prevents direct children
           from receiving flex-child styling and getting wonky vertical alignment. */
        verticalAlign && verticalAlign !== 'top' ? (
          <div className={classNames.inner}>
            <div>{children}</div>
          </div>
        ) : (
          children
        )}
      </div>
    );
  }
}
