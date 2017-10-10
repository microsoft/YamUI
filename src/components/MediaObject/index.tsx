/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { NestableBaseComponentProps } from '../../util/BaseComponent/props';
import { MediaObjectSize } from '../../util/enums/mediaObject';
import { FixedGridRow, FixedGridColumn, GutterSize } from '../FixedGrid';
import MediaObjectTitle from './media-object-title';
import MediaObjectMetadata from './media-object-metadata';
import MediaObjectExtra from './media-object-extra';
import './media-object.css';

export { MediaObjectSize };

export interface MediaObjectProps extends NestableBaseComponentProps {
  /**
   * The MediaObjectSize which this component's dimensions, font-sizes and text vertical rhythm will
   * be based on.
   */
  size: MediaObjectSize;

  /**
   * Image content, components or JSX. If you're providing an Avatar component note that its sizes
   * may not match the corresponding MediaObject size. If you're providing an Image component you
   * can set fullWidth:true to fill the left column width.
   */
  imageContent?: React.ReactNode;

  /**
   * Title content. This should be plain text, but could be wrapped in arbitrary node if necessary.
   */
  titleContent?: string | React.ReactNode;

  /**
   * Metadata/secondary content. Will be displayed light gray. This should generally be plain text,
   * but you can pass in arbitrary JSX if necessary.
   */
  metadataContent?: string | React.ReactNode;

  /**
   * Extra/tertiary content. Will be displayed light gray. This should generally be plain text,
   * but you can pass in arbitrary JSX if necessary. If you need to pass in arbitrary extra content
   * like buttons or other HTML, pass those in as children instead of the extraContent prop.
   */
  extraContent?: string | React.ReactNode;
}

const ImageWidthMap = {
  [MediaObjectSize.XLARGE]: 72,
  [MediaObjectSize.LARGE]: 48,
  [MediaObjectSize.MEDIUM]: 40,
  [MediaObjectSize.SMALL]: 32,
  [MediaObjectSize.XSMALL]: 24,
};

const getClasses = (props: MediaObjectProps) => {
  const classes: string[] = ['y-media-object', `y-media-object__size-${props.size}`];
  if (props.className) {
    classes.push(props.className);
  }
  return classes.join(' ');
};

const getGutterSize = (size: MediaObjectSize) => {
  if (size === MediaObjectSize.XLARGE) {
    return GutterSize.XLARGE;
  }
  return GutterSize.MEDIUM;
};

const showMetadata = (props: MediaObjectProps) => {
  if (!props.metadataContent) {
    return false;
  }
  if (props.size === MediaObjectSize.XSMALL) {
    return false;
  }
  return true;
};

const showExtra = (props: MediaObjectProps) => {
  if (!props.extraContent) {
    return false;
  }
  return props.size === MediaObjectSize.XLARGE;
};

const MediaObject: React.StatelessComponent<MediaObjectProps> = (props) => {
  const gutterSize = getGutterSize(props.size);
  const imageColumnClass = `y-media-object__size-${props.size}--image`;

  const titleContent = props.titleContent && (
    <MediaObjectTitle size={props.size}>{props.titleContent}</MediaObjectTitle>
  );
  const metadataContent = showMetadata(props) && (
    <MediaObjectMetadata size={props.size}>{props.metadataContent}</MediaObjectMetadata>
  );

  return (
    <div className={getClasses(props)}>
      <FixedGridRow gutterSize={gutterSize}>
        <FixedGridColumn
          width={ImageWidthMap[props.size]}
          fixed={true}
          className={imageColumnClass}
        >
          {props.imageContent}
        </FixedGridColumn>
        <FixedGridColumn>
          {titleContent}
          {metadataContent}
          {showExtra(props) && <MediaObjectExtra>{props.extraContent}</MediaObjectExtra>}
          {props.children}
        </FixedGridColumn>
      </FixedGridRow>
    </div>
  );
};

export default MediaObject;
