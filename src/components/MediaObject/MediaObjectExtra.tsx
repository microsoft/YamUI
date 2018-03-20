/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import Block, { TextColor, TextSize } from '../Block';

export interface MediaObjectExtraProps {
  /**
   * Limits text content to a single line, hiding additional text with an ellipsis.
   */
  ellipsis?: boolean;
}

export default class MediaObjectExtra extends React.Component<MediaObjectExtraProps> {
  public render() {
    const { children, ellipsis } = this.props;

    return (
      <Block
        className="y-media-object--extra"
        textColor={TextColor.METADATA}
        textSize={TextSize.SMALL}
        push={4}
        ellipsis={ellipsis}
      >
        {children}
      </Block>
    );
  }
}
