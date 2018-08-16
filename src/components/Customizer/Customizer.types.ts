/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { ICustomizerProps, customizable, memoizeFunction } from 'office-ui-fabric-react/lib/Utilities';
import { createTheme, ITheme, mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { defaultTheme, darkTheme } from '../../util/theme';

export {
  createTheme,
  ITheme,
  ICustomizerProps,
  customizable,
  defaultTheme,
  darkTheme,
  memoizeFunction,
  mergeStyleSets,
};

export interface CustomizableComponentProps {
  /**
   * Theme used to style the component. This will often be provided by `customizable`.
   */
  theme?: ITheme;
}
