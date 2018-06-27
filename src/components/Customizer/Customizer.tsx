/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { Customizer as FabricCustomizer } from 'office-ui-fabric-react/lib/Utilities';
import { createTheme, ITheme } from 'office-ui-fabric-react';

export { createTheme, ITheme };

export interface CustomizerProps extends BaseComponentProps {
  /**
   * Theme object.
   */
  theme: ITheme;
}

/**
 * Used to inject a custom theme object into customizable components, overriding the global theme.
 */
export default class Customizer extends React.Component<CustomizerProps> {
  public render() {
    const { theme } = this.props;

    return <FabricCustomizer settings={{ theme }}>{this.props.children}</FabricCustomizer>;
  }
}
