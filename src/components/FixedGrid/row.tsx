/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { GutterSize } from '../../util/enums/gutter';
import './fixed-grid.css';

export interface FixedGridRowProps extends NestableBaseComponentProps {
  gutterSize?: GutterSize;
  bottomSpacing?: GutterSize;
}

export { GutterSize };

const getClasses = (props: FixedGridRowProps) => {
  const classes: string[] = ['y-fixedGridRow', `y-fixedGridRow__gutter-${props.gutterSize}`];
  if (props.bottomSpacing) {
    classes.push(`y-fixedGridRow__bottomSpacing-${props.bottomSpacing}`);
  }
  if (props.className) {
    classes.push(props.className);
  }
  return classes.join(' ');
};

export const FixedGridRow: React.StatelessComponent<FixedGridRowProps> = props => (
  <div className={getClasses(props)}>{props.children}</div>
);

FixedGridRow.defaultProps = {
  gutterSize: GutterSize.SMALL,
};
