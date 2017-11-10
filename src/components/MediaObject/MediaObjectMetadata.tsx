/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Block, { GutterSize, TextSize } from '../Block';
import Text, { TextColor } from '../Text';
import { MediaObjectSize } from './enums';

export { MediaObjectSize };

const BlockPushMap = {
  [MediaObjectSize.XLARGE]: -1,
  [MediaObjectSize.LARGE]: 3,
  [MediaObjectSize.MEDIUM]: 3,
  [MediaObjectSize.SMALL]: 0,
  [MediaObjectSize.XSMALL]: 0,
};

export interface MediaObjectMetadataProps {
  size: MediaObjectSize;
}

export default class MediaObjectMetadata extends React.PureComponent<MediaObjectMetadataProps, {}> {
  render() {
    const { size, children } = this.props;

    return (
      <Block
        className="y-media-object--metadata"
        textSize={TextSize.SMALL}
        bottomSpacing={GutterSize.XSMALL}
        push={BlockPushMap[size]}
      >
        <Text color={TextColor.METADATA}>{children}</Text>
      </Block>
    );
  }
}
