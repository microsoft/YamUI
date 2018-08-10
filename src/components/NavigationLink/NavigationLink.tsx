/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';
import { join } from '../../util/classNames';
import { getClassNames } from './NavigationLink.styles';
import { NavigationLinkProps } from './NavigationLink.types';

/**
 * A `NavigationLink` renders an `a` tag for navigation between web pages.
 */
export class NavigationLink extends React.Component<NavigationLinkProps & CustomizableComponentProps> {
  public render() {
    const {
      ariaCurrent,
      ariaLabel,
      href,
      newWindow,
      title,
      children,
      unstyled,
      block,
      className,
      theme = defaultTheme,
    } = this.props;
    const classNames = getClassNames({ unstyled, block, theme });

    return (
      <a
        className={join(['y-navigationLink', className, classNames.root])}
        href={href}
        rel={newWindow ? 'nofollow noopener noreferrer' : undefined}
        target={newWindow ? '_blank' : undefined}
        title={title}
        aria-label={ariaLabel}
        aria-current={ariaCurrent}
      >
        {children}
      </a>
    );
  }
}

@customizable('NavigationLink', ['theme'])
export default class CustomizableNavigationLink extends NavigationLink {}
