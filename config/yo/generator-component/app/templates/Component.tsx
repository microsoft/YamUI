/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { <%= name %>Type } from './types';
import './<%= name %>.css';

export { <%= name %>Type };

export interface <%= name %>Props extends BaseComponentProps {
  /**
   * Describe what this property does. This will also appear as part of this component's
   * documentation.
   */
  type?: <%= name %>Type;
}

/**
 * Describe what `<%= name %>` does. This will also appear as part of this component's
 * documentation.
 */
export default class <%= name %> extends React.Component<<%= name %>Props> {
  public static defaultProps = {
    type: <%= name %>Type.BLACK,
  };

  public render() {
    const { type } = this.props;

    return (
      <div className={this.getClasses()}>
        <%= name %> of type {type}
      </div>
    );
  }

  private getClasses() {
    const { className, type } = this.props;
    const classes = ['<%= className %>', `<%= className %>__type-${type}`];

    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }
}
