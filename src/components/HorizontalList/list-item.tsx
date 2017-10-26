/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './horizontal-list.css';

export { NestableBaseComponentProps };

export class ListItem extends React.PureComponent<NestableBaseComponentProps, {}> {
  render() {
    const { children } = this.props;

    return <li className={this.getClasses()}>{children}</li>;
  }

  private getClasses() {
    const { className } = this.props;

    const classes: string[] = ['y-horizontalList--item'];
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }
}
