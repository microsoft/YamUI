/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { Customizer as FabricCustomizer, ICustomizerProps } from 'office-ui-fabric-react/lib/Utilities';
import CustomizableBody from './CustomizableBody';

/**
 * Used to inject a custom theme object into customizable components, overriding the global theme.
 */
export default class Customizer extends React.Component<ICustomizerProps & NestableBaseComponentProps> {
  public render() {
    const { children, className, ...customizerProps } = this.props;

    return (
      <FabricCustomizer {...customizerProps}>
        <CustomizableBody {...{ children, className }} />
      </FabricCustomizer>
    );
  }
}
