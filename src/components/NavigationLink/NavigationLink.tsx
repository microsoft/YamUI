/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import autobind from 'core-decorators/lib/autobind';
import classNames = require('classnames');
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { secureOpen } from '../../util/secureOpener';
import './NavigationLink.css';

export interface NavigationLinkProps extends NestableBaseComponentProps {
  /**
   * The URL to navigate to on click
   */
  href: string;
  /**
   * If true, opens the href in a new window and securely removes access to the opening window
   */
  newWindow?: boolean;
  /**
   * An optional title attribute for the anchor tag
   */
  title?: string;
  /**
   * If true, removes styling so text/content does not look like a link. Useful for allowing a large
   * area to be clickable while nesting a FakeLink component(s) to show link and hover state visuals
   */
  unstyled?: boolean;
}

export default class NavigationLink extends React.PureComponent<NavigationLinkProps, {}> {
  render() {
    const { href, newWindow, title, children } = this.props;
    const target = newWindow ? '_blank' : undefined;
    const rel = newWindow ? 'nofollow noreferrer' : undefined;

    return (
      <a
        className={this.getClasses()}
        href={href}
        rel={rel}
        target={target}
        title={title}
        onClick={this.handleClick}
      >
        {children}
      </a>
    );
  }

  private getClasses() {
    const { className, newWindow, unstyled } = this.props;

    const classes: string[] = ['y-navigationLink'];
    if (newWindow) {
      classes.push('y-navigationLink__newWindow');
    }
    if (unstyled) {
      classes.push('y-navigationLink__unstyled');
    }
    if (className) {
      classes.push(className);
    }

    return classNames(classes);
  }

  @autobind
  private handleClick(event: React.SyntheticEvent<HTMLAnchorElement>) {
    const { href, newWindow } = this.props;

    if (!newWindow) {
      return;
    }

    event.preventDefault();
    secureOpen(href);
  }
}
