/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';

export interface NavigationLinkProps extends NestableBaseComponentProps {
  /**
   * Whether the clickable should be `display: block`.
   */
  block?: boolean;

  /**
   * URL or a URL fragment that the link points to.
   */
  href: string;

  /**
   * Whether the link should open in a new window. It securely removes access to the opening window.
   */
  newWindow?: boolean;

  /**
   * If present, indicates the link refers to the current page. This is usually used in cases where the link
   * is visually styled to indicate it is selected or is the current page, such as in a navigation list.
   */
  ariaCurrent?: 'page';

  /**
   * Title or description of the linked document for screenreaders.
   */
  ariaLabel?: string;

  /**
   * Title or description of the linked document for the anchor tag. You should generally avoid using this.
   */
  title?: string;

  /**
   * Whether to remove all styles from the link. Useful for allowing a large area to be clickable
   * while nesting `FakeLink` components to show link and hover state visuals.
   */
  unstyled?: boolean;
}
