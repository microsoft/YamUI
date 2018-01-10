/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Block, { TextColor, TextSize } from '../Block';
import { MediaObjectSize } from './enums';

export { MediaObjectSize };

const BlockPushMap = {
  [MediaObjectSize.XLARGE]: -1,
  [MediaObjectSize.LARGE]: 3,
  [MediaObjectSize.MEDIUM]: 3,
  [MediaObjectSize.SMALL]: -2,
  [MediaObjectSize.XSMALL]: 0,
};

export interface MediaObjectMetadataProps {
  size: MediaObjectSize;

  /**
   * Limits text content to a single line, hiding additional text with an ellipsis.
   */
  ellipsis?: boolean;
}

export default class MediaObjectMetadata extends React.Component<MediaObjectMetadataProps, {}> {
  render() {
    const { size, children, ellipsis } = this.props;

    return (
      <Block
        className="y-media-object--metadata"
        textColor={TextColor.METADATA}
        textSize={TextSize.SMALL}
        push={BlockPushMap[size]}
        ellipsis={ellipsis}
      >
        {children}
      </Block>
    );
  }
}
