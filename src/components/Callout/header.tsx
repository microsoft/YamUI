/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import classNames = require('classnames');
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import Block, { GutterSize } from '../Block';


export interface CalloutHeaderProps extends NestableBaseComponentProps {}

export const CalloutHeader: React.StatelessComponent<CalloutHeaderProps> = (props) => {
  return (
    <div className={classNames('y-callout--header', props.className)}>
      <Block padding={GutterSize.XLARGE}>
        {props.children}
      </Block>
    </div>
  );
};
