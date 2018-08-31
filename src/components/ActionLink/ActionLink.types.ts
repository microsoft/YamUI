/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { BaseComponentProps } from '../../util/BaseComponent/props';
import { BaseIcon } from '../Icon';

export interface BaseActionLinkProps extends BaseComponentProps {
  /**
   * The icon component class to be rendered.
   */
  icon: typeof BaseIcon;

  /**
   * A well-curated string describing the action for screen readers.
   */
  ariaLabel?: string;

  /**
   * The visible text.
   */
  text: string;

  /**
   * A more compressed format.
   */
  compact?: boolean;
}

export interface NavigationActionLinkProps extends BaseActionLinkProps {
  /**
   * A valid URL.
   */
  href: string;

  /**
   * Whether the link should open in a new window. It securely removes access to the opening window.
   */
  newWindow?: boolean;
}

export interface ClickableActionLinkProps extends BaseActionLinkProps {
  /**
   * A click handler.
   */
  onClick?: ((ev?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void);
}

export type ActionLinkProps = NavigationActionLinkProps | ClickableActionLinkProps;
