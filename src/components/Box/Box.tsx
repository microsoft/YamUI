/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import {
  NestableBaseComponentProps as BoxProps,
} from '../../util/BaseComponent/props';
import { join } from '../../util/classNames';
import Block, { GutterSize } from '../Block';
import './Box.css';

export { BoxProps };
/**
 * A Block component with a border. Usually used as a container component
 */
export default class Box extends React.Component<BoxProps, {}> {
  render() {
    const { children, className } = this.props;

    return (
      <Block className={join(['y-box', className])} padding={GutterSize.SMALL}>
        {children}
      </Block>
    );
  }
}
