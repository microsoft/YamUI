/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import FakeLink from '../FakeLink';
import { camelCaseToDashed } from '../../util/classNames';
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
   * Display type to use. Defaults to inline, which allows contents to wrap across lines, but can't
   * hold block content. Use `Block` to contain block content, or `InlineBlock` to contain block
   * and size to block content
   */
  display?: 'inline' | 'block' | 'inlineBlock';

  /**
   * Focus outline style to use. Defaults to using 1px inset focus. If link contains content that
   * covers its surface, it should use displayType=BLOCK and focusType=OVERLAY so that the focus
   * is visible and not hidden under the children.
   */
  focus?: 'normal' | 'overlay' | 'highContrastInset';

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
  public render() {
    const { ariaLabel, title, unstyled, onClick, children } = this.props;

    return (
      <button className={this.getClasses()} aria-label={ariaLabel} title={title} onClick={onClick} type="button">
        {unstyled ? children : <FakeLink>{children}</FakeLink>}
      </button>
    );
  }

  private getClasses() {
    const { className, display, focus } = this.props;

    const classes: string[] = ['y-clickable'];
    if (focus) {
      classes.push(`y-focus-${camelCaseToDashed(focus)}`);
    } else {
      classes.push('y-focus-normal');
    }

    if (display) {
      classes.push(`y-display-${camelCaseToDashed(display)}`);
    }

    if (className) {
      classes.push(className);
    }

    // TODO: only some combinations of block + focus are valid
    // TODO: block vs displayType

    return classes.join(' ');
  }
}
