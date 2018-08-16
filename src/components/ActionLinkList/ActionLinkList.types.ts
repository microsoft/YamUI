/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { BaseComponentProps } from '../../util/BaseComponent/props';
import ActionLink from '../ActionLink';

export interface ActionLinkListProps extends BaseComponentProps {
  /**
   * An array of ActionLink components.
   */
  items: React.ReactElement<ActionLink>[];
}
