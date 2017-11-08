/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import FakeLink from '../FakeLink';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './Clickable.css';

export interface ClickableProps extends NestableBaseComponentProps {
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
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * A `Clickable` is an accessible, clickable area that accepts arbitrary children. It is styled
 * like a link by default, but can also be unstyled. Under the hood `Clickable` simply wraps
 * content in a `button` element.
 */
export default class Clickable extends React.PureComponent<ClickableProps, {}> {
  render() {
    const { ariaLabel, title, unstyled, onClick, children } = this.props;

    return (
      <button
        className={this.getClasses()}
        aria-label={ariaLabel}
        title={title}
        onClick={onClick}
        type="button"
      >
        {unstyled ? children : <FakeLink>{children}</FakeLink>}
      </button>
    );
  }

  private getClasses() {
    const { block, className } = this.props;

    const classes: string[] = ['y-clickable'];
    if (block) {
      classes.push('y-clickable__block');
    }
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }
}
