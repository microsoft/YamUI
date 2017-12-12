/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Block, { TextSize } from '../Block';
import Text, { TextColor } from '../Text';
import { MediaObjectSize } from './enums';

export { MediaObjectSize };

const TextSizeMap = {
  [MediaObjectSize.XLARGE]: TextSize.MEDIUM,
  [MediaObjectSize.LARGE]: TextSize.MEDIUM,
  [MediaObjectSize.MEDIUM]: TextSize.MEDIUM,
  [MediaObjectSize.SMALL]: TextSize.SMALL,
  [MediaObjectSize.XSMALL]: TextSize.MEDIUM_SUB,
};
const BlockPushMap = {
  [MediaObjectSize.XLARGE]: 2,
  [MediaObjectSize.LARGE]: 2,
  [MediaObjectSize.MEDIUM]: 0,
  [MediaObjectSize.SMALL]: 0,
  [MediaObjectSize.XSMALL]: 0,
};

export interface MediaObjectTitleProps {
  size: MediaObjectSize;
}

export default class MediaObjectTitle extends React.Component<MediaObjectTitleProps, {}> {
  render() {
    const { size, children } = this.props;

    return (
      <Block
        className="y-media-object--title"
        push={BlockPushMap[size]}
        textSize={TextSizeMap[size] as TextSize}
      >
        <Text color={TextColor.PRIMARY}>{children}</Text>
      </Block>
    );
  }
}
