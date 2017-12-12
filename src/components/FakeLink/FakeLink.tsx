/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import classNames = require('classnames');
import { NestableBaseComponentProps as FakeLinkProps } from '../../util/BaseComponent/props';
import './FakeLink.css';

export { FakeLinkProps };

/**
 * A `FakeLink` is simply a span which imitates the styling of an `<a>` tag (or `NavigationLink`
 * component). It is meant to be nested within unstyled `NavigationLink` or `Clickable`
 * components, allowing an entire block of content to be an accessible tabbable element while
 * still showing individual nested "links" for sighted users.
 *
 * NOTE: If you are looking for click interaction please see [Clickable](#clickable).
 */
export default class FakeLink extends React.Component<FakeLinkProps, {}> {
  render() {
    const { className, children } = this.props;

    return <span className={classNames('y-fakeLink', className)}>{children}</span>;
  }
}
