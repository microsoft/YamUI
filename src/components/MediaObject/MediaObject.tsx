/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { FixedGridRow, FixedGridColumn, GutterSize } from '../FixedGrid';
import { MediaObjectSize } from './enums';
import MediaObjectTitle from './MediaObjectTitle';
import MediaObjectMetadata from './MediaObjectMetadata';
import MediaObjectExtra from './MediaObjectExtra';
import './MediaObject.css';

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
export default class MediaObject extends React.PureComponent<MediaObjectProps, {}> {
  render() {
    const {
      size,
      imageContent,
      titleContent,
      metadataContent,
      extraContent,
      children,
    } = this.props;

    const gutterSize = this.getGutterSize();
    const imageColumnClass = `y-media-object__size-${size}--image`;

    const titleContentChild = titleContent && (
      <MediaObjectTitle size={size}>{titleContent}</MediaObjectTitle>
    );
    const metadataContentChild = this.showMetadata() && (
      <MediaObjectMetadata size={size}>{metadataContent}</MediaObjectMetadata>
    );
    const extraContentChild = this.showExtra() && (
      <MediaObjectExtra>{extraContent}</MediaObjectExtra>
    );

    return (
      <div className={this.getClasses()}>
        <FixedGridRow gutterSize={gutterSize}>
          <FixedGridColumn width={ImageWidthMap[size]} fixed={true} className={imageColumnClass}>
            {imageContent}
          </FixedGridColumn>
          <FixedGridColumn>
            {titleContentChild}
            {metadataContentChild}
            {extraContentChild}
            {children}
          </FixedGridColumn>
        </FixedGridRow>
      </div>
    );
  }

  private getClasses() {
    const { className, size } = this.props;

    const classes: string[] = ['y-media-object', `y-media-object__size-${size}`];
    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  }

  private getGutterSize() {
    const { size } = this.props;

    return size === MediaObjectSize.XLARGE ? GutterSize.XLARGE : GutterSize.MEDIUM;
  }

  private showMetadata() {
    const { metadataContent, size } = this.props;

    if (!metadataContent) {
      return false;
    }
    if (size === MediaObjectSize.XSMALL) {
      return false;
    }
    return true;
  }

  private showExtra() {
    const { extraContent, size } = this.props;

    if (!extraContent) {
      return false;
    }

    return size === MediaObjectSize.XLARGE;
  }
}
