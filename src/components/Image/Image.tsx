/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { join } from '../../util/classNames';
import { Image as FabricImage } from 'office-ui-fabric-react/lib/Image';
import { getClassNames } from './Image.styles';
import { ImageProps } from './Image.types';

/**
 * An `Image` renders an `img` element within a wrapper `div`. This `div` is displayed as
 * `inline-block`, so it behaves like a standard inline image. The `height` and `width` actually get
 * applied to the wrapper `div`, and the image will get scaled/positioned within the wrapper
 * depending on which props you provide.
 */
export default class Image extends React.Component<ImageProps> {
  public static defaultProps: Partial<ImageProps> = {
    fullWidth: false,
    shouldFadeIn: false,
  };

  public render() {
    const {
      description,
      fullWidth,
      height,
      width,
      imageFit,
      source,
      shouldFadeIn,
      onLoadingStateChange,
      borderType,
      block,
      className,
    } = this.props;
    const classNames = getClassNames({ borderType, fullWidth, block });
    return (
      <FabricImage
        alt={description}
        className={join(['y-image', className, classNames.root])}
        height={height}
        imageFit={imageFit}
        width={fullWidth ? '100%' : width}
        src={source}
        onLoadingStateChange={onLoadingStateChange}
        shouldFadeIn={shouldFadeIn}
      />
    );
  }
}
