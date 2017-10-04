/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import classNames = require('classnames');
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './fake-link.css';

export interface FakeLinkProps extends NestableBaseComponentProps {}

const FakeLink: React.StatelessComponent<FakeLinkProps> = props => (
  <span className={classNames('y-fakeLink', props.className)}>{props.children}</span>
);

export default FakeLink;
