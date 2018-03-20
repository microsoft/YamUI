/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps as BoxProps } from '../../util/BaseComponent/props';
import { join } from '../../util/classNames';
import Block, { GutterSize } from '../Block';
import './Box.css';

export { BoxProps };
/**
 * A Box is simply a div with a border and fixed padding. It also has `display: relative` so you can
 * absolutely-position elements like a close button. Boxes will primarily be used for card views.
 */
export default class Box extends React.Component<BoxProps> {
  public render() {
    const { children, className } = this.props;

    return (
      <Block className={join(['y-box', className])} padding={GutterSize.SMALL}>
        {children}
      </Block>
    );
  }
}
