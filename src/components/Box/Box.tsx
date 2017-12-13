/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { BoxBorderType, BoxPaddingSize } from './enums';
import './Box.css';

export { BoxBorderType, BoxPaddingSize };

export interface BoxProps extends BaseComponentProps {
  /**
   * Describe what this property does. This will also appear as part of this component's
   * documentation.
   */
  borderType?: BoxBorderType;
  padding?: BoxPaddingSize;
}

/**
 * Describe what `Box` does. This will also appear as part of this component's
 * documentation.
 */
export default class Box extends React.Component<BoxProps, {}> {
  static defaultProps = {
    borderType: BoxBorderType.SQUARE,
    padding: BoxPaddingSize.SMALL,
  };

  render() {
    const { borderType, padding } = this.props;

    return (
      <div className={this.getClasses()}>
        Box of type {borderType}: {padding}
      </div>
    );
  }

  private getClasses() {
    const { className, borderType, padding } = this.props;
    const classes = ['y-box', `y-box__borderType-${borderType}`, `y-box__padding-${padding}`];

    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }
}
