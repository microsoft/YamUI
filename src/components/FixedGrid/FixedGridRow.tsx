/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { GutterSize } from './enums';
import './FixedGrid.css';

export interface FixedGridRowProps extends NestableBaseComponentProps {
  bottomSpacing?: GutterSize;
  gutterSize?: GutterSize;
}

export { GutterSize };

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
