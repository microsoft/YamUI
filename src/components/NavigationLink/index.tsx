/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import classNames = require('classnames');
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { secureOpen } from '../../util/secureOpener';
import './navigation-link.css';


export interface NavigationLinkProps extends NestableBaseComponentProps {
  href: string;
  newWindow?: boolean;
  unstyled?: boolean;
}

export default class NavigationLink extends React.Component<NavigationLinkProps, {}> {
  constructor (props: NavigationLinkProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  getClasses () {
    const classes: string[] = [
      'y-navigationLink',
    ];
    if (this.props.newWindow) {
      classes.push('y-navigationLink__newWindow');
    }
    if (this.props.unstyled) {
      classes.push('y-navigationLink__unstyled');
    }
    if (this.props.className) {
      classes.push(this.props.className);
    }
    return classNames(classes);
  }

  handleClick (event: React.SyntheticEvent<HTMLAnchorElement>) {
    if (!this.props.newWindow) {
      return;
    }

    secureOpen(this.props.href);
    event.preventDefault();
  }

  render () {
    let target;
    let rel;
    if (this.props.newWindow) {
      target = '_blank';
      rel = 'nofollow noreferrer';
    }
    return (
      <a href={this.props.href} className={this.getClasses()} onClick={this.handleClick} target={target} rel={rel}>
        {this.props.children}
      </a>
    );
  }
}
