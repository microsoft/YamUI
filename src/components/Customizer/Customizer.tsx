/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { Customizer as FabricCustomizer, ICustomizerProps, customizable } from 'office-ui-fabric-react/lib/Utilities';
import { createTheme, ITheme } from 'office-ui-fabric-react';

export { createTheme, ITheme, ICustomizerProps, customizable };

export interface CustomizableComponentProps {
  /**
   * Theme used to style the component. This will often be provided by `customizable`.
   */
  theme?: ITheme;
}

export const defaultTheme = createTheme({});

/**
 * Used to inject a custom theme object into customizable components, overriding the global theme.
 */
export default class Customizer extends React.Component<ICustomizerProps> {
  public render() {
    return <FabricCustomizer {...this.props} />;
  }
}
