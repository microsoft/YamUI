/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import {
  Customizer as FabricCustomizer,
  ICustomizerProps as CustomizerProps,
} from 'office-ui-fabric-react/lib/Utilities';
import { createTheme, ITheme } from 'office-ui-fabric-react';

export { createTheme, ITheme, CustomizerProps };

/**
 * Used to inject a custom theme object into customizable components, overriding the global theme.
 */
export default class Customizer extends React.Component<CustomizerProps> {
  public render() {
    return <FabricCustomizer {...this.props} />;
  }
}
