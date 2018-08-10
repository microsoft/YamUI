/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { FakeLinkProps } from './FakeLink.types';
import { getClassNames } from '../FakeLink/FakeLink.styles';
import { CustomizableComponentProps, defaultTheme, customizable } from '../Customizer';

/**
 * A `FakeLink` is simply a span which imitates the styling of an `<a>` tag (or `NavigationLink`
 * component). It is meant to be nested within unstyled `NavigationLink` or `Clickable`
 * components, allowing an entire block of content to be an accessible tabbable element while
 * still showing individual nested "links" for sighted users.
 *
 * NOTE: If you are looking for click interaction please see [Clickable](#clickable).
 */
export class FakeLink extends React.Component<FakeLinkProps & CustomizableComponentProps> {
  public render() {
    const { className, children, theme = defaultTheme } = this.props;
    const { root } = getClassNames({ theme });

    return <span className={join(['y-fakeLink', className, root])}>{children}</span>;
  }
}

@customizable('FakeLink', ['theme'])
export default class CustomizableFakeLink extends FakeLink {}
