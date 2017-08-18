/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Image, { ImageFit, ImageLoadState } from '../components/Image';
import withReadme from 'storybook-readme/with-readme';
const readme = require('../components/Image/README');


const yammerLogo = require('./assets/img/yammer-logo.png');
const yammerLogoOrange = require('./assets/img/yammer-logo-orange.jpg');
const yammerLogoDescription = 'Yammer "y" logo';

storiesOf('Image', module)
  .addDecorator(withReadme(readme))
  .add('basic image', () => (
    <div>
      The Image component renders an img element within a wrapper div. This div is displayed as inline-block
      so it behaves like a standard inline image. Height and width actually get applied to the wrapper div,
      and the image will get scaled/positioned within the wrapper depending on which props you provide.
      <br />
      <Image source={yammerLogo}
             description={yammerLogoDescription}
             width={250}
             height={140} />
    </div>
  ))
  .add('image fit: not provided', () => (
    <div>
      Our example image is a rectangle, so if we provide equal height and width without providing
      an imageFit prop it gets stretched:
      <br />
      <Image source={yammerLogo}
             description={yammerLogoDescription}
             height={250}
             width={250} />
    </div>
  ))
  .add('image fit: cover', () => (
    <div>
      Here we set imageFit: ImageFit.cover. This can be used to nicely fill the
      desired image area while hiding any overflow:
      <br />
      <Image source={yammerLogo}
             description={yammerLogoDescription}
             height={250}
             width={250}
             imageFit={ImageFit.cover} />
    </div>
  ))
  .add('image fit: contain', () => (
    <div>
      Here we set imageFit: ImageFit.contain, which displays the entire image within our
      image area and leaves whitespace:
      <br />
      <Image source={yammerLogo}
             description={yammerLogoDescription}
             height={250}
             width={250}
             imageFit={ImageFit.contain} />
    </div>
  ))
  .add('image fit: center', () => (
    <div>
      Here we set imageFit: ImageFit.center. This centers the image horizontally and vertically,
      using the image's original size and cropping its overflow.
      <br />
      <Image source={yammerLogo}
             description={yammerLogoDescription}
             height={250}
             width={250}
             imageFit={ImageFit.center} />
      <br />
    </div>
  ))
  .add('image fit: none', () => (
    <div>
      Here we set imageFit: ImageFit.none. This places the image at the top left of its div
      wrapper. It will render at its original size, possibly showing whitespace or hiding its overflow.
      This is generally not an option you will want to use.
      <br />
      <Image source={yammerLogo}
             description={yammerLogoDescription}
             height={250}
             width={250}
             imageFit={ImageFit.none} />
      <br />
    </div>
  ))
  .add('full width', () => {
    // TODO: Clean this up when we have grid components
    const fullWidthImage = <Image source={yammerLogo} description={yammerLogoDescription} fullWidth={true} />;
    return(
      <div>
        <table style={{ maxWidth: '500px' }}>
          <tbody>
            <tr>
              <td colSpan={4}>
                If you set fullWidth: true your image will grow to fit the width of its container. Use this option when
                you have a grid or some other layout component determining the space an image should fill.
                Any provided height and width will be ignored in this case, replaced with width: 100% and height: auto.
              </td>
            </tr>
            <tr>
              <td style={{ width: '25%' }}>{fullWidthImage}</td>
              <td style={{ width: '25%' }}>{fullWidthImage}</td>
              <td style={{ width: '25%' }}>{fullWidthImage}</td>
              <td style={{ width: '25%' }}>{fullWidthImage}</td>
            </tr>
            <tr>
              <td colSpan={2} style={{ width: '50%' }}>{fullWidthImage}</td>
              <td colSpan={2} style={{ width: '50%' }}>{fullWidthImage}</td>
            </tr>
            <tr>
              <td colSpan={4}>{fullWidthImage}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  })
  .add('load events', () => {
    interface StateChangeDemoState {
      source: string;
    }
    class StateChangeDemo extends React.Component<{}, StateChangeDemoState> {
      constructor () {
        super();
        this.state = {
          source: '404.png',
        };

        this.handleStateChange = this.handleStateChange.bind(this);
      }
      render () {
        return (
          <Image source={this.state.source}
                 description={yammerLogoDescription}
                 height={150}
                 width={250}
                 imageFit={ImageFit.cover}
                 onLoadingStateChange={this.handleStateChange} />
        );
      }
      handleStateChange (loadState: ImageLoadState) {
        action(ImageLoadState[loadState])();
        if (loadState === ImageLoadState.error) {
          this.setState({ source: yammerLogoOrange });
        }
      }
    }
    return (
      <div>
        When an Image component's loading state changes it will trigger the onLoadingStateChange prop
        callback, providing a loading state of enum ImageLoadState. This example updates the source URL
        passed to the Image component when its onLoadingStateChange is called with ImageLoadState.error.
        <br />
        <StateChangeDemo />
      </div>
    );
  });
