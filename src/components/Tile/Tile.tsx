/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';
import { join } from '../../util/classNames';
import { getClassNames } from './Tile.styles';
import { TileProps } from './Tile.types';

/**
 * A `Tile` component is a container what maintains a certain aspect ratio.
 */
export class Tile extends React.Component<TileProps & CustomizableComponentProps> {
  public render() {
    const { children } = this.props;
    const classes = this.getClasses();

    return <div className={classes}>{children}</div>;
  }

  private getClasses() {
    const { aspectRatio, className, borderColor, theme = defaultTheme } = this.props;
    return join(['y-tile', className, getClassNames({ aspectRatio, borderColor, theme }).root]);
  }
}

@customizable('Tile', ['theme'])
export default class CustomizableTile extends Tile {}
