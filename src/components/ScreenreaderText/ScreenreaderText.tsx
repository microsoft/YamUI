/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import classNames = require('classnames');
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './ScreenreaderText.css';

export interface ScreenreaderTextProps extends NestableBaseComponentProps {}

export default class ScreenreaderText extends React.PureComponent<ScreenreaderTextProps, {}> {
  render() {
    const { className, children } = this.props;

    return <span className={classNames('y-screenreaderText', className)}>{children}</span>;
  }
}
