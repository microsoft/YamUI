/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';

export interface AsideSectionProps extends NestableBaseComponentProps {
  /**
   * The visual title of the aside section
   */
  title: string;

  /**
   * An actionable react component to the right of the title
   */
  action?: React.ReactNode;
}
