/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import classNames = require('classnames');
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './FakeLink.css';

export interface FakeLinkProps extends NestableBaseComponentProps {}

export default class FakeLink extends React.PureComponent<FakeLinkProps, {}> {
  render() {
    const { className, children } = this.props;

    return <span className={classNames('y-fakeLink', className)}>{children}</span>;
  }
}
