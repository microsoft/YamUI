/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';
import { join } from '../../util/classNames';
import { <%= name %>Props, <%= name %>Type } from './<%= name %>.types';
import { getClassNames } from './<%= name %>.styles';


export class <%= name %> extends React.Component<<%= name %>Props & CustomizableComponentProps> {
  public render() {
    const { className, type = <%= name %>Type.BLACK, theme = defaultTheme } = this.props;
    const classNames = getClassNames({ type, theme });

    return (
      <div className={join(['<%= className %>', classNames.root, className])}>
        <%= name %> of type {type}
      </div>
    );
  }
}

/**
 * Describe what `<%= name %>` does. This will also appear as part of this component's
 * documentation.
 */
@customizable('<%= name %>', ['theme'])
export default class Customizable<%= name %> extends <%= name %> {}
