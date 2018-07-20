/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import { NestableBaseComponentProps, FocusableComponentProps } from '../../util/BaseComponent/props';

export interface ClickableProps extends NestableBaseComponentProps, FocusableComponentProps {
  /**
   * Additional label that must be provided if the clickable text is not descriptive enough.
   */
  ariaLabel?: string;

  /**
   * Whether the clickable should be `display: block`.
   */
  block?: boolean;

  /**
   * Title or description of the linked document.
   */
  title?: string;

  /**
   * Whether to remove all styles from the link. Useful for allowing a large area to be clickable
   * while nesting `FakeLink` components to show link and hover state visuals.
   */
  unstyled?: boolean;

  /**
   * Click callback handler.
   */
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void);
}
