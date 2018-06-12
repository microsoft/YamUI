/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { <%= name %>Type } from './types';
import { getClassNames } from './<%= name %>.styles';

export { <%= name %>Type };

export interface <%= name %>Props extends BaseComponentProps {
  /**
   * Describe what this property does. This will also appear as part of this component's
   * documentation.
   * @default <%= name %>Type.BLACK
   */
  type?: <%= name %>Type;
}

/**
 * Describe what `<%= name %>` does. This will also appear as part of this component's
 * documentation.
 */
export default class <%= name %> extends React.Component<<%= name %>Props> {
  public render() {
    const { className, type = <%= name %>Type.BLACK } = this.props;
    const classNames = getClassNames({ type });

    return (
      <div className={join(['<%= className %>', classNames.root, className])}>
        <%= name %> of type {type}
      </div>
    );
  }
}
