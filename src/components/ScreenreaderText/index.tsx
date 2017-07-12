/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import classNames = require('classnames');
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import './screenreader-text.css';


export interface ScreenreaderTextProps extends NestableBaseComponentProps {}

const ScreenreaderText: React.StatelessComponent<ScreenreaderTextProps> = (props) => {
  return (
    <span className={classNames('y-screenreaderText', props.className)}>
      {props.children}
    </span>
  );
};
export default ScreenreaderText;
