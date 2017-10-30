/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
export interface BaseComponentProps {
  /**
   * One or more class names in one string, i.e. "class-one class-two"
   */
  className?: string;
}

// This interface should be used for "container" components which allow child components
export interface NestableBaseComponentProps extends BaseComponentProps {
  /**
   * Abribtrary JSX content
   */
  children?: React.ReactNode;
}
