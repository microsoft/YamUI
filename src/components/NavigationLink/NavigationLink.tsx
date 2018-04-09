/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { camelCaseToDashed, join } from '../../util/classNames';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './NavigationLink.css';

export interface NavigationLinkProps extends NestableBaseComponentProps {
  /**
   * URL or a URL fragment that the link points to.
   */
  href: string;

  /**
   * Whether the link should open in a new window. It securely removes access to the opening window.
   */
  newWindow?: boolean;

  /**
   * Title or description of the linked document for the anchor tag.
   */
  title?: string;

  /**
   * Whether to remove all styles from the link. Useful for allowing a large area to be clickable
   * while nesting `FakeLink` components to show link and hover state visuals.
   */
  unstyled?: boolean;

  /**
   * Display type to use. Defaults to inline, which allows contents to wrap across lines, but can't
   * hold block content. Use `Block` to contain block content, or `InlineBlock` to contain block
   * and size to block content
   */
  display?: 'block' | 'inline' | 'inlineBlock';

  /**
   * Focus outline style to use. Defaults to using 1px inset focus. If link contains content that
   * covers its surface, it should use displayType=BLOCK and focusType=OVERLAY so that the focus
   * is visible and not hidden under the children.
   */
  focus?: 'normal' | 'overlay' | 'highContrastInset';
}

/**
 * A `NavigationLink` renders an `a` tag for navigation between web pages.
 */
export default class NavigationLink extends React.Component<NavigationLinkProps> {
  public render() {
    const { href, newWindow, title, children } = this.props;
    const target = newWindow ? '_blank' : undefined;
    const rel = newWindow ? 'nofollow noopener noreferrer' : undefined;

    return (
      <a className={this.getClasses()} href={href} rel={rel} target={target} title={title}>
        {children}
      </a>
    );
  }

  private getClasses() {
    const { className, unstyled, focus, display } = this.props;

    const classes: string[] = ['y-navigationLink'];
    if (unstyled) {
      classes.push('y-navigationLink__unstyled');
    }

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

    // TODO: throw errors for incompatible cases?

    return join(classes);
  }
}
