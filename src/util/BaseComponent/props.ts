/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { Focusable } from '../Focusable';
import { ITheme } from '@uifabric/styling';

export interface BaseComponentProps {
  /**
   * One or more class names to be added to the root element of this component, i.e.
   * `"class-one class-two"`.
   */
  className?: string;
}

export interface CustomizableComponentProps extends BaseComponentProps {
  /**
   * Theme used to style the component. This will often be provided by `customizable`.
   */
  theme?: ITheme;
}

export interface NestableBaseComponentProps extends BaseComponentProps {
  /**
   * Elements to be rendered as children of this component.
   */
  children?: React.ReactNode;
}

export interface FocusableComponentProps {
  focusableRef?(ref: Focusable | null): void;
}
