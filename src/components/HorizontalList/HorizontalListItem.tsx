/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import {
  NestableBaseComponentProps as HorizontalListItemProps,
} from '../../util/BaseComponent/props';
import './HorizontalList.css';

export { HorizontalListItemProps };

/**
 * Each of the items nested within a `HorizontalList` component.
 */
export default class HorizontalListItem extends React.Component<HorizontalListItemProps, {}> {
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
