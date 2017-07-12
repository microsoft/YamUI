/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import Block, { TextSize } from '../Block';
import Text, { TextColor } from '../Text';


const MediaObjectExtra: React.StatelessComponent<NestableBaseComponentProps> = (props) => (
  <Block className="y-media-object--extra" textSize={TextSize.SMALL} push={4}>
    <Text color={TextColor.METADATA}>
      {props.children}
    </Text>
  </Block>
);

export default MediaObjectExtra;
