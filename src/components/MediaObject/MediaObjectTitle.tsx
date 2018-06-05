/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Block, { TextColor, TextSize } from '../Block';
import { MediaObjectSize } from './types';

export { MediaObjectSize };

const TextSizeMap = {
  [MediaObjectSize.XLARGE]: TextSize.MEDIUM,
  [MediaObjectSize.LARGE]: TextSize.MEDIUM,
  [MediaObjectSize.MEDIUM]: TextSize.MEDIUM,
  [MediaObjectSize.SMALL]: TextSize.MEDIUM_SUB,
  [MediaObjectSize.XSMALL]: TextSize.MEDIUM_SUB,
};
const BlockPushMap = {
  [MediaObjectSize.XLARGE]: 2,
  [MediaObjectSize.LARGE]: 2,
  [MediaObjectSize.MEDIUM]: 0,
  [MediaObjectSize.SMALL]: 1,
  [MediaObjectSize.XSMALL]: 1,
};

export interface MediaObjectTitleProps {
  size: MediaObjectSize;

  /**
   * Limits text content to a single line, hiding additional text with an ellipsis.
   */
  ellipsis?: boolean;
}

export default class MediaObjectTitle extends React.Component<MediaObjectTitleProps> {
  public render() {
    const { size, children, ellipsis } = this.props;

    return (
      <Block
        className="y-media-object--title"
        push={BlockPushMap[size]}
        textColor={TextColor.PRIMARY}
        textSize={TextSizeMap[size]}
        ellipsis={ellipsis}
      >
        {children}
      </Block>
    );
  }
}
