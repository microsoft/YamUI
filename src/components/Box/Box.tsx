/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import {
  NestableBaseComponentProps as BoxProps,
} from '../../util/BaseComponent/props';
import Block, { GutterSize } from '../Block';
import './Box.css';

export { BoxProps };
/**
 * A Block component with a border. Usually used as a container component
 */
export default class Box extends React.Component<BoxProps, {}> {
  render() {
    const { children } = this.props;

    return (
      <Block className={this.getClasses()} padding={GutterSize.SMALL}>
        {children}
      </Block>
    );
  }

  private getClasses() {
    const { className } = this.props;
    const classes = ['y-box'];

    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }
}
