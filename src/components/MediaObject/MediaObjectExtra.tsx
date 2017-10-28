/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import {
  NestableBaseComponentProps as MediaObjectExtraProps,
} from '../../util/BaseComponent/props';
import Block, { TextSize } from '../Block';
import Text, { TextColor } from '../Text';

export { MediaObjectExtraProps };

export default class MediaObjectExtra extends React.PureComponent<MediaObjectExtraProps, {}> {
  render() {
    const { children } = this.props;

    return (
      <Block className="y-media-object--extra" textSize={TextSize.SMALL} push={4}>
        <Text color={TextColor.METADATA}>{children}</Text>
      </Block>
    );
  }
}
