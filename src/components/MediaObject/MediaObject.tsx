/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { FixedGridRow, FixedGridColumn, GutterSize } from '../FixedGrid';
import { MediaObjectSize } from './types';
import MediaObjectTitle from './MediaObjectTitle';
import MediaObjectMetadata from './MediaObjectMetadata';
import MediaObjectExtra from './MediaObjectExtra';
import { getClassNames } from './MediaObject.styles';

export { MediaObjectSize };

export interface MediaObjectProps extends NestableBaseComponentProps {
  /**
   * Dimensions for the media object.
   */
  size: MediaObjectSize;

  /**
   * Image content. If you're providing an `Avatar` component, note that its sizes may not match the
   * corresponding `MediaObject` size. If you're providing an `Image` component, you can set
   * `fullWidth: true` to fill the left column width.
   */
  imageContent?: React.ReactNode;

  /**
   * Title content. This should be plain text, but could be wrapped in arbitrary node if necessary.
   */
  titleContent?: React.ReactNode;

  /**
   * Metadata or secondary content. Will be displayed light gray. This should generally be plain
   * text, but you can pass in arbitrary content if necessary.
   */
  metadataContent?: React.ReactNode;

  /**
   * Extra or tertiary content. Will be displayed light gray. This should generally be plain text,
   * but you can pass in arbitrary content if necessary. If you need to pass in arbitrary extra
   * content like buttons or other elements, pass those in as children instead of here.
   */
  extraContent?: React.ReactNode;

  /**
   * If true, wraps text to the next line, preventing truncation.
   * If false or undefined, limits text content to a single line, hiding additional text with an ellipsis.
   */
  allowTextWrap?: boolean;
}

const ImageWidthMap = {
  [MediaObjectSize.XLARGE]: 72,
  [MediaObjectSize.LARGE]: 48,
  [MediaObjectSize.MEDIUM]: 40,
  [MediaObjectSize.SMALL]: 32,
  [MediaObjectSize.XSMALL]: 24,
};

/**
 * A `MediaObject` renders an image on the left with blocks of descriptive content on the right. The
 * image area, and pieces of text content, are passed in as props, with size and layout determined
 * by the `size` prop.
 */
export default class MediaObject extends React.Component<MediaObjectProps> {
  public render() {
    const { size, imageContent, titleContent, metadataContent, extraContent, children, allowTextWrap } = this.props;

    return (
      <div className={join(['y-media-object', this.props.className])}>
        <FixedGridRow gutterSize={size === MediaObjectSize.XLARGE ? GutterSize.XLARGE : GutterSize.MEDIUM}>
          <FixedGridColumn width={ImageWidthMap[size]} fixed={true} className={getClassNames({ size }).imageColumn}>
            {imageContent}
          </FixedGridColumn>
          <FixedGridColumn>
            {titleContent && (
              <MediaObjectTitle ellipsis={!allowTextWrap} size={size}>
                {titleContent}
              </MediaObjectTitle>
            )}
            {metadataContent &&
              size !== MediaObjectSize.XSMALL && (
                <MediaObjectMetadata ellipsis={!allowTextWrap} size={size}>
                  {metadataContent}
                </MediaObjectMetadata>
              )}
            {extraContent &&
              size === MediaObjectSize.XLARGE && (
                <MediaObjectExtra ellipsis={!allowTextWrap}>{extraContent}</MediaObjectExtra>
              )}
            {children}
          </FixedGridColumn>
        </FixedGridRow>
      </div>
    );
  }
}
