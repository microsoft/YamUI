/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import FakeLink from '../FakeLink';
import { join } from '../../util/classNames';
import { NestableBaseComponentProps, FocusableComponentProps } from '../../util/BaseComponent/props';
import { getClassNames } from './Clickable.styles';
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

/**
 * A `Clickable` is an accessible, clickable area that accepts arbitrary children. It is styled
 * like a link by default, but can also be unstyled. Under the hood `Clickable` simply wraps
 * content in a `button` element.
 */
export default class Clickable extends React.Component<ClickableProps> {
  private buttonRef = React.createRef<HTMLButtonElement>();

  public constructor(props: ClickableProps) {
    super(props);
    if (this.props.focusableRef) {
      this.props.focusableRef(this);
    }
  }

  public render() {
    const { ariaLabel, title, unstyled, onClick, children, block, className } = this.props;
    const classNames = getClassNames({ block });

    return (
      <button
        className={join(['y-clickable', classNames.root, className])}
        aria-label={ariaLabel}
        title={title}
        onClick={onClick}
        type="button"
        ref={this.buttonRef}
      >
        {unstyled ? children : <FakeLink>{children}</FakeLink>}
      </button>
    );
  }

  public focus() {
    const button = this.buttonRef.current;
    if (button) {
      button.focus();
    }
  }
}
