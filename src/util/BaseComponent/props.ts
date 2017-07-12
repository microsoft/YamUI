/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
export interface BaseComponentProps {
  className?: string;
}

// This interface should be used for "container" components which allow child components
export interface NestableBaseComponentProps extends BaseComponentProps {
  children?: any;
}
