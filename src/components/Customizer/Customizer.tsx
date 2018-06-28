/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { Customizer as FabricCustomizer, ICustomizerProps } from 'office-ui-fabric-react/lib/Utilities';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { createTheme, ITheme } from 'office-ui-fabric-react';

export { createTheme, ITheme, ICustomizerProps };

export interface CustomizableComponentProps extends BaseComponentProps {
  /**
   * Theme used to style the component. This will often be provided by `customizable`.
   */
  theme?: ITheme;
}

export const nullTheme = createTheme({ palette: {} });

/**
 * Used to inject a custom theme object into customizable components, overriding the global theme.
 */
export default class Customizer extends React.Component<ICustomizerProps> {
  public render() {
    return <FabricCustomizer {...this.props} />;
  }
}