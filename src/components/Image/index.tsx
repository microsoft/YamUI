/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import '../../yamui';
import * as React from 'react';
import { Image as FabricImage, ImageFit, ImageLoadState } from 'office-ui-fabric-react/lib/Image';
import { BaseComponentProps } from '../../util/BaseComponent/props';
import './image.css';


export { ImageFit, ImageLoadState };

export interface ImageProps extends BaseComponentProps {
  /**
   * Image src URL, required
   */
  source: string;

  /**
   * Alt text, required for accessibility. Set to an empty string if screenreaders should not read anything out loud.
   */
  description: string;

  /**
   * Height in pixels
   */
  height?: number;

  /**
   * Width in pixels
   * */
  width?: number;

  /**
   * Specifies how to position this image within its div wrapper. Not setting a value will behave as expected,
   * setting the image's height and width to the provides values and stretching/skewing the image if its actual
   * dimensions don't match. Providing an ImageFit value allows you to specify a different height/width than
   * the image's actual dimensions while covering the area, containing the image within the area, centering the
   * image without scaling or stretching, etc.
   */
  imageFit?: ImageFit;

  /**
   * Set this to true in responsive layouts where the Image's container element should dictate the image's width.
   * The image will grow to fit its container's width and its height will grow to match its natural aspect ratio.
   */
  fullWidth?: boolean;

  /**
   * Callback to be invoked when the image's loading state changes. Provides an ImageLoadState enum value.
   */
  onLoadingStateChange?: (loadState: ImageLoadState) => void;
}

export default class Image extends React.PureComponent<ImageProps, {}> {
  static defaultProps: Partial<ImageProps> = {
    fullWidth: false,
  };

  getClasses () {
    const classes: string[] = [
      'y-image',
    ];
    if (this.props.fullWidth) {
      classes.push('y-image__fullWidth');
    }
    if (this.props.className) {
      classes.push(this.props.className);
    }
    return classes.join(' ');
  }

  render () {
    let height = this.props.height;
    let width: number | string | undefined = this.props.width;
    if (this.props.fullWidth) {
      height = undefined;
      width = '100%';
    }

    return (
      <FabricImage src={this.props.source}
                   alt={this.props.description}
                   className={this.getClasses()}
                   height={height}
                   width={width}
                   imageFit={this.props.imageFit}
                   onLoadingStateChange={this.props.onLoadingStateChange} />
    );
  }
}
