/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { ICustomizerProps, customizable } from 'office-ui-fabric-react/lib/Utilities';
import { createTheme, ITheme } from 'office-ui-fabric-react/lib/Styling';
import { theme as defaultTheme } from '../../util/theme';

export { createTheme, ITheme, ICustomizerProps, customizable, defaultTheme };

export interface CustomizableComponentProps {
  /**
   * Theme used to style the component. This will often be provided by `customizable`.
   */
  theme?: ITheme;
}
