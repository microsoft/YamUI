/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { MediaObjectSize } from '../../util/enums/mediaObject';
import Block, { GutterSize, TextSize } from '../Block';
import Text, { TextColor } from '../Text';


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

const MediaObject: React.StatelessComponent<MediaObjectTitleProps> = props => (
  <Block className="y-media-object--title"
          push={BlockPushMap[props.size]}
          textSize={TextSizeMap[props.size] as TextSize}>
    <Text color={TextColor.PRIMARY}>
      {props.children}
    </Text>
  </Block>
);

export default MediaObject;
